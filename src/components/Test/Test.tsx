import { useDispatch, useSelector } from "react-redux"
import { useQuestions } from "../../hooks/useQuestions"
import { go, setValue } from "../../store/slices/questionSlice"
import { ShowQuestion } from "./ShowQuestion"
import { useEffect, useState } from "react"
import { redirect, useNavigate } from "react-router-dom"
import { useUser } from "../../hooks/useUser"
//svg
import { ReactComponent as Logo } from "../../assets/svg/global/logo.svg"
import { ReactComponent as BG0 } from "../../assets/questionary-bg/q-farm-0.svg"
import { ReactComponent as BG1 } from "../../assets/questionary-bg/q-food-1.svg"
import { ReactComponent as BG2 } from "../../assets/questionary-bg/q-house-type-2.svg"
import { ReactComponent as BG3 } from "../../assets/questionary-bg/q-house-material-3.svg"
import { ReactComponent as BG4 } from "../../assets/questionary-bg/q-house-size-4.svg"
import { ReactComponent as BG5 } from "../../assets/questionary-bg/q-house-family-5.svg"
import { ReactComponent as BG6 } from "../../assets/questionary-bg/q-energy-6.svg"
import { ReactComponent as BG7 } from "../../assets/questionary-bg/q-energy-6.svg"
import { ReactComponent as BG8 } from "../../assets/questionary-bg/q-energy-8.svg"
import { ReactComponent as BG9 } from "../../assets/questionary-bg/q-trash-9.svg"
import { ReactComponent as BG10 } from "../../assets/questionary-bg/q-traffic-10.svg"
import { ReactComponent as BG12 } from "../../assets/questionary-bg/q-fuel-12.svg"
import { ReactComponent as BG14 } from "../../assets/questionary-bg/q-carpool-14.svg"
import { ReactComponent as BG15 } from "../../assets/questionary-bg/q-bus-15.svg"
import { ReactComponent as BG16 } from "../../assets/questionary-bg/q-fly-16.svg"
import { ReactComponent as PreviousBtn } from "../../assets/svg/test/previous.svg"
import { ReactComponent as NextBtn } from "../../assets/svg/test/next.svg"
//style
import "./Test.scss"

export function Test() {
  const [user, setUser] = useUser()
  const { data, isLoading, error } = useQuestions()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const questions = useSelector((state: any) => state.questions)
  const [bgOpacity, setBgOpacity] = useState(0)

  function handleButtons(direction: number) {
    if (questions.currentQuestion === 16 && direction) {
      navigate("/test-result")
      return
    }
    dispatch(go(direction ? 1 : -1))
    /* animate the question */
    const div: any = document.querySelector(".showquestion-container")
    div.classList.remove("animate-question")
    void div.offsetWidth
    div.classList.add("animate-question")

    /* upload of the answer */

    // gradually background image
    setBgOpacity(0)
    setTimeout(() => {
      setBgOpacity(1)
    }, 300)
  }
  // gradually background image
  useEffect(() => {
    setBgOpacity(0)
    setTimeout(() => {
      setBgOpacity(1)
    }, 500)
  }, [questions.currentQuestion])
  const bgStyle = {
    opacity: bgOpacity,
    transition: "opacity 0.5s",
  }

  useEffect(() => {
    if (user) {
      navigate("/")
    }
  }, [])

  return (
    <div className="test-page w-screen h-screen flex flex-col justify-evenly items-center z-10 py-6">
      {/* Presentational logic */}
      {data?.length !== 0 && data && <ShowQuestion question={data[questions.currentQuestion]} />}
      {/* Presentational logic for questions */}
      {/* next and prev buttons */}
      <PreviousBtn
        onClick={() => {
          handleButtons(0)
        }}
        className="previous-btn bg-primary rotate-180 rounded-full w-[40px] h-[40px] p-2 fixed top-1/2 left-7"
      />
      <NextBtn
        onClick={() => {
          handleButtons(1)
        }}
        className="next-btn bg-primary rounded-full w-[40px] h-[40px] p-2 fixed top-[50vh] right-7"
      />
      {/* Progession Circle and statements */}
      <div className="circle border-orange-300">
        <div className="util-circle "></div>
        <p>Every step counts! Calculate your footprint and make a change</p>
      </div>
      <div className="logo">
        <Logo />
      </div>
      <div className="learn-about">
        <a href="">Learn about</a>
      </div>
      <div>
        {questions.currentQuestion === 0 && <BG0 className="fixed bottom-0 left-0 z-[-2]" style={bgStyle} />}
        {questions.currentQuestion === 1 && <BG1 className="fixed bottom-0 left-0 z-[-2]" style={bgStyle} />}
        {questions.currentQuestion === 2 && <BG2 className="max-w-full fixed bottom-0 left-0 z-[-2]" style={bgStyle} />}
        {questions.currentQuestion === 3 && <BG3 className="fixed bottom-0 left-0 z-[-2]" style={bgStyle} />}
        {questions.currentQuestion === 4 && <BG4 className="fixed bottom-0 left-0 z-[-2]" style={bgStyle} />}
        {questions.currentQuestion === 5 && <BG5 className="fixed bottom-0 left-0 z-[-2]" style={bgStyle} />}
        {questions.currentQuestion === 6 && <BG6 className="fixed bottom-0 left-0 z-[-2]" style={bgStyle} />}
        {questions.currentQuestion === 7 && <BG7 className="fixed bottom-0 left-0 z-[-2]" />}
        {questions.currentQuestion === 8 && <BG8 className="fixed bottom-0 left-0 z-[-2]" style={bgStyle} />}
        {questions.currentQuestion === 9 && <BG9 className="fixed bottom-0 left-0 z-[-2]" style={bgStyle} />}
        {questions.currentQuestion === 10 && <BG10 className="fixed bottom-0 left-0 z-[-2]" style={bgStyle} />}
        {questions.currentQuestion === 11 && <BG10 className="fixed bottom-0 left-0 z-[-2]" />}
        {questions.currentQuestion === 12 && <BG12 className="fixed bottom-0 left-0 z-[-2]" style={bgStyle} />}
        {questions.currentQuestion === 13 && <BG12 className="fixed bottom-0 left-0 z-[-2]" />}
        {questions.currentQuestion === 14 && <BG14 className="fixed bottom-0 left-0 z-[-2]" style={bgStyle} />}
        {questions.currentQuestion === 15 && <BG15 className="fixed bottom-0 left-0 z-[-2]" style={bgStyle} />}
        {questions.currentQuestion === 16 && <BG16 className="fixed bottom-0 left-0 z-[-2]" style={bgStyle} />}
      </div>{" "}
    </div>
  )
}
