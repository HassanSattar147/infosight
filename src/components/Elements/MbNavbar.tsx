import React from "react";
import Image from "next/image";
import logoImg from "../../../public/infosight-new-logo-1.svg";
import Link from "next/link";
import "@/styles/nav.css";
import { ALL_MENUS, RootObject } from "./NavBar";

const MbNavbar = () => {
  const [isNavExpanded, setIsNavExpanded] = React.useState(false);
  const [selectedMenus, setSelectedMenus] = React.useState<RootObject[]>([]);

  const selectedMenu = React.useMemo(() => {
    if (selectedMenus.length === 0) return;

    return selectedMenus.at(-1);
  }, [selectedMenus]);

  return (
    <div className="mb-nav-container">
      <button
        onClick={() => {
          setIsNavExpanded(true);
        }}
      >
        <HambergurIcon />
      </button>
      <div className="mb-nav-container-logo">
        <Link href={"/"}>
          <Image src={logoImg} alt="" role="button" height={33} />
        </Link>
      </div>
      <div
        className={`mb-exp-menu ${isNavExpanded ? "expanded" : "collapsed"}`}
      >
        <BackIcon
          title={selectedMenu ? selectedMenu.title : "Back"}
          onClick={() => {
            if (selectedMenus.length == 0) setIsNavExpanded(false);
            const newMenus = [...selectedMenus];
            newMenus.pop();
            setSelectedMenus([...newMenus]);
          }}
        />
        {(selectedMenu ? selectedMenu.children : ALL_MENUS)?.map(
          (menuItem, i) => {
            return (
              <MenuItem
                menuItem={menuItem}
                setSelectedMenus={setSelectedMenus}
                key={"mbnavbar_menuItem" + i}
              />
            );
          }
        )}
      </div>
    </div>
  );
};

export default MbNavbar;

function MenuItem({
  menuItem,
  setSelectedMenus,
}: {
  menuItem: RootObject;
  setSelectedMenus: React.Dispatch<React.SetStateAction<RootObject[]>>;
}) {
  const hasChildren = "children" in menuItem;
  const { link, title } = menuItem;
  return (
    <div className="menu-item">
      {hasChildren ? (
        <div
          className="flex items-center justify-between"
          onClick={() => {
            setSelectedMenus((x) => [...x, menuItem]);
          }}
        >
          <div>{title}</div>
          <div>
            <NextIcon />
          </div>
        </div>
      ) : (
        <Link href={link as string}>{title}</Link>
      )}
    </div>
  );
}

function HambergurIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="#575757"
      className="w-7 h-7"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
  );
}

function BackIcon({
  title,
  onClick,
}: {
  title: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}) {
  return (
    <div className="backIcon-container" onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="black"
        className="w-5 h-5"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15.75 19.5 8.25 12l7.5-7.5"
        />
      </svg>
      <div className="backIcon-container__title">{title}</div>
    </div>
  );
}

function NextIcon() {
  return (
    <a href="#">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="#666"
        className="w-5 h-5"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m8.25 4.5 7.5 7.5-7.5 7.5"
        />
      </svg>
    </a>
  );
}
