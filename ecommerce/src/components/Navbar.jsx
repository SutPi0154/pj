import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLogoutMutation } from "../redux/api/authApi";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { removeUser } from "../redux/services/AuthSlice";
import { Autocomplete, Loader } from "@mantine/core";
import { useGetProductQuery } from "../redux/api/fakeStoreApi";

const Navbar = () => {
  // const { user } = useSelector((state) => state.authSlice);
  // const { token } = useSelector((state) => state.authSlice);
  const user = JSON.parse(Cookies.get("user"));
  const token = Cookies.get("token");
  console.log(token);
  console.log(user);
  const [logout, { isLoading }] = useLogoutMutation();
  // const { data: profile } = useGetProfileQuery(token);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data } = useGetProductQuery();
  console.log(data?.filter((item) => item.title));

  const logoutHandler = async () => {
    try {
      const { data } = await logout(token);
      dispatch(removeUser());
      console.log(...data?.name);
      if (data?.success) navigate("/register");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className=" container mx-auto navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
        <div className="flex-none">
          <Autocomplete placeholder="Pick one" data={["hello"]} />
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">8</span>
              </div>
            </label>
            <div
              tabIndex={0}
              className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body">
                <span className="font-bold text-lg">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://robohash.org/autquiaut.png" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to={"/login"}>
                  <button>Login in</button>
                </Link>
              </li>
              <li>
                <Link to={"/register"}>
                  <h2 className="justify-between">Sign in</h2>
                </Link>
              </li>
              <li>
                <button
                  disabled={isLoading}
                  onClick={logoutHandler}
                  // className=" text-white px-6 py-2 rounded bg-gray-600"
                >
                  {isLoading ? <Loader size={"sm"} color="white" /> : `Log Out`}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
