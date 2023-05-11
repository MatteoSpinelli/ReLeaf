import useTheme from "../../hooks/useTheme"
import Button from "../Button/Button"
import { ReactComponent as Cross } from "../../assets/svg/global/cross.svg"
import { useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { toggle } from "../../store/slices/menuSlice"
import useTranslate from "../../hooks/useTranslate"
import LanguageSwitcher from "../TestPanel/LanguageSwitcher"
import ThemeSwitcher from "../TestPanel/ThemeSwitcher"
import { useNavigate } from "react-router-dom"
import { ReactComponent as AnonymousUser } from "../../assets/svg/global/user.svg"
import { reset } from "../../store/slices/userSlice"
import Cookies from "js-cookie"

export function MenuPersonal({ user }) {
  const { isDark } = useTheme()
  const menuRef = useRef()
  const userSettingsRef = useRef()
  const dispatch = useDispatch()
  const { nav_about, nav_mission, navP_profile, navP_settings } = useTranslate("homepage")
  const isMenuVisible = useSelector((state) => state.isMenuVisible)
  const navigate = useNavigate()
  function handleSettings() {
    if (userSettingsRef.current.getBoundingClientRect().height > 0) {
      userSettingsRef.current.classList.remove("user-settings-anim")
      void userSettingsRef.current.offsetWidth
      userSettingsRef.current.classList.add("user-settings-anim-reverse")
      setTimeout(() => (userSettingsRef.current.style.display = "none"), 500)
      return
    }
    userSettingsRef.current.style.display = "block"
    userSettingsRef.current.classList.remove("user-settings-anim-reverse")
    void userSettingsRef.current.offsetWidth
    userSettingsRef.current.classList.add("user-settings-anim")
  }
  return (
    <div
      ref={menuRef}
      className="menu_nav_global flex flex-col fixed top-0 w-8/12 h-screen justify-evenly items-center md:flex-row-reverse md:translate-x-[-2000px] md:relative md:w-3/5 md:h-auto md:bg-none md:justify-start md:gap-10 "
      style={{
        backgroundColor: isDark ? "#283442" : "#FFFFFF",
        borderLeft: `1px solid ${isDark ? "#23303F" : "#DDDDDD"}`,
        translate: isMenuVisible ? "0px" : "2000px",
      }}
    >
      {/* user image and name, settings on click */}
      <div className="flex flex-col items-center gap-3 relative">
        <div className="flex items-center cursor-pointer" onClick={handleSettings}>
          {/* if the user has uploaded a photo, it will per render instead of anonymous svg */}
          <AnonymousUser className="w-[40px] h-[40px] bg-white rounded-full p-1 mx-2" />
          {user.name ? user.name : user.email.split("@")[0]}
        </div>
        <div ref={userSettingsRef} className="user-settings hidden md:absolute md:top-[50px] md:right-0 md:bg-inherit">
          <ul className="flex flex-col items-center gap-2">
            <Button
              variant="login"
              onClick={async () => {
                const jwt = Cookies.get("jwt")
                const headers = jwt ? { authorization: `Bearer ${jwt}` } : {}
                if (userSettingsRef.current.getBoundingClientRect().height > 0) {
                  /* log out the user by destroy the jwt and reset the user state in redux slice */
                  await fetch(process.env.REACT_APP_SERVER_URI + "/api/v1/auth/logout", {
                    mode: "cors",
                    headers,
                  })
                  Cookies.remove("jwt")
                  dispatch(reset())
                  if (window.innerWidth < 768) {
                    dispatch(toggle())
                  }
                  navigate("/")
                }
              }}
            >
              Logout
            </Button>
            <li>{navP_profile}</li>
            <li>{navP_settings}</li>
          </ul>
        </div>
      </div>

      <div className="menu_nav_items cursor-pointer hover:text-link hover:underline hover:underline-offset-4 hover:decoration-2">{nav_about}</div>
      <div className="menu_nav_items cursor-pointer hover:text-link hover:underline hover:underline-offset-4 hover:decoration-2">{nav_mission}</div>
      <div className="menu_nav_items cursor-pointer hover:text-link hover:underline hover:underline-offset-4 hover:decoration-2">Blog</div>
      <LanguageSwitcher />
      <div
        style={{
          backgroundColor: !isDark ? "#68707a" : "#bfc2c7",
          borderRadius: "9999px",
        }}
      >
        <ThemeSwitcher />
      </div>
      <Cross
        onClick={() => {
          dispatch(toggle())
          menuRef.current.style.translate = "2000px"
        }}
        className="cursor-pointer md:hidden"
      />
    </div>
  )
}
