import { useRecoilValue } from "recoil"
import { todoState } from "../todoState"
import TodoItem from "./TodoItem"

function TodoList() {
  const todos = useRecoilValue(todoState)

  return (
    <div>
      {todos.map((t) => (
        <TodoItem key={t.id} todo={t} />
      ))}
    </div>
  )
}

export default TodoList