import { useState } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {

  const [Todos,setTodos] = useState([
    'Do React Course...',
    'Complete Full Stack Open...',
    'Learn NodeJS'
  ])

  function handleAddTodo(newTodo) {
    const newTodoList = [...Todos,newTodo]
    setTodos(newTodoList)
  }

  function handleDeleteTodo(index) {
    const newTodoList = Todos.filter((todo,todoindex) => {
      return todoindex !== index
    })

    setTodos(newTodoList)
  }

  return (
    <main>
     <TodoInput handleAddTodo={handleAddTodo} />
     <TodoList handleDeleteTodo={handleDeleteTodo} todolist={Todos} />
    </main>
  )
}

export default App
