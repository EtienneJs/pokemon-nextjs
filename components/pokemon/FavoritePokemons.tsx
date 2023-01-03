import { Grid, Card } from "@nextui-org/react";
import React from "react";
import { PokemonCardF } from "./PokemonCardF";

export const FavoritePokemons = ({
  favoritePokemon,
}: {
  favoritePokemon: number[];
}) => {
  return (
    <Grid.Container gap={2} direction="row" justify="flex-start">
      {favoritePokemon.map((id) => (
        <PokemonCardF key={id} id={id} />
      ))}
    </Grid.Container>
  );
};
