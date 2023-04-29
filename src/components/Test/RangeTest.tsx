import { createRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setValue } from "../../store/slices/questionSlice"
import "./Test.scss"
export function RangeTest({ question }: {question: any }) {
    const inputRef: any = createRef<HTMLInputElement>()
    const dispatch = useDispatch()
    const value = useSelector((state: any) => {
        console.log(state.questions.body.answers[state.questions.currentQuestion].value)
        return state.questions.body.answers[state.questions.currentQuestion].value
    })
    function handleChange(e: any) {
        dispatch(setValue({questionid: question.id_question , value: Number(e.target.value)}))
    }
    function labels() {
        const filtered: any[] = question.labels.filter((label: any) => { return value >= label.gt })
        const label = filtered[filtered.length - 1]
        if (label) {
            return <div>{label.title}</div>
        }
    }
    function um() {
        if (question.um) {
            return <div>{`${value}${question.um}`}</div>
        }
    }

    return <div className="range">
        <div className="range-container flex">
            <label className="range-label block">{question.minLabel}</label>
            <div className="justify-self-center flex-grow">
            <input className="range-input" ref={inputRef} onChange={handleChange} type="range" id="temp" name="temp" value={value} min={question.minValue} max={question.maxValue} />
            </div>
            <label className="range-label block">{question.maxLabel}</label>
        </div>
        {labels()}
        {um()}
    </div>
}