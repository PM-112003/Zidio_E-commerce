import { Link } from "react-router-dom";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import signup_schema from "../schemas/signupSchema";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(signup_schema) });

  const submitForm = (data) => {
    delete data.confirm_password;
    console.log("userdata:", data);
  };

  return (
    <div className="box--form">
      <h2 className="text-[1.4rem] font-medium">Sign Up</h2>
      <form
        className="inputs flex flex-col gap-4 mt-6"
        onSubmit={handleSubmit(submitForm)}
      >
        <div className="input_divs--form">
          <input
            type="text"
            className="input--form"
            placeholder="User Name"
            {...register("username")}
          />
          {errors.username && (
            <p className="error--form">{errors.username.message}</p>
          )}
        </div>
        <div className="input_divs--form">
          <input
            type="email"
            className="input--form"
            placeholder="Email"
            {...register("email")}
          />
          {errors.email && (
            <p className="error--form">{errors.email.message}</p>
          )}
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="input_divs--form">
            <input
              type="password"
              name=""
              id=""
              className="input--form"
              placeholder="Password"
              {...register("password")}
            />
            {errors.password && (
              <p className="error--form">{errors.password.message}</p>
            )}
          </div>
          <div className="input_divs--form">
            <input
              type="password"
              name=""
              id=""
              className="input--form"
              placeholder="Confirm Password"
              {...register("confirm_password")}
            />
            {errors.confirm_password && (
              <p className="error--form">{errors.confirm_password.message}</p>
            )}
          </div>
        </div>
        <button className="submit--form" type="submit">
          register user
        </button>
      </form>

      <p className="text-neutral-400">
        Already have an account ?{" "}
        <Link to="/auth/sign-in" className="capitalize text-white">
          sign in
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
