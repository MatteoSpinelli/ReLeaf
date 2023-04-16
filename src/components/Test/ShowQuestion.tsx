import { RangeTest } from "./RangeTest"

export function ShowQuestion({ question }: {question: any}){
    const type = question.type
    return <div>
        <h1>{question.type}</h1>
        {type === "steps" && <RangeTest variant="steps" question={question} />}
    </div>
}