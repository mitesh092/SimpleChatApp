import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");

  // naviagatation Hook
  const navigate = useNavigate();

  const Login_Request_style = {
    textAlign: "center",
    width: "100%",
    fontWeight: "600",
    color: "red",
    fontSize: "1.5rem",
  };
  const form_style = {
    backgroundColor : "rgba(0, 0, 0, 0.5)",
    boxShadow : "inset  -5px -5px rgba(0, 0, 0, 0.5)",
    borderRadius: "25px" // Added border radius
  }

  const Style_input_field = {
    borderRadius: "60px",
    border: "none",
    backgroundColor : "rgba(0, 0, 0, 0.5)",
    outline: "none",
    color: "white",
    boxShadow: "inset -3px -3px rgba(0, 0, 0, 0.5)"
  }

  const submitHandle = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/register", { userName, email, password })

      .then((res) => {
        if (res.data === "Username is already Taken !") {
          let Login_req = document.getElementById("Login-req");
          Login_req.innerText = "UserName is already Taken";
        } else {
          navigate("/login");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <section className="bg-light p-3 p-md-4 p-xl-5" style={{backgroundImage: "url('https://getwallpapers.com/wallpaper/full/b/1/5/920493-winter-background-images-1920x1200-for-4k-monitor.jpg')"}}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6 col-xxl-5">
              <div >
                <div className="card-body p-3 p-md-4 p-xl-5" style={form_style}>
                  <div className="row">
                    <div className="col-12">
                      <div className="mb-5">
                        <h2 className="h2 text-center text-light fw-bold ">Registration</h2>
                        <h3 className="fs-6 fw-normal text-secondary text-center m-0  text-light">
                          Enter your details to register
                        </h3>
                      </div>
                    </div>
                  </div>
                  <form onSubmit={submitHandle}>
                    <div className="row gy-3 overflow-hidden">
                      <div className="col-12">
                        <div className="form-floating mb-3">
                          <input
                            type="text"
                            style={Style_input_field}
                            className="form-control"
                            name="username"
                            id="username"
                            placeholder="First Name"
                            onChange={(e) => setUserName(e.target.value)}
                            required
                          />
                          <label htmlFor="username" className="form-label">
                            Create UserName
                          </label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating mb-3">
                          <input
                            type="text"
                            style={Style_input_field}
                            className="form-control"
                            name="nickname"
                            id="nickname"
                            placeholder="Nickname"
                            onChange={(e) => setNickname(e.target.value)}
                            required
                          />
                          <label htmlFor="nickname" className="form-label">
                            Nickname
                          </label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating mb-3">
                          <input
                            type="email"
                            style={Style_input_field}
                            className="form-control"
                            name="email"
                            id="email"
                            placeholder="name@example.com"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                          <label htmlFor="email" className="form-label">
                            Email
                          </label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating mb-3">
                          <input
                            type="password"
                            style={Style_input_field}
                            className="form-control"
                            name="password"
                            id="password"
                            placeholder="Password"
                            autoComplete="true"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                          />
                          <label htmlFor="password" className="form-label">
                            Password
                          </label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            name="iAgree"
                            id="iAgree"
                            required
                          />
                          <label
                            className="form-check-label text-secondary text-light"
                            htmlFor="iAgree"
                          >
                            I agree to the{" "}
                            <Link
                              to="/"
                              className="link-primary text-decoration-none text-light"
                            >
                              terms and conditions
                            </Link>
                          </label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="d-grid">
                          <button
                            className="btn bsb-btn-xl btn-primary"
                            type="submit"
                          >
                            Sign up
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                  <label style={Login_Request_style} id="Login-req"></label>
                  <div className="row">
                    <div className="col-12">
                      <p className="m-0 text-secondary text-center text-light">
                        Already have an account?{" "}
                        <Link
                          to="/login"
                          className="link-primary text-decoration-none"
                        >
                          Sign in
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <p className="mt-5 mb-5">Or continue with</p>
                      <div className="d-flex gap-2 gap-sm-3 justify-content-center">
                        <Link
                          to="https://accounts.google.com"
                          className="btn btn-lg btn-outline-danger p-3 lh-1"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="28"
                            height="28"
                            fill="currentColor"
                            className="bi bi-google"
                            viewBox="0 0 16 16"
                          >
                            <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                          </svg>
                        </Link>
                        <Link
                          to="https://www.facebook.com/"
                          className="btn btn-lg btn-outline-primary p-3 lh-1"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="28"
                            height="28"
                            fill="currentColor"
                            className="bi bi-facebook"
                            viewBox="0 0 16 16"
                          >
                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                          </svg>
                        </Link>
                        <Link
                          to="https://x.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJteCI6IjIifQ%3D%3D%22%7D"
                          className="btn btn-lg btn-outline-info p-3 lh-1"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="28"
                            height="28"
                            fill="currentColor"
                            className="bi bi-twitter"
                            viewBox="0 0 16 16"
                          >
                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                          </svg>
                        </Link>
                        <Link
                          to="https://www.icloud.com/"
                          className="btn btn-lg btn-outline-dark p-3 lh-1"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="28"
                            height="28"
                            fill="currentColor"
                            className="bi bi-apple"
                            viewBox="0 0 16 16"
                          >
                            <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z" />
                          </svg>
                        </Link>
                      </div>
                    </div>
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

export default Signup;
