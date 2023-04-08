import useTheme from "../../hooks/useTheme";
import Button from "../Button/Button";
import { ReactComponent as Cross } from "../../assets/svg/global/cross.svg"
import { useRef } from "react"
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../../store/slices/menuSlice";


export function Menu() {
    const { isDark } = useTheme()
    const menuRef = useRef()
    const dispatch = useDispatch()
    const isMenuVisible = useSelector((state) => state.isMenuVisible)
    return (
        <div ref={menuRef} className="menu_nav_global flex flex-col fixed top-0 w-8/12 h-screen justify-evenly items-center md:flex-row-reverse md:translate-x-[-2000px] md:relative md:w-3/5 md:h-auto md:bg-none md:justify-start md:gap-10 " style={{
            backgroundColor: isDark ? "#283442" : "#FFFFFF",
            borderLeft: `1px solid ${isDark ? "#23303F" : "#DDDDDD"}`,
            translate: isMenuVisible ? "0px" : "2000px"

        }}>
            <Button variant="login">
                Login
            </Button>
            <div className="menu_nav_items cursor-pointer hover:text-link hover:underline hover:underline-offset-4 hover:decoration-2">About Us</div>
            <div className="menu_nav_items cursor-pointer hover:text-link hover:underline hover:underline-offset-4 hover:decoration-2">Our Mission</div>
            <div className="menu_nav_items cursor-pointer hover:text-link hover:underline hover:underline-offset-4 hover:decoration-2">Blog</div>
            <Cross onClick={() => {
                dispatch(toggle())
                menuRef.current.style.translate = "2000px"
            }} className="cursor-pointer md:hidden" />
        </div>
    )
}