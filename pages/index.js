import MenuItem from "./MenuItem";

function NavBar() {

  const menu_items = [
    {title: "About us"},
    {title: "Products"},
    {title: "Services"},
    {title: "Article"},
    {title: "Account",
     submenu: [
          {title: "Login"},
          {title: "SignUp"},
          {title: "Contact us"},
     ],},
  ]
  return (
    <div className="bg-black mr-auto">
      <ul className="text-white flex justify-center items-center w-1/2">
        {menu_items.map((item, index) => {
          return (
            <MenuItem item={item} key={index} />
          );
        })}

      </ul>
    </div>
  );
}

export default NavBar;