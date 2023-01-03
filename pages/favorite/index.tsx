import { Layout } from "../../components/layouts/";
import { Container, Text, Image, Grid, Card } from "@nextui-org/react";
import { NoFavorite } from "../../components/ui";
import { useState, useEffect } from "react";
import localFavorites from "../../utils/localFavorites";
import { toggleFavorites } from "../../utils";
import { FavoritePokemons } from "../../components/pokemon/FavoritePokemons";

const FavoritesPage = () => {
  const [favoritePokemon, setFavoritePokemon] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemon(toggleFavorites.pokemon());
  }, []);

  return (
    <Layout title="Pokemones-Favoritos">
      {favoritePokemon.length === 0 ? (
        <NoFavorite />
      ) : (
        <FavoritePokemons favoritePokemon={favoritePokemon} />
      )}
    </Layout>
  );
};

export default FavoritesPage;
