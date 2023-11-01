import axios, { AxiosResponse } from "axios";


export const getPokemons = async (pokemonId: number): Promise<AxiosResponse> =>  {

  const resp = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
  console.log(resp.data);

  return resp
}