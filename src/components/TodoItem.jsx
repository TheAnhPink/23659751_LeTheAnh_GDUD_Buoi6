import { useRecoilState } from "recoil"
import { todoState } from "../todoState"
import { useState } from "react"

function TodoItem({ todo }) {
  const [todos, setTodos] = useRecoilState(todoState)
  const [edit, setEdit] = useState(false)
  const [text, setText] = useState(todo.text)

  const deleteTodo = () => {
    setTodos(todos.filter((t) => t.id !== todo.id))
  }

  const updateTodo = () => {
    setTodos(
      todos.map((t) =>
        t.id === todo.id ? { ...t, text: text } : t
      )
    )
    setEdit(false)
  }

  return (
    <div>
      {edit ? (
        <>
          <input value={text} onChange={(e) => setText(e.target.value)} />
          <button onClick={updateTodo}>Save</button>
        </>
      ) : (
        <>
          <span>{todo.text}</span>
          <button onClick={() => setEdit(true)}>Edit</button>
        </>
      )}

      <button onClick={deleteTodo}>Delete</button>
    </div>
  )
}

export default TodoItem