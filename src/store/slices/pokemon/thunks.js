import { setPokemons, startLoadingPokemon } from "./pokemonSlice"
import {pokemonApi} from "../../../api/pokemonApi" 


export const getPokemon= (page = 0 ) =>{
 return async (dispatch,getState)=>{

    dispatch(startLoadingPokemon())

    //TODO:realizar petición http 

   //  const  resp= await fetch( `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page* 10}`)
   //  const  data= await resp.json()
   //  console.log(data);

   const {data }=  await pokemonApi.get(`/pokemon?limit=10&offset=${page* 10}`)
   console.log(data);
   
    

    dispatch(setPokemons({pokemons:data.results ,page:page+1}))

    // dispatch(setPokemons(data-pokemon) );


 }
}

export const getPokemonMinus= (page=2 ) =>{
   return async (dispatch,getState)=>{
  
      if (page < 0) return
      dispatch(startLoadingPokemon())
  
      //TODO:realizar petición http 
  
     //  const  resp= await fetch( `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page* 10}`)
     //  const  data= await resp.json()
     //  console.log(data);
  
     const {data }=  await pokemonApi.get(`/pokemon?limit=10&offset=${(page-2)* 10}`)
     console.log(data);
     
      
  
      dispatch(setPokemons({pokemons:data.results ,page:page-1}))
  
      // dispatch(setPokemons(data-pokemon) );
  
  
   }
  }