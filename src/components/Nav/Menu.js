import useTheme from "../../hooks/useTheme";
import Button from "../Button/Button";
import { ReactComponent as Cross } from "../../assets/svg/global/cross.svg"
import { useRef } from "react"
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../../store/slices/menuSlice";


export function Menu({isVisible = false}) {
    const { isDark } = useTheme()
    const menuRef = useRef()
    const dispatch = useDispatch()
    const isMenuVisible = useSelector((state) => state.isMenuVisible)
    return (
        <div ref={menuRef} className="menu_nav_global flex flex-col fixed top-0 w-8/12 h-screen justify-evenly items-center md:flex-row" style={{
            backgroundColor: isDark ? "#283442" : "#FFFFFF",
            borderLeft: `1px solid ${isDark ? "#23303F" : "#DDDDDD"}`,
            translate: isMenuVisible ? "0px" : "2000px"

        }}>
            <Button variant="login" children={"Login"} />
            <div>About Us</div>
            <div>Our Mission</div>
            <div>Blog</div>
            <Cross onClick={() => {
                dispatch(toggle())
                menuRef.current.style.translate = "2000px"
            }} className="cursor-pointer" />
        </div>
    )
}