import React, { useContext } from 'react';
import Nav from '../common/Nav';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider';

const Login = () => {
  const { logIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const location = useLocation();
  console.log(location);
  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    logIn(email, password)
      .then((res) => {
        navigate(location?.state ? location.state : '/');
      })
      .catch((err) => console.error(err));
  };
  return (
    <div className="bg-[#F3F3F3]">
      <Nav></Nav>
      <div className="hero  min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse w-full">
          <div className=" w-6/12 bg-white pt-10 pb-8 rounded-2xl">
            <h1 className="text-center text-[35px] font-semibold">
              Login your account
            </h1>
            {/* Form  */}
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email address</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a
                    href="#"
                    className="label-text-alt link link-hover text-base"
                  >
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-[#403F3F] text-white hover:text-black">
                  Login
                </button>
              </div>
              <Link to="/register">
                <h1 className="mt-3">
                  New here?
                  <label className="label inline">
                    <span
                      href="#"
                      className="label-text-alt link link-hover text-base"
                    >
                      Please register
                    </span>
                  </label>
                </h1>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
