import { PasswordInput, TextInput } from "@mantine/core";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "@mantine/form";
import { useRegisterMutation } from "../redux/api/authApi";
import { Loader } from "@mantine/core";

const Register = () => {
  const nav = useNavigate();
  const [register, { isError, isUninitialized, isLoading }] =
    useRegisterMutation();

  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
    },

    validate: {
      name: (value) =>
        value.length < 4 ? "Name must have at least 4 letters" : null,

      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: (value) =>
        value.length < 8 ? "Password must have at least 8 letters" : null,
      // email: isEmail,
    },
  });

  return (
    <div className=" flex justify-center h-screen items-center ">
      <form
        onSubmit={form.onSubmit(async (values) => {
          try {
            const { data } = await register(values);
            console.log(data);
            console.log(values);
            if (data?.success) {
              nav("/login");
            }
          } catch (error) {
            console.log(error);
          }
        })}
        className=" flex flex-col gap-10 w-96 border shadow-lg p-5"
      >
        <h2 className=" text-2xl tracking-wider text-gray-600 font-bold">
          Register Now
        </h2>
        <TextInput
          {...form.getInputProps("name")}
          variant="filled"
          placeholder="Enter Your Name..."
        />
        <TextInput
          {...form.getInputProps("email")}
          variant="filled"
          placeholder="Enter Your Email..."
        />
        <PasswordInput
          {...form.getInputProps("password")}
          variant="filled"
          placeholder="Enter Your Password"
        />
        <PasswordInput
          name="password_confirmation"
          {...form.getInputProps("password_confirmation")}
          variant="filled"
          placeholder="Password Confirm"
        />
        <div className=" flex gap-1 justify-center">
          <p>Already have an account?</p>

          <Link to={"/login"}>
            <button type="button" className=" underline text-blue-600 ">
              Login
            </button>
          </Link>
        </div>

        <button
          disabled={isLoading && true}
          type="submit"
          // onSubmit={onSubmitHandler}
          className=" bg-blue-600 text-white rounded px-6 py-2 "
        >
          {/* {isError && "error"} */}
          {isLoading ? (
            <Loader color="white" size={"sm"} className=" block mx-auto" />
          ) : (
            "sing Up"
          )}
        </button>
      </form>
    </div>
  );
};

export default Register;
