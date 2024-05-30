import { useState } from "react";
import { useGetTodoQuery,useGetTodosQuery  } from "./store/apis/todosApi"
import { useForm } from "./store/slices/todos/useForm";



export const TodoApp = () => {

  const [todoId, setTodoId] = useState(1)
  const{onInputChange,formState} =useForm({todoId:''})
  const {data: todo,isLoading}=  useGetTodoQuery(todoId)
// const {data: todos =[],isLoading}=  useGetTodosQuery()
// const{ id,title} = todo

const previousTodo= ( ) =>{
  if (todoId ===1) return 
  setTodoId( todoId-1);
}

const nextTodo= ( ) =>{
  setTodoId( todoId+1);
}

const searchTodo= ( ) =>{

  const id= parseInt(formState.todoId,10)
if(!isNaN(id)){
  setTodoId( id);
  
}
}

// console.log(id,title,isLoading);

  return (
  
  <>
  
  <h1>Todos -TRK Query</h1>

<hr />
<h4> Loading</h4>
  <h4>{isLoading? 'true':'false'}</h4>  
  {/* <pre>{ JSON.stringify(id +" "+ title )}</pre> */}
   <pre>{ JSON.stringify(todo )}</pre> 


  <button onClick={previousTodo}>
    Previus TODOO
    </button>  

  <button onClick={nextTodo}>
    Next TODOO
    </button>  

    <input 
    type="text"
    name="todoId"
    placeholder="escriba el número del TODO"
    onChange={onInputChange}
    value={formState.todoId}
    />

    <button
    onClick={() =>searchTodo()}
    >
      Buscar TODO por número
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
