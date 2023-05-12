import useTranslate from "../../hooks/useTranslate"
import useTheme from "../../hooks/useTheme"
import "./Footer.scss"
import { ReactComponent as Logo } from "../../assets/svg/global/logoDark.svg"
import { ReactComponent as FacebookIcon } from "../../assets/svg/global/FacebookIcon.svg"
import { ReactComponent as InstagramIcon } from "../../assets/svg/global/InstagramIcon.svg"
import { ReactComponent as TwitterIcon } from "../../assets/svg/global/TwitterIcon.svg"
import { Link } from "react-router-dom"

export default function Footer() {
  const t = useTranslate("footer")
  const { isDark } = useTheme()
  return (
    <div className={`bg-gradient-to-b ${isDark ? "from-[#1a2530] to-[#091316]" : "from-[#1a302c] to-[#091614]"}`}>
      <div className="text-center sm:text-left w-full mx-auto max-w-[1240px] py-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 px-[15px]">
        <div className="flex flex-col items-center sm:items-start pb-5">
          <Link className="cursor-pointer" to="/">
            <Logo className="footer-logo" />
          </Link>
          <p className="text-sm text-secondaryTxtDark py-2 sm:pr-7">{t.slogan}</p>
          <div className="flex gap-3 pt-2">
            <FacebookIcon className="footer-social-icon" />
            <InstagramIcon className="footer-social-icon" />
            <TwitterIcon className="footer-social-icon" />
          </div>
        </div>
        <div>
          <h3 className="footer-menu-title">{t.menu1_title}</h3>
          <ul className="footer-menu-list">
            <li>{t.menu1_link1}</li>
            <li>{t.menu1_link2}</li>
            <li>{t.menu1_link3}</li>
            <li>{t.menu1_link4}</li>
            <li>{t.menu1_link5}</li>
            <li>{t.menu1_link6}</li>
          </ul>
        </div>
        <div>
          <h3 className="footer-menu-title">{t.menu2_title}</h3>
          <ul className="footer-menu-list">
            <li>{t.menu2_link1}</li>
            <li>{t.menu2_link2}</li>
            <li>{t.menu2_link3}</li>
            <li>{t.menu2_link4}</li>
            <li>{t.menu2_link5}</li>
          </ul>
        </div>
        <div>
          <h3 className="footer-menu-title">{t.menu3_title}</h3>
          <ul className="footer-menu-list">
            <li>{t.menu3_link1}</li>
            <li>{t.menu3_link2}</li>
            <li>{t.menu3_link3}</li>
            <li>{t.menu3_link4}</li>
          </ul>
        </div>
      </div>
      <div className={`flex justify-center w-full text-xs text-secondaryTxtDark py-2 ${isDark ? "bg-footerBgCopyrightDark" : "bg-footerBgCopyright"}`}>
        <div className="max-w-6xl w-full">
          {t.copyright} {t.signature}
        </div>
      </div>
    </div>
  )
}
