import { useState } from "react"
import { useRecoilState } from "recoil"
import { todoState } from "../todoState"

function TodoInput() {
  const [todos, setTodos] = useRecoilState(todoState)
  const [text, setText] = useState("")

  const addTodo = () => {
    if (text === "") return
    setTodos([...todos, { id: Date.now(), text }])
    setText("")
  }

  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={addTodo}>Add</button>
    </div>
  )
}

export default TodoInput