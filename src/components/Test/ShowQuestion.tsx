import { OptionsTest } from "./OptionsTest"
import { RangeTest } from "./RangeTest"
import { ToggleTest } from "./ToggleTest"

export function ShowQuestion({ question }: {question: any}){
    const type = question.type
    return <div className="flex flex-col">
        <h1>{question.title}</h1>
        {(type === "steps" || type === "number") && <RangeTest question={question} />}
        {type === "answers" && <OptionsTest question={question} />}
        {type === "toggle" && <ToggleTest question={question} />}
    </div>
}