import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Datasharing/AuthProvider";

const Register = () => {
  const { emailPassAuthen, error } = use(AuthContext);

  const hangleRegisterSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const url = e.target.url.value;
    const email = e.target.email.value;
    const pass = e.target.pass.value;
    emailPassAuthen(email, pass);
    e.target.reset();
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl ">
        <h1 className="text-5xl font-bold mt-7 text-center">Please Register</h1>
        <div className="card-body">
          <form onSubmit={hangleRegisterSubmit} className="fieldset">
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Name"
            />

            <label className="label">Photo Url</label>
            <input
              type="text"
              name="url"
              className="input"
              placeholder="Photo Url"
            />

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
              <Link className="link link-hover" to="/auth/login">
                Alrady have an account? Login
              </Link>
            </div>
            {error && <span>{error}</span>}
            <button type="submit" className="btn btn-neutral mt-4">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
