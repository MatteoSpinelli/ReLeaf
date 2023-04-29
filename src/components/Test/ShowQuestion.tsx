import { OptionsTest } from "./OptionsTest"
import { RangeTest } from "./RangeTest"
import { ToggleTest } from "./ToggleTest"
import { useEffect } from "react"
import "./Test.scss"

export function ShowQuestion({ question }: {question: any}){
    const type = question.type
    useEffect(() => {
        const div: any = document.querySelector(".showquestion-container")
        div.style.animation = "question-anim 1s ease"
    })
    return <div className="showquestion-container animate-question">
        <h1 className="question">{question.title}</h1>
        {(type === "steps" || type === "number") && <RangeTest question={question} />}
        {type === "answers" && <OptionsTest question={question} />}
        {type === "toggle" && <ToggleTest question={question} />}
    </div>
}