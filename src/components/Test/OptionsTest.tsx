import { useDispatch, useSelector } from "react-redux";
import { setValue } from "../../store/slices/questionSlice";

export function OptionsTest({ question }: { question: any }) {
    const dispatch = useDispatch()
    const value = useSelector((state: any) => {
        console.log(state.questions.body.answers[state.questions.currentQuestion].value)
        return state.questions.body.answers[state.questions.currentQuestion].value
    })

    function handleClick(e: any){
        document.querySelectorAll(".radioTest").forEach((el: any) => {el.checked = false} )
        e.currentTarget.children[0].checked = true
        dispatch(setValue({questionid: question.id_question , value: Number(e.currentTarget.children[0].value)}))
    }

    return <div className="grid grid-rows-1">
        {question.values.map((radio: any) => {
            return <div onClick={handleClick} key={radio.value}>
                <input type="radio" className="radioTest" value={radio.value} defaultChecked={radio.value === value} />
                <label className="mx-2">{radio.title}</label>
            </div>
        })}
    </div>

}