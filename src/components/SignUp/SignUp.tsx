import React, { useState } from "react";

// styles
import "./SignUp.scss";

// hooks
import useTheme from "../../hooks/useTheme";

// components
import Button from "../Button/Button";

interface LoginProps {
  title?: string;
  signupDescription: string;
  buttonText: string;
  toTest?: string;
  signup_password: string;
  LoginBtn: string;
}

function SingUp({
  title = "signup",
  signupDescription = "signup_description",
  toTest = " signup_to_test",
  signup_password = "signup_password",
  LoginBtn = "login",
}: LoginProps) {
  const { isDark } = useTheme();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({ email, password });
  };

  return (
    <section className="signup-section">
      <a className="signup-link" href="">
        &#8592; {toTest}
      </a>
      <div className={`signup-container ${isDark ? "dark" : ""}`}>
        <div className="signup-description-container">
          <h1>{title}</h1>
          <p
            className={`signup-description ${isDark ? "text-white" : "region"}`}
          >
            {signupDescription}
          </p>
        </div>

        <form className="signup-form" onSubmit={handleSubmit}>
          <label id="login-email">Email<abbr title="required">*</abbr></label>
          <input
            id="login-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
            title="Required"
            required
          />
          <label id="login-password">Password<abbr title="required">*</abbr></label>
           <input
            id="login-password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
            pattern="(?=.*\d)(?=.*[A-Z]).{8,}" 
            required
          />
           <small>{signup_password}</small>
          <Button>{title}</Button>
        </form>
      </div>
    </section>
  );
}

export default SingUp;
