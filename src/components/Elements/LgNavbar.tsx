import React from "react";
import { ALL_MENUS, Child2, Child3, RootObject } from "./MbNavbar";
import "@/styles/lgnav.css";
import Link from "next/link";
import Image from "next/image";
import logoImg from "../../../public/infosight-new-logo-1.svg";
// import DDIcon from "../../../public/DDIcon.svg";

const LgNavbar = () => {
  return (
    <div className="lgnavbar">
      <div className="lgnavbar__logo">
        <Link href={"/"}>
          <Image src={logoImg} alt="" className="lgnavbar__logo__img" />
        </Link>
      </div>
      <div className="lgnavbar__menus">
        {ALL_MENUS.map((menu, i) => {
          if ("children" in menu) {
            return <FirstParentMenu key={i} menu={menu} />;
          } else {
            return (
              <Link
                href={menu.link || "#"}
                key={i}
                className="dd-menu-item parent-dd-menu-item"
              >
                {menu.title}
              </Link>
            );
          }
        })}
      </div>
    </div>
  );
};

function FirstParentMenu({ menu }: { menu: RootObject }) {
  if (!menu.children) return null;

  return (
    <div tabIndex={0} className="fisrt-parent-menu">
      <div className="fisrt-parent-menu-title">{menu.title}</div>
      <DDIcon />
      <div className="fisrt-parent-menu__dd">
        {menu.children.map((childMenu, i) => {
          if ("children" in childMenu)
            return <FirstChildMenu key={i} menu={childMenu} />;

          return (
            <Link href={childMenu.link || "#"} key={i} className="dd-menu-item">
              {childMenu.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

function FirstChildMenu({ menu }: { menu: Child3 }) {
  if (!menu.children) return null;
  return (
    <div tabIndex={0} className="fisrt-child-menu dd-menu-item">
      <div className="fisrt-child-menu-title title">{menu.title}</div>
      <DDIcon />
      <div className="fisrt-child-menu__dd">
        {menu.children.map((childMenu, i) => {
          if ("children" in childMenu) {
            return <SecondChildMenu key={i} menu={childMenu} />;
          } else {
            return (
              <Link
                href={childMenu.link || "#"}
                key={i}
                className="dd-menu-item"
              >
                {childMenu.title}
              </Link>
            );
          }
        })}
      </div>
    </div>
  );
}

function SecondChildMenu({ menu }: { menu: Child2 }) {
  if (!menu.children) return null;

  return (
    <div tabIndex={0} className="second-child-menu dd-menu-item">
      <div className="second-child-menu-title title">{menu.title}</div>
      <DDIcon />
      <div className="second-child-menu__dd">
        {menu.children.map((childMenu, i) => {
          return (
            <Link href={childMenu.link || "#"} key={i} className="dd-menu-item">
              {childMenu.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

function DDIcon() {
  return (
    <svg
      width="13"
      height="8"
      viewBox="0 0 13 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="dd-icon-svg"
    >
      <path
        d="M1.5 1.5L6.5 6.5L11.5 1.5"
        stroke-width="1.67"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default LgNavbar;
