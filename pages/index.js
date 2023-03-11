import React from 'react';
import MenuItem from './MenuItem';

function NavBar() {
  const menu_items = [
    { title: 'About us', id: 1 },
    { title: 'Products', id: 2 },
    { title: 'Services', id: 3 },
    { title: 'Article', id: 4 },
    {
      title: 'Account',
      submenu: [
        { title: 'Login', id: 5 },
        { title: 'SignUp', id: 6 },
        { title: 'Contact us', id: 7 },
      ],
      id: 8,
    },
  ];

  return (
    <header className="bg-black">
      <nav className="w-1/2 mx-auto">
        <ul className="text-white flex items-center">
          {menu_items.map((item) => (
            <MenuItem key={item.id} item={item} />
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
