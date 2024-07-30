import { useState } from "react"

export default function TodoInput(props) {

    const {handleAddTodo} = props

    const [inputValue,setInputValue] = useState('')

    return (
        <header>
            <input value={inputValue} onChange={(e) => {setInputValue(e.target.value)}} placeholder="Enter todo..." />
            <button onClick={() => {
                handleAddTodo(inputValue)
                setInputValue('')
            }}>Add</button>
        </header>
    )
}
