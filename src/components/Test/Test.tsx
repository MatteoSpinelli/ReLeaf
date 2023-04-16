import { useDispatch, useSelector } from "react-redux"
import { useQuestions } from "../../hooks/useQuestions"
import { go } from "../../store/slices/questionSlice"
import { ShowQuestion } from "./ShowQuestion"

export function Test() {
    const { data, isLoading, error } = useQuestions()
    const dispatch = useDispatch()
    const questions = useSelector((state: any) => state.questions)
    function handleButtons(evt: any){
        dispatch(go(evt.target.innerText === "Next" ? 1 : -1))
    }
    return (
        <div>
            {/* Presentational logic */}
            {data && <ShowQuestion question={data.filter((question, i) => i === questions.currentQuestion)[0]} />} {/* Presentational logic for questions */}
            {/* next and prev buttons */}
            <button onClick={handleButtons}>Previous</button>
            <button onClick={handleButtons}>Next</button>
            {/* Progession Circle and statements */}
        </div>
    )
}