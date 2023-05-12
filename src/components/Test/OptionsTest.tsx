import { useDispatch, useSelector } from "react-redux"
import { setValue } from "../../store/slices/questionSlice"
import "./Test.scss"

export function OptionsTest({ question }: { question: any }) {
  const dispatch = useDispatch()
  const value = useSelector((state: any) => {
    return state.questions.body.answers[state.questions.currentQuestion].value
  })

  function handleClick(e: any) {
    document.querySelectorAll(".radioTest").forEach((el: any) => {
      el.checked = false
    })
    e.currentTarget.children[0].checked = true
    dispatch(setValue({ questionid: question.id_question, value: Number(e.currentTarget.children[0].value) }))
  }

  return (
    <div className="radio-container w-1/2">
      {question.values.map((radio: any) => {
        return (
          <div onClick={handleClick} key={radio.value}>
            <input type="radio" className="radioTest float-left" value={radio.value} defaultChecked={radio.value === value} />
            <label className="radio-label">{radio.title}</label>
          </div>
        )
      })}
    </div>
  )
}
