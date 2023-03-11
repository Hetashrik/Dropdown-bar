import React from 'react';
import MenuItem from './MenuItem';

export default function SubMenu({ submenu, showmenu }) {
  return (
    <ul className={`${"absolute p-0 flex-col text-black mt-5"} ${showmenu ? "block" : "hidden"}`}>
      {submenu.map((menu) => (
        <MenuItem item={menu} />
      ))}
    </ul>
  );
}



