import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLogoutMutation } from "../redux/api/authApi";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { removeUser } from "../redux/services/AuthSlice";
import { Loader } from "@mantine/core";

const Navbar = () => {
  // const { user } = useSelector((state) => state.authSlice);
  // const { token } = useSelector((state) => state.authSlice);
  const user = JSON.parse(Cookies.get("user"));
  const token = Cookies.get("token");
  console.log(token);
  console.log(user);
  const [logout, { isLoading }] = useLogoutMutation();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      const { data } = await logout(token);
      dispatch(removeUser());
      console.log(data);
      if (data?.success) navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav className=" flex justify-around items-center my-10">
      <h2 className=" text-2xl text-gray-600 font-semibold">MMS IT</h2>
      <div className=" flex gap-5 items-center">
        <div>
          <p>{user?.name}</p>
          <p>{user?.email}</p>
        </div>
        <button
          disabled={isLoading}
          onClick={logoutHandler}
          className=" text-white px-6 py-2 rounded bg-gray-600"
        >
          {isLoading ? <Loader size={"sm"} color="white" /> : `Log Out`}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
