export const NoteTodo = ({ todos }) => {
console.log(todos)
    return <ul >
        {todos.map((todo, index) => (
            <li key={index}>
                <input type="checkbox" id={`todo${index}`} name={`todo${index}`} value={todo.txt} />
                <label htmlFor={`todo${index}`}>{todo.txt}</label>
            </li>
        ))}
    </ul>



}