import React, { use } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Datasharing/AuthProvider";

const Login = () => {
  const { OldUserLogin, error } = use(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const pass = e.target.pass.value;
    OldUserLogin(email, pass);
    e.target.reset();
    navigate(location.state?.from?.pathname || "/", { replace: true });
  };

  return (
    <div className="hero   my-10">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl ">
        <h1 className="text-5xl font-bold mt-7 text-center">Please Login</h1>
        <div className="card-body">
          <form onSubmit={handleLogin} className="fieldset">
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
            />
            <label className="label">Password</label>
            <input
              type="password"
              name="pass"
              className="input"
              placeholder="Password"
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
              <br />

              <Link to="/auth/register" className="link link-hover">
                New here? Register
              </Link>
            </div>
            {error && <span>{error}</span>}
            <button type="submit" className="btn btn-neutral mt-4">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
