export default function TodoList() {

    let todos = [
        'Do React Course...',
        'Complete Full Stack Open...',
        'Learn NodeJS'
    ]

    return (
        <div className="todoListCnt">
            <p className="todoList">
                {todos.map((todo, todoIndex) => {
                    return(
                        <div className="todoItem" key={todoIndex}>
                            <p>{todoIndex + 1}. </p>
                            <div key={todoIndex}>{todo}</div>
                        </div>
                    )
                })}
            </p>
        </div>
    )
}
