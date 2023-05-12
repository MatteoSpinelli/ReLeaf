import React, { useState } from "react"

// styles
import "./SignUp.scss"

// hooks
import useTheme from "../../hooks/useTheme"

// components
import Button from "../Button/Button"
import { useSignUp } from "../../hooks/useSignUp"
import { useUser } from "../../hooks/useUser"
import { Link } from "react-router-dom"
import { Test } from "../Test/Test"

interface LoginProps {
  title?: string;
  signupDescription: string;
  buttonText: string;
  toTest?: string;
  signup_password: string;
  LoginBtn: string;
}

function SingUp({ title = "signup", signupDescription = "signup_description", toTest = " signup_to_test", signup_password = "signup_password", LoginBtn = "login" }: LoginProps) {
  const { isDark } = useTheme()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { signUp } = useSignUp()
  const [_, setUser] = useUser()
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!email || !password) {
      return
    }
    const success = await signUp(email, password)
    await setUser()
  }

  return (
    <section className="signup-section">
      <Link className="signup-link" to="/test">
        &#8592; {toTest}
      </Link>
      <div className={`signup-container ${isDark ? "dark" : ""}`}>
        <div className="signup-description-container">
          <h1>{title}</h1>
          <p className={`signup-description ${isDark ? "text-white" : "region"}`}>{signupDescription}</p>
        </div>

        <form className="signup-form" onSubmit={handleSubmit}>
          <label id="login-email">
            Email<abbr title="required">*</abbr>
          </label>
          <input id="login-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" title="Required" autoComplete="on" required />
          <label id="login-password">
            Password<abbr title="required">*</abbr>
          </label>
          <input id="login-password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password" pattern="(?=.*\d)(?=.*[A-Z]).{8,}" autoComplete="on" required />
          <small>{signup_password}</small>
          <Button>{title}</Button>
        </form>
      </div>
    </section>
  )
}

export default SingUp
