import { useState ,useEffect} from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {

  const [Todos,setTodos] = useState([])

  const [inputValue,setInputValue] = useState('')

  function persistTodo(newTodoList) {
    localStorage.setItem('todos',JSON.stringify({todos:newTodoList}))
  }

  function handleAddTodo(newTodo) {
    const newTodoList = [...Todos,newTodo]
    persistTodo(newTodoList)
    setTodos(newTodoList)
  }

  function handleDeleteTodo(index) {
    const newTodoList = Todos.filter((todo,todoindex) => {
      return todoindex !== index
    })

    persistTodo(newTodoList)
    setTodos(newTodoList)
  }

  function handleEditTodo(index) {
    const editValue = Todos[index]
    setInputValue(editValue)

    handleDeleteTodo(index)
  }

  useEffect(() => {
    if (!localStorage){
      return
    }

    let localTodos = localStorage.getItem('todos')
    if (!localTodos){
      return
    }
    setTodos(JSON.parse(localTodos).todos)
  },[])

  return (
    <main>
     <TodoInput handleAddTodo={handleAddTodo} inputValue={inputValue} setInputValue={setInputValue} />
     <TodoList handleDeleteTodo={handleDeleteTodo} todolist={Todos} handleEditTodo={handleEditTodo}/>
    </main>
  )
}

export default App
