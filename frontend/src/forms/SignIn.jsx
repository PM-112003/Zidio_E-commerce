import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="box--form">
      <h2 className="text-[1.4rem] font-medium">Sign In</h2>
      <div className="inputs flex flex-col gap-4 mt-6">
        <div>
          <input
            type="email"
            name=""
            id=""
            className="input--form"
            placeholder="Email"
          />
        </div>
        <div>
          <input
            type="password"
            name=""
            id=""
            className="input--form"
            placeholder="Password"
          />
        </div>
      </div>
      <button className="submit--form">Login user</button>
      <p className="text-neutral-400">
        Create a new account ?{" "}
        <Link to="/auth/sign-up" className="capitalize text-white">
          sign up
        </Link>
      </p>
    </div>
  );
};

export default SignIn;
