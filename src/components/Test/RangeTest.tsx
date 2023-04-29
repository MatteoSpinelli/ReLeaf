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

    return <div className="range px-4 w-full">
        <div className="range-container relative grid gap-4 grid-rows-1 w-full h-5">
            <p className="range-label ">{question.minLabel}</p>
            <div className="flex flex-col justify-center">
            <input className="range-input" ref={inputRef} onChange={handleChange} type="range" id="temp" name="temp" value={value} min={question.minValue} max={question.maxValue} />
            </div>
            <p className="range-label ">{question.maxLabel}</p>
        </div>
        {labels()}
        {um()}
    </div>
}