import { useDispatch, useSelector } from "react-redux";
import { setValue } from "../../store/slices/questionSlice";
import { useEffect } from "react"
//style
import "./Test.scss";

export function ToggleTest({ question }: { question: any }) {
    const dispatch = useDispatch()
    const value = useSelector((state: any) => {
        console.log(state.questions.body.answers[state.questions.currentQuestion].value)
        return state.questions.body.answers[state.questions.currentQuestion].value
    })
    function handleClick(e: any){
        e.target.checked ? dispatch(setValue({questionid: question.id_question , value: question.maxValue})) : dispatch(setValue({questionid: question.id_question , value: question.minValue}))
    }

    return <div className="checkbox">
        <input onClick={handleClick} type="checkbox" name="" defaultChecked={value === question.maxValue}  />
    </div>

}