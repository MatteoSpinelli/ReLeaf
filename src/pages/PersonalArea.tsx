import { useNavigate } from "react-router-dom"
import { useUser } from "../hooks/useUser"
import { useEffect } from "react"
import PageContainer from "../components/PageContainer/PageContainer"
import { Nav } from "../components/Nav/Nav"
import Footer from "../components/Footer/Footer"
import { PersonalContainer } from "../components/PersonalContainer/PersonalContainer"

export function PersonalArea() {
  const [user, setUser] = useUser()
  const navigate = useNavigate()

  return (
    <PageContainer
      title="PersonalArea" // the title of the page
      titleTemplate="PersonalArea" // titleTemplate is optional, default value is "%s | ReLeaf". %s is the title
      description="Join ReLeaf, be part of the movement towards a brighter, more sustainable future by making simple changes today" // meta description
      // here you can add other props, for now available props are: title, titleTemplate, description and className
    >
      <Nav />
      <PersonalContainer />
      <Footer />
    </PageContainer>
  )
}
