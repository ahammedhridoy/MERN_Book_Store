/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import googleLogo from "../assets/google-logo.svg";
import fbLogo from "../assets/facebook-log.svg";

export default function Login() {
  const [ErrorMessage, setErrorMessage] = useState("");

  const { signUpWithGmail, login } = useContext(AuthContext);

  console.log(signUpWithGmail);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  // login with google
  const handleRegister = () => {
    signUpWithGmail()
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
      })
      .catch((error) => console.log(error));
  };

  // login with email password
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);
    login(email, password)
      .then((result) => {
        // Signed in
        const user = result.user;
        console.log(user);
        alert("Login successful!");
        navigate(from, { replace: true });
        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        setErrorMessage(errorMessage);
      });
  };

  return (
    <div className="flex flex-col justify-center min-h-screen py-6 bg-gray-100 sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 transform -skew-y-6 shadow-lg bg-gradient-to-r from-blue-300 to-blue-600 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-3xl font-semibold">
                Please Login to Dashborad
              </h1>
            </div>
            <div className="divide-y divide-gray-200">
              <form
                onSubmit={handleLogin}
                className="py-8 space-y-4 text-base leading-6 text-gray-700 sm:text-lg sm:leading-7"
              >
                <div className="relative">
                  <input
                    id="email"
                    name="email"
                    type="text"
                    className="w-full h-10 text-gray-900 border-b-2 border-gray-300 peer focus:outline-none focus:borer-rose-600"
                    placeholder="Email address"
                    required
                  />
                </div>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    className="w-full h-10 text-gray-900 border-b-2 border-gray-300 peer focus:outline-none focus:borer-rose-600"
                    placeholder="Password"
                    required
                  />
                </div>
                <div>
                  <p>
                    {ErrorMessage ? (
                      <span className="text-sm text-blue-500">
                        Email or Username is not valid!
                      </span>
                    ) : (
                      ""
                    )}
                  </p>
                  <p className="mt-1 text-base">
                    If you haven't an account. Please create here{" "}
                    <Link to="/create-user" className="text-blue-600 underline">
                      Sign Up
                    </Link>
                  </p>
                </div>
                <div className="relative">
                  <button
                    type="submit"
                    className="px-6 py-1 text-white bg-blue-500 rounded"
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* social login */}
          <div>
            <hr />
            <div className="flex flex-col items-center w-full gap-3 mt-5">
              <button onClick={handleRegister} className="block">
                {" "}
                <img
                  src={googleLogo}
                  alt=""
                  className="inline-block w-12 h-12"
                />
                Log in with Google
              </button>
              <button>
                {" "}
                <img
                  src={fbLogo}
                  alt=""
                  className="inline-block w-10 h-10 mr-1"
                />
                Log in with Facebook
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
