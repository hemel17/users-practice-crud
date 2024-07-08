import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";
import axios from "axios";

const LogIn = () => {
  const { logIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const loggedInUser = await logIn(data);
      console.log(loggedInUser);
      const user = { email: data.email };
      const res = await axios.post("http://localhost:5000/jwt", user);
      console.log(res.data);
      Swal.fire({
        title: "Good job!",
        text: "Login Successful!",
        icon: "success",
      });
      // .then(() => {
      //   navigate(location?.state ? location.state : "/");
      // });
    } catch (error) {
      console.error(error);
      Swal.fire({
        title: "Something went wrong!",
        text: "Your email or password is incorrect!",
        icon: "error",
      });
    }
  };
  return (
    <Card
      color="transparent"
      shadow={false}
      className="py-6 md:py-10 [&>*]:mx-auto rounded-none dark:bg-blue-gray-800 min-h-screen"
    >
      <Typography variant="h4" color="blue-gray" className="dark:text-white">
        Log In
      </Typography>
      <Typography color="gray" className="mt-1 font-normal dark:text-white">
        Nice to meet you! Enter your details to register.
      </Typography>
      <form
        className="max-w-screen-lg mt-8 mb-2 w-80 sm:w-96"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col gap-6 mb-1">
          <Typography
            variant="h6"
            color="blue-gray"
            className="-mb-3 dark:text-white"
          >
            Your Email
          </Typography>
          <Input
            size="lg"
            type="email"
            {...register("email", {
              required: "Email is required!",
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: "Enter a valid email address",
              },
            })}
            placeholder="Enter Your Email"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900 dark:text-white"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          {errors.email && <Typography>{errors.email.message}</Typography>}

          <Typography
            variant="h6"
            color="blue-gray"
            className="-mb-3 dark:text-white"
          >
            Your Password
          </Typography>
          <Input
            type="password"
            size="lg"
            {...register("password", {
              required: "Password is required!",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters long!",
              },
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])/,
                message:
                  "Password must contain both uppercase and lowercase letter",
              },
            })}
            placeholder="********"
            className="dark:text-white !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          {errors.password && (
            <Typography>{errors.password.message}</Typography>
          )}
        </div>
        <Button className="mt-6" type="submit" fullWidth>
          log in
        </Button>
        <Typography
          color="gray"
          className="mt-4 font-normal text-center dark:text-white"
        >
          Don&apos;t have an account?{" "}
          <Link
            to={"/register"}
            className="font-medium text-gray-900 dark:text-amber-500"
          >
            Sign Up
          </Link>
        </Typography>
      </form>
    </Card>
  );
};

export default LogIn;
