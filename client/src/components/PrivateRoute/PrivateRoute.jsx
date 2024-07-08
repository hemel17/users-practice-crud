import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";
import { Spinner } from "@material-tailwind/react";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  return (
    <>
      {loading ? (
        <Spinner color="blue-gray" />
      ) : user ? (
        children
      ) : (
        <Navigate state={location.pathname} to={"/login"} replace></Navigate>
      )}
    </>
  );
};

export default PrivateRoute;
