import React, { useState } from "react";

// styles
import "./Login.scss";

// hooks
import useTheme from "../../hooks/useTheme";

// components
import Button from "../Button/Button";
import loginimage from "./loginimage.png";

interface LoginProps {
  title?: string;
  loginDescription: string;
  loginQuestion: string;
  buttonText: string;
  getStarted?: string;
  LoginBtn: string

}

function Login({
  title = "login_title",
  loginDescription = "login_description",
  loginQuestion = "login_question",
  getStarted = "get_started",
  LoginBtn= "login"
}: LoginProps) {
  const { isDark } = useTheme();
  const [email, setEmail] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({ email });
  };

  return (
    <section className="login-section">
      <img className="login-img" src={loginimage} alt="login image"></img>

      <div className={`login-container ${isDark ? "dark" : ""}`}>
        <div className="login-description-container">
          <h1>{title}</h1>
          <p
            className={`login-description ${isDark ? "text-white" : "region"}`}
          >
            {loginDescription}
          </p>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          <label id="login-email">Email</label>
          <input
            id="login-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder=" Email"
            required
          />
          <Button>{LoginBtn}</Button>
        </form>

        <div className="login-question-container">
          <p>{loginQuestion}</p>
          <a className="login-link" href="">
          {getStarted}
          </a>
        </div>
      </div>
    </section>
  );
}

export default Login;