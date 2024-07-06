import { Outlet } from "react-router-dom";
import NavBar from "../components/Navbar/NavBar";

const Main = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default Main;
