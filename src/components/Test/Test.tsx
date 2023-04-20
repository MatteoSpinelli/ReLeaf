import { useDispatch, useSelector } from "react-redux"
import { useQuestions } from "../../hooks/useQuestions"
import { go, setValue } from "../../store/slices/questionSlice"
import { ShowQuestion } from "./ShowQuestion"
import { useEffect } from "react"
import { redirect, useNavigate } from "react-router-dom"
import { useUser } from "../../hooks/useUser"

export function Test() {
    const [user, setUser] = useUser()
    const { data, isLoading, error } = useQuestions()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const questions = useSelector((state: any) => state.questions)
    function handleButtons(evt: any){
        dispatch(go(evt.target.innerText === "Next" ? 1 : -1))
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
        <div className="w-screen h-screen flex flex-col justify-center items-center">
            {/* Presentational logic */}
            {data && <ShowQuestion question={data[questions.currentQuestion]} />} {/* Presentational logic for questions */}
            {/* next and prev buttons */}
            <button onClick={handleButtons}>Previous</button>
            <button onClick={handleButtons}>Next</button>
            {/* Progession Circle and statements */}
        </div>
    )
}