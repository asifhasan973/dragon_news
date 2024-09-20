import React, { useContext } from 'react';
import Nav from '../common/Nav';
import { AuthContext } from '../AuthProvider';
import { auth } from '../../firebase.config';

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;
    createUser(email, password)
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  };
  return (
    <div className="bg-[#F3F3F3]">
      <Nav></Nav>
      <div className="hero  min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse w-full">
          <div className=" w-6/12 bg-white pt-10 pb-8 rounded-2xl">
            <h1 className="text-center text-[35px] font-semibold">
              Register your account
            </h1>
            {/* Form  */}
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="font-bold label-text">Your Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="font-bold label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Enter your photo URL"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="font-bold label-text">Email address</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="Enter your email address"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="font-bold label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="input input-bordered"
                  required
                />

                <div className="mt-6 flex items-center">
                  <input className="me-2" type="checkbox" name="" id="" />
                  <div>
                    <span className="text-[#706f6f] text-base font-normal font-['Poppins']">
                      Accept{' '}
                    </span>
                    <span className="text-[#706f6f] text-base font-semibold font-['Poppins']">
                      Term & Conditions
                    </span>
                  </div>
                </div>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-[#403F3F] text-white hover:text-black">
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
