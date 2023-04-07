import { ReactComponent as Logo } from "../../assets/svg/global/logo.svg"
import { ReactComponent as Hamburger } from "../../assets/svg/global/hamburger.svg"
import "./Nav.scss"
import useTheme from "../../hooks/useTheme"
import { useEffect, useRef, useState } from "react"
import { Menu } from "./Menu"
import { useDispatch } from "react-redux"
import menuSlice, { toggle } from "../../store/slices/menuSlice"

export function Nav() {
    const [isMenuVisible, setIsMenuVisible] = useState(false)
    const { isDark } = useTheme()
    const navRef = useRef()
    const dispatch = useDispatch()
    useEffect(() => {
        if (window.scrollY === 0) {
            navRef.current.style.background = "none"
            navRef.current.style.borderBottom = "none"
            return
        }
        
    })

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY === 0) {
                navRef.current.style.background = "none"
                navRef.current.style.borderBottom = "none"
                return
            }
            navRef.current.style.backgroundColor = isDark ? "#283442" : "#FFFFFF"
            navRef.current.style.borderBottom = `3px solid ${isDark ? "#23303F" : "#DDDDDD"}`
        };

        window.addEventListener('scroll', () => handleScroll());

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isDark]);

    function handleMenu(){
        dispatch(toggle())
    }


    return (
        <nav ref={navRef} id="nav" className="flex justify-between items-center px-8 py-4 fixed top-0 left-0 z-10 w-full" style={{
            backgroundColor: isDark ? "#283442" : "#FFFFFF",
            borderBottom: `3px solid ${isDark ? "#23303F" : "#DDDDDD"}`,
        }}>
            <div className="logo_nav_global">
                <Logo style={{ fill: isDark ? "#9BB3BB" : "#272727" }} />
            </div>
            <Hamburger className="cursor-pointer" onClick={handleMenu} />
            <Menu isVisible = {isMenuVisible} />
        </nav>
    )
}