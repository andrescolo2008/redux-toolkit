import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPokemon, getPokemonMinus } from "./src/store/slices/pokemon"


export const PokemonApp = () => {
  
  
  const dispatch = useDispatch()
  const {isLoading,pokemons =[],page} = useSelector(statess=> statess.pokemon)

useEffect(() => {
dispatch ( getPokemon() )
dispatch ( getPokemonMinus() )
  
}, [])





  return (
<>
<h1>Pokemon</h1>

<h2> Loading  </h2>



<span > {isLoading ? 'true': 'false'} </span>
<hr />
<ol >
    {
    pokemons.map( ({name})=>(
     <li key={name}> {name}   </li> 
    ))
  }
  </ol>

<h2>{page}</h2>

<button
disabled={isLoading}
onClick={()=> dispatch(getPokemon(page) ) }
>
  next
</button>
<button
disabled={isLoading || page  <=1}
onClick={()=> dispatch(getPokemonMinus(page) ) }
>
  previous
</button>
</>
    )
}
