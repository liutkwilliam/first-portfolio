import React from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";

function NavBar() {
  const NavList = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Portfolio", href: "/portfolio" },
    { title: "Developer", href: "/developer" },
    { title: "Photography", href: "/photography" },
    // { title: "Artwork", href: "/artwork" },
  ];

  const NavMenu = NavList.map((item, index) => (
    <Link key={index} to={item.href}>
      <div className="rounded-full px-3 py-2 text-sm font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-600">
        <p>{item.title}</p>
      </div>
    </Link>
  ));

  return (
    <>
      <div className="sticky top-0 z-50 flex items-center gap-4 border-b border-slate-200 bg-white/80 px-4 py-3 shadow-sm backdrop-blur">
        <Logo />
        <div className="ml-auto flex flex-wrap justify-end gap-1">
          {NavMenu}
        </div>
      </div>
    </>
  );
}

export default NavBar;
