import useNotify from "../useNotify"

function Demo() {
  const notify = useNotify()

  return (
    <div>
      <button onClick={() => notify("Hello")}>Show toast</button>
    </div>
  )
}

export default Demo