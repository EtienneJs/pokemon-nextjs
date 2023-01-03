import { NextPage, GetStaticProps } from "next";
import { Button, Grid, Card, Row, Text } from "@nextui-org/react";
import { Layout } from "../components/layouts/";
import { pokeApi } from "../api";
import { PokemonListRespon, PokemosProps } from "../interface";
import { SmallPokemon } from "../interface/interfaces";
import { PokemonCard } from "../components/pokemon";

const HomePage: NextPage<PokemosProps> = ({ pokemons }) => {
  return (
    <Layout title="Hola Mundo">
      <Grid.Container gap={2} justify="flex-start">
        {pokemons?.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </Grid.Container>
    </Layout>
  );
};
// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListRespon>("/pokemon?limit=151");
  // "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
  const pokemons: SmallPokemon[] = data.results.map((poke, i) => ({
    ...poke,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
      i + 1
    }.png`,
  }));

  return {
    props: {
      pokemons,
    },
  };
};
export default HomePage;
