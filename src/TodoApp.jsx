import { useState } from "react";
import { useGetTodoQuery,useGetTodosQuery  } from "./store/apis/todosApi"

export const TodoApp = () => {

  const [todoId, setTodoId] = useState(1)
  const {data: todo,isLoading}=  useGetTodoQuery(todoId)
// const {data: todos =[],isLoading}=  useGetTodosQuery()
const{ id,title} = todo

const previousTodo= ( ) =>{
  if (todoId ===1) return 
  setTodoId( todoId-1);
}

const nextTodo= ( ) =>{
  setTodoId( todoId+1);
}

console.log(id,title,isLoading);

  return (
  
  <>
  
  <h1>Todos -TRK Query</h1>

<hr />
<h4> Loading</h4>
  <h4>{isLoading? 'true':'false'}</h4>  
  <pre>{ JSON.stringify(id +" "+ title )}</pre>
   {/* <pre>{ JSON.stringify(todo )}</pre>  */}


  <button onClick={previousTodo}>
    Previus TODOO
    </button>  

  <button onClick={nextTodo}>
    Next TODOO
    </button>  

          {/* <ul>
          {todos.map( todo =>(

                    <li key={todo.id}>
                      <strong>{todo.completed ? 'done': 'pending'}  </strong>
                    {todo.title}
                    </li>

                 ) )}  

          </ul> */}

  

  </>
  
    )
}
