import TodoCard from "./TodoCard"

export default function TodoList(props) {

    let {todolist} = props

    return (
        <div className="todoListCnt">
            <p className="todoList">
                {todolist.map((Todo, TodoIndex) => {
                    return(
                        <TodoCard {...props} key={TodoIndex} todoindex={TodoIndex} todo={Todo} />
                    )
                })}
            </p>
        </div>
    )
}
