import React, { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

// styles
import "./Login.scss"

// hooks
import useTheme from "../../hooks/useTheme"

// components
import Button from "../Button/Button"
import loginimage from "./loginimage.png"
import useAuth from "../../hooks/useAuth"
import { useUser } from "../../hooks/useUser"

interface LoginProps {
  title?: string
  loginDescription: string
  loginQuestion: string
  buttonText: string
  getStarted?: string
  LoginBtn: string
}

function Login({
  title = "login_title",
  loginDescription = "login_description",
  loginQuestion = "login_question",
  getStarted = "get_started",
  LoginBtn = "login",
}: LoginProps) {
  const { isDark } = useTheme()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [_, setUser] = useUser()

  const { login, authenticated } = useAuth()

  const navigate = useNavigate()

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const loggedIn = await login(email, password)

    if (loggedIn.success) {
      await setUser()
    } else {
      alert(loggedIn.data?.message)
    }
  }

  return (
    <section className="login-section">
      <img className="login-img" src={loginimage} alt="login" />

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
          <label id="login-email">
            Email<abbr title="required">*</abbr>
          </label>
          <input
            id="login-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="on"
            placeholder="Email"
            required
          />
          <label id="login-password">
            Password<abbr title="required">*</abbr>
          </label>
          <input
            id="login-password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            autoComplete="on"
            pattern="(?=.*\d)(?=.*[A-Z]).{8,}"
            required
          />
          <Button>{LoginBtn}</Button>
        </form>

        <div className="login-question-container">
          <p>{loginQuestion}</p>
            <Link className="login-link" to="/signup">
              {getStarted}
            </Link>
        </div>
      </div>
    </section>
  )
}

export default Login
