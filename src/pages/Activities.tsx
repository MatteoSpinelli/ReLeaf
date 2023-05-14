import Cookies from "js-cookie"
import Footer from "../components/Footer/Footer"
import { Nav } from "../components/Nav/Nav"
import PageContainer from "../components/PageContainer/PageContainer"
import useSWR from "swr"
import { useEffect } from "react"

const Activities = () => {
  const { data: activities } = useSWR("/api/v1/user/activities?completed=true")
  const jwt = Cookies.get("jwt")
  const headers = jwt ? { authorization: `Bearer ${jwt}` } : undefined

  //   const addActivity = async () => {
  //     await fetch("http://localhost:5000/api/v1/user/activities/197333ba-3677-41ce-b1be-6a52a6d736f1", {
  //       method: "PUT",
  //       headers,
  //     })
  //   }

  //   useEffect(() => {
  //     addActivity()
  //   }, [])

  return (
    <PageContainer
      title="Activities" // the title of the page
      titleTemplate="%s - Reduce your global impact | Releaf" // titleTemplate is optional, default value is "%s | ReLeaf". %s is the title
      description="Join ReLeaf, be part of the movement towards a brighter, more sustainable future by making simple changes today" // meta description
      // here you can add other props, for now available props are: title, titleTemplate, description and className
    >
      <Nav />
      <main className="mt-[60px] flex justify-center">
        <div className="w-full max-w-6xl">{activities && JSON.stringify(activities)}</div>
      </main>
      <Footer />
    </PageContainer>
  )
}

export default Activities
