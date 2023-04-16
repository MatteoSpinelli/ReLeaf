import {useRef, createRef, Ref, useState} from "react"

export function RangeTest({ variant, question }: { variant: string, question: any }) {
    const inputRef: any = createRef<HTMLInputElement>()
    const [value, setValue] = useState(0)
    function handleChange(e: any){
        setValue(e.target.value)
    }
    function labels(){
        const filtered: any[] = question.labels.filter((label: any) => { return value >= label.gt })
        console.log(question.title, value, question.minValue)
        const label = filtered[filtered.length - 1]
        return <div>{label.title}</div>
    }
    return <div>
        <label htmlFor="temp">{question.title}</label>
        <input ref={inputRef} onChange={handleChange} type="range" id="temp" name="temp" value={value || question.defaultValue} min={question.minValue} max={question.maxValue}/>
        {labels()}
    </div>
}