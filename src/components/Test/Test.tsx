import { useDispatch, useSelector } from "react-redux"
import { useQuestions } from "../../hooks/useQuestions"
import { go, setValue } from "../../store/slices/questionSlice"
import { ShowQuestion } from "./ShowQuestion"
import { useEffect } from "react"
import { redirect, useNavigate } from "react-router-dom"
import { useUser } from "../../hooks/useUser"
import { ReactComponent as NextButton } from "../../assets/svg/test/next.svg"
import { ReactComponent as PreviousButton } from "../../assets/svg/test/previous.svg"
import { ReactComponent as BG1 } from "../../assets/questionary-bg/quest-carpool.svg"
import { ReactComponent as BG2 } from "../../assets/questionary-bg/quest-energy-eco.svg"

import "./Test.scss"


export function Test() {
    const [user, setUser] = useUser()
    const { data, isLoading, error } = useQuestions()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const questions = useSelector((state: any) => state.questions)
    function handleButtons(evt: any){
        const classValue = evt.target.classList.value.split(" ")[0]
        evt.target.classList.add("button_active")
        dispatch(go(classValue === "next_test" ? 1 : -1))
        /* upload of the answer */
        if (questions.currentQuestion === 16){
            navigate("/test-result")
        }
    }
    useEffect(() => {
        if (user){
            navigate("/")
        }
    }, [])
    return (
        <div className="testPage w-screen h-screen flex flex-col justify-center items-center z-10">
            {/* Presentational logic */}
            {data && <ShowQuestion question={data[questions.currentQuestion]} />} {/* Presentational logic for questions */}
            {/* next and prev buttons */}
            <PreviousButton className="previous_test bg-white fixed left-0 top-2/4 mx-4 rounded-full p-2" onClick={handleButtons} />
            <NextButton className="next_test bg-white fixed right-0 top-2/4 mx-4 rounded-full p-2" onClick={handleButtons} />
            {/* Progession Circle and statements */}
            { questions.currentQuestion === 1 && <BG1 className="fixed bottom-0 left-0 z-[-2]" /> }
            { questions.currentQuestion === 2 && <BG2 className="fixed bottom-0 left-0 z-[-2]" /> }
        </div>
    )
}