import { OptionsTest } from "./OptionsTest"
import { RangeTest } from "./RangeTest"
import { ToggleTest } from "./ToggleTest"
import "./Test.scss"

export function ShowQuestion({ question }: {question: any}){
    const type = question.type
    return <div className="showquestion-container">
        <h1 className="question">{question.title}</h1>
        {(type === "steps" || type === "number") && <RangeTest question={question} />}
        {type === "answers" && <OptionsTest question={question} />}
        {type === "toggle" && <ToggleTest question={question} />}
    </div>
}