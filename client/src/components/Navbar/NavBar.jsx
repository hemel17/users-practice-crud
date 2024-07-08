import React, { useContext } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  Button,
  Spinner,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, NavLink } from "react-router-dom";
import { ThemeContext } from "../../providers/ThemeProvider/MyThemeProvider";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";

const NavList = () => {
  const items = [
    { name: "Home", to: "/" },
    { name: "Pages", to: "pages" },
    { name: "Account", to: "account" },
    { name: "Blocks", to: "blocks" },
    { name: "Docs", to: "docs" },
  ];
  return (
    <ul className="flex flex-col gap-2 my-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 ">
      {items.map((item, idx) => (
        <Typography
          key={idx}
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-medium"
        >
          <NavLink
            to={item.to}
            className="flex items-center transition-colors hover:text-blue-500 dark:text-white"
          >
            {item.name}
          </NavLink>
        </Typography>
      ))}
    </ul>
  );
};

const NavBar = () => {
  const [openNav, setOpenNav] = React.useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { user, loading, logOut } = useContext(AuthContext);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Navbar className="min-w-full px-6 py-3 mx-auto border-none rounded-none outline-none dark:bg-blue-gray-900">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="/"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5 dark:text-white"
        >
          Material Tailwind
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <div className="flex items-center gap-4 dark:text-white">
          <>
            {loading ? (
              <Spinner color="blue" />
            ) : user ? (
              <Button onClick={logOut}>log out</Button>
            ) : (
              <Link to="login">
                <Button>log in</Button>
              </Link>
            )}
          </>
          <Button
            onClick={toggleTheme}
            className="p-0 bg-transparent hover:bg-transparent focus:bg-transparent active:bg-transparent"
          >
            {theme === "dark" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-blue-gray-900 dark:text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-blue-gray-900 dark:text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                />
              </svg>
            )}
          </Button>
          <IconButton
            variant="text"
            className="w-6 h-6 ml-auto text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="w-6 h-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="w-6 h-6" strokeWidth={2} />
            )}
          </IconButton>
        </div>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
};

export default NavBar;
