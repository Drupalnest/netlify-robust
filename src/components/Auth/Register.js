import React, { useState } from "react";
import Header from "../Header/Header";
import { Link, navigate } from "gatsby";
import Cookies from "js-cookie";
import Bearer from "./Bearer";
import LoginResponse from "./LoginResponse";
import TeamList from "../../pages/[appGroup.name]/Teams";
import { setLoginResponse } from "../../redux/store";
import { useDispatch } from "react-redux";
import { trackEvent, trackErrorEvent } from "../../redux/store";
import SuccessToast from "../Toast/Success";
import ErrorToast from "../Toast/Error";
import "../../style/page.css";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [showErrorToast, setShowErrorToast] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://robustapihub.io/user/register?_format=json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            first_name: firstName,
            last_name: lastName,
            email: email,
            username: username,
            password: password,
            confirm_password: confirmPassword,
          }),
        }
      );

      if (response.ok) {
        const responseData = await response.json();

        dispatch(setLoginResponse(responseData));

        localStorage.setItem("logout_token", responseData.logout_token);

        alert("Registration successful");

        dispatch(
          trackEvent({
            username: username,
            timestamp: new Date(),
            operations: `User ${username} has registered`,
          })
        );

        navigate("/teams");
      } else {
        const errorData = await response.json();
        alert(`Registration failed. Error: ${errorData.message}`);

        dispatch(
          trackErrorEvent({
            error: errorData.message,
            timestamp: new Date(),
            page: "Registration Page",
            button: "Register Button",
          })
        );
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while registering.");

      dispatch(
        trackErrorEvent(
          error.message,
          new Date(),
          "Registration Page",
          "Register Button"
        )
      );
    }
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-page" style={{ marginTop: "100px" }}>
      <Header />

      <section className="vh-100 overflow-hidden">
        <div
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.3)",
            position: "absolute",
            width: "100vw",
            height: "100vh",
            zIndex: "0",
            backdropFilter: "blur(1px)",
          }}
        ></div>

        <div className="container py-3 h-100" style={{ zIndex: "9999" }}>
          <div className="row d-flex justify-content-center align-items-center h-100 ">
            <div>
              <div className="card mx-auto px-5 ">
                <div
                  className="card-body  px-5 py-5  text-center "
                  style={{
                    margin: "0 auto",
                    backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)",
                    borderRadius: "10px",
                    //height:"100vh",
                    //overflow:"scroll"
                  }}
                >
                  <h3 className="mb-3 ">Sign Up</h3>
                  <p>Please fill in this form to create an account</p>

                  <div className="form-outline mb-3 text-left">
                    <label
                      htmlFor="first-name"
                      className="js-form-required text-left form-required"
                    >
                      First Name
                      <sup>
                        <i
                          className="fas fa-asterisk text-danger form-required__indicator"
                          style={{ fontSize: "0.7em" }}
                        />
                      </sup>
                    </label>
                    <input
                      type="text"
                      id="first-name"
                      className="custom-input form-control form-control-lg"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      placeholder="Enter your first name"
                      style={{
                        width: "100%",
                        maxWidth: "500px",
                        fontSize: "1em",
                      }}
                    />
                    {/* <small
                      id="first-name--description"
                      className="description form-text text-left text-muted"
                    >
                      Enter your first name.
                    </small> */}
                  </div>

                  <div className="form-outline mb-3 text-left">
                    <label
                      htmlFor="last-name"
                      className="js-form-required text-left form-required"
                    >
                      Last Name
                      <sup>
                        <i
                          className="fas fa-asterisk text-danger form-required__indicator"
                          style={{ fontSize: "0.7em" }}
                        />
                      </sup>
                    </label>
                    <input
                      type="text"
                      id="last-name"
                      className="custom-input form-control form-control-lg"
                      value={lastName}
                      placeholder="Enter your last name"
                      onChange={(e) => setLastName(e.target.value)}
                      style={{
                        width: "100%",
                        maxWidth: "500px",
                        fontSize: "1em",
                      }}
                    />
                    {/* <small
                      id="last-name--description"
                      className="description form-text text-left text-muted"
                    >
                      Enter your last name.
                    </small> */}
                  </div>

                  <div className="form-outline mb-3 text-left">
                    <label
                      htmlFor="email"
                      className="js-form-required text-left form-required"
                    >
                      Email
                      <sup>
                        <i
                          className="fas fa-asterisk text-danger form-required__indicator"
                          style={{ fontSize: "0.7em" }}
                        />
                      </sup>
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="custom-input form-control form-control-lg"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      style={{
                        width: "100%",
                        maxWidth: "500px",
                        fontSize: "1em",
                      }}
                    />
                    {/* <small
                      id="email--description"
                      className="description form-text text-left text-muted"
                    >
                      Enter your email.
                    </small> */}
                  </div>

                  <div className="form-outline mb-3 text-left">
                    <label
                      htmlFor="username"
                      className="js-form-required text-left form-required"
                    >
                      Username
                      <sup>
                        <i
                          className="fas fa-asterisk text-danger form-required__indicator"
                          style={{ fontSize: "0.7em" }}
                        />
                      </sup>
                    </label>
                    <input
                      type="text"
                      id="username"
                      className="custom-input form-control form-control-lg"
                      value={username}
                      placeholder="Enter your desired username"
                      onChange={(e) => setUsername(e.target.value)}
                      style={{
                        width: "100%",
                        maxWidth: "500px",
                        fontSize: "1em",
                      }}
                    />
                    {/* <small
                      id="username--description"
                      className="description form-text text-left text-muted"
                    >
                      Enter your desired username.
                    </small> */}
                  </div>

                  <div className="form-outline mb-3 text-left">
                    <label
                      htmlFor="edit-name"
                      className="js-form-required text-left form-required"
                    >
                      Password
                      <sup>
                        <i
                          className="fas fa-asterisk text-danger form-required__indicator"
                          style={{ fontSize: "0.7em" }}
                        />
                      </sup>
                    </label>
                    <div className="input-group d-flex">
                      <input
                        type={showPassword ? "text" : "password"}
                        id="typePasswordX-2"
                        className="custom-input form-control form-control-lg"
                        value={password}
                        placeholder="Enter your password"
                        onChange={(e) => setPassword(e.target.value)}
                        style={{
                          width: "100%",
                          maxWidth: "500px",
                          fontSize: "1em",
                        }}
                        //style={{ width: "100%", maxWidth: "500px" }}
                      />
                    </div>
                    {/* <small
                      id="edit-pass--description"
                      className="description form-text text-left text-muted"
                    >
                      Enter your password.
                    </small> */}
                  </div>

                  <div className="form-outline mb-3 text-left">
                    <label
                      htmlFor="confirm-password"
                      className="js-form-required text-left form-required"
                    >
                      Confirm Password
                      <sup>
                        <i
                          className="fas fa-asterisk text-danger form-required__indicator"
                          style={{ fontSize: "0.7em" }}
                        />
                      </sup>
                    </label>
                    <div className="input-group d-flex">
                      <input
                        type={showPassword ? "text" : "password"}
                        id="confirmPassword"
                        className="custom-input form-control form-control-lg"
                        value={confirmPassword}
                        placeholder="Confirm your password"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        style={{
                          width: "100%",
                          maxWidth: "500px",
                          fontSize: "1em",
                        }}
                        //style={{ width: "100%", maxWidth: "500px" }}
                      />
                    </div>
                    {/* <small
                      id="confirm-password--description"
                      className="description form-text text-left text-muted"
                    >
                      Confirm your password.
                    </small> */}
                  </div>

                  <div className="mt-4">
                    <button
                      className="orange_buttton  btn-lg btn-block text-white"
                      type="submit"
                      onClick={handleSubmit}
                    >
                      Sign Up
                    </button>
                  </div>

                  <hr className="my-3" />
                  <div className="mt-1 d-flex align-items-center justify-content-center">
                    <p className="mr-2 mb-0">If you have an account, </p>
                    <Link to="/login">Return to Login</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;

