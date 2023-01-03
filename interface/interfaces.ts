export interface layoutProps {
  children: JSX.Element | JSX.Element[];
  title?: string;
}
export interface PokemonListRespon {
  count: number;
  next: string;
  previous: null | string;
  results: SmallPokemon[];
}

export interface SmallPokemon {
  name: string;
  url: string;
  id: number;
  img: string;
}

export interface PokemosProps {
  pokemons: SmallPokemon[];
}
