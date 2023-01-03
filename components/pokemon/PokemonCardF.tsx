import React from "react";
import { Grid, Card } from "@nextui-org/react";
import { useRouter } from "next/router";

export const PokemonCardF = ({ id }: { id: number }) => {
  const router = useRouter();
  const onFavoriteClicked = () => {
    router.push(`/pokemon/${id}`);
  };
  return (
    <Grid xs={6} sm={3} md={2} xl={1} key={id} onClick={onFavoriteClicked}>
      <Card isHoverable isPressable css={{ padding: 10 }}>
        <Card.Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
          width={"100%"}
          height={140}
        />
      </Card>
    </Grid>
  );
};
