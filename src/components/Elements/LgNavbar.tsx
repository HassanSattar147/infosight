import React from "react";
import { ALL_MENUS, Child3, RootObject } from "./MbNavbar";
import "@/styles/lgnav.css";
import Link from "next/link";
import Image from "next/image";
import logoImg from "../../../public/infosight-new-logo-1.svg";
import DDIcon from "../../../public/DDIcon.svg";

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
          if ("children" in menu)
            return <FirstParentMenu key={i} menu={menu} />;

          return <div key={i}>{menu.title}</div>;
        })}
      </div>
    </div>
  );
};

function FirstParentMenu({ menu }: { menu: RootObject }) {
  if (!menu.children) return null;

  return (
    <div className="fisrt-parent-menu">
      <div>{menu.title}</div>
      <Image src={DDIcon} alt="" />
      <div className="fisrt-parent-menu__dd">
        {menu.children.map((childMenu, i) => {
          if ("children" in childMenu)
            return <FirstChildMenu key={i} menu={childMenu} />;

          return <div key={i}>{childMenu.title}</div>;
        })}
      </div>
    </div>
  );
}

function FirstChildMenu({ menu }: { menu: Child3 }) {
  if (!menu.children) return null;
  return (
    <div className="fisrt-child-menu">
      <div>{menu.title}</div>
      <Image src={DDIcon} alt="" />
      <div className="fisrt-child-menu__dd">
        {menu.children.map((childMenu) => {
          if ("children" in childMenu) return <div>{childMenu.title}</div>;
        })}
      </div>
    </div>
  );
}

export default LgNavbar;
