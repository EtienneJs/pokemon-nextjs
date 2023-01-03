import React from "react";
import { useTheme, Text, Spacer, Link } from "@nextui-org/react";
import Image from "next/image";
import NextLink from "next/link";

export const Navbar = () => {
  const { theme } = useTheme();
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "start",
        padding: "0px 20px",
        backgroundColor: theme?.colors.gray100.value,
      }}
    >
      <Image
        src={
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
        }
        alt="icono de la app"
        width={70}
        height={70}
      />
      <NextLink href={"/"} passHref legacyBehavior>
        <Link>
          <Text color="white" h2>
            P
          </Text>
          <Text color="white" h3>
            okemon
          </Text>
        </Link>
      </NextLink>
      <Spacer css={{ flex: 1 }} />
      <NextLink href={"/favorite"} passHref legacyBehavior>
        <Link>
          <Text color="white" h3>
            favorite
          </Text>
        </Link>
      </NextLink>
    </div>
  );
};