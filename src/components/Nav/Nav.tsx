import { ReactComponent as Logo } from "../../assets/svg/global/logo.svg"
import { ReactComponent as Hamburger } from "../../assets/svg/global/hamburger.svg"
import "./Nav.scss"
import useTheme from "../../hooks/useTheme"
import { useEffect } from "react"

export function Nav() {
    const { isDark } = useTheme()

    return (
        <nav id="nav" className="flex justify-between items-center px-8 py-4 fixed top-0 left-0 z-10 w-full" style={{backgroundColor: isDark ? "#283442" : "#FFFFFF",
        borderBottom: `3px solid ${isDark ? "#23303F" : "#DDDDDD"}`}}>
            <div className="logo_nav_global">
                <Logo style={{fill: isDark ? "#9BB3BB" : "#272727"}} />
            </div>
            <Hamburger />
        </nav>
    )
}