import { useDispatch, useSelector } from 'react-redux'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { decrement, increment, incrementBy } from './store/slices/counter/counterSlice'
import { useForm } from './store/slices/counter/form'


function App() {
  
  
const{
  onInputChange,
  onResetForm,initialForm,...formState}=useForm({value:1})

const {counter}= useSelector(stado =>stado.contador)
const  dispatch= useDispatch();

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>count is {counter}</h1>
      <div className="card">
        <button onClick={() => dispatch(increment())}>
          increment
        </button>
       
        <button onClick={() => dispatch(decrement())}>
          decrement
        </button>

        <button onClick={() => dispatch(incrementBy((Number(formState.value) ) ))}>
          increment by + {formState.value} 
        </button>

        <form action="">
          <input 
          type="text"
          placeholder={initialForm}
          name='value'
          onChange={onInputChange} 
          value={formState.value}
          />
        </form>


      </div>
      
    </>
  )
}

export default App
