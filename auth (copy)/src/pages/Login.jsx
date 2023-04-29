import { Loader, PasswordInput, TextInput } from "@mantine/core";
import { useLoginMutation } from "../redux/api/authApi";
import { useNavigate } from "react-router-dom";
import { addUser } from "../redux/services/AuthSlice";
import { useDispatch } from "react-redux";
import { useForm } from "@mantine/form";

const Login = () => {
  const dispatch = useDispatch();
  const form = useForm({
    initialValues: {
      email: "admin@gmail.com",
      password: "admin123",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: (value) =>
        value.length < 8 ? "Password must have at least 8 letters" : null,
    },
  });

  const [login, { isLoading }] = useLoginMutation();

  const navigate = useNavigate();

  return (
    <div className=" flex justify-center h-screen items-center ">
      <form
        onSubmit={form.onSubmit(async (values) => {
          try {
            const { data } = await login(values);
            console.log(data);
            console.log(values);
            dispatch(addUser({ user: data?.user, token: data?.token }));
            console.log(data.user, data.token);
            if (data?.success) {
              navigate("/");
            }
          } catch (error) {
            console.log(error);
          }
        })}
        className=" flex flex-col gap-10 w-96 border shadow-lg p-5"
      >
        <h2 className=" text-2xl tracking-wider text-gray-600 font-bold">
          Login Now
        </h2>

        <TextInput
          required
          {...form.getInputProps("email")}
          // onChange={(e) => {
          //   setEmail(e.target.value);
          // }}
          variant="filled"
          placeholder="Enter Your Email..."
        />
        <PasswordInput
          required
          {...form.getInputProps("password")}
          variant="filled"
          placeholder="Enter Your Password"
        />

        <button
          disabled={isLoading && true}
          type="submit"
          className=" bg-blue-600 text-white rounded px-6 py-2 "
        >
          {isLoading ? (
            <Loader size={"sm"} color="white" className=" block mx-auto" />
          ) : (
            "Sign Up"
          )}
        </button>
      </form>
    </div>
  );
};

export default Login;
