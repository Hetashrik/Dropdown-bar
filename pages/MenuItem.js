import React, { useState } from "react";
import Image from "next/image";
import SubMenu from "./SubMenu";

export default function MenuItem({ item }) {
  const [showmenu, setShowmenu] = useState(false);

  function handleDropdownMenu() {
    setShowmenu((prev) => !prev);
  }

  return item.submenu && item.submenu.length > 0 ? (
    <li className="relative" key={item.id}>
      <a className="flex items-center" onClick={handleDropdownMenu} href="#">
        {item.title}
        <Image
          src="/images/arrow.png"
          width={10}
          height={10}
          alt=""
          layout="fixed"
          className="ml-1"
        />
      </a>
      <SubMenu submenu={item.submenu} showmenu={showmenu} />
    </li>
  ) : (
    <li className="pr-11" key={item.id}>
      {item.title}
    </li>
  );
  // Component logic goes here
}
