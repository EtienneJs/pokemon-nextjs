import Head from "next/head";
import React, { FunctionComponent } from "react";
import { layoutProps } from "../../interface";
import { Navbar } from "../ui/";
import { useRouter } from "next/router";

const origion = typeof window === "undefined" ? "" : window.location.origin;

export const Layout: FunctionComponent<layoutProps> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || "Pokemon App"}</title>
        <meta name="author" content="Etienne Fernandez" />
        <meta
          name="description"
          content={`Informacion sobre el pokemon ${title}`}
        />
        <meta name="Keywords" content={`${title}, pokemon,pokedex`} />
        <meta property="og:title" content={`Informacion sobre ${title}`} />
        <meta
          property="og:description"
          content={`Esta pagina es sobre ${title}`}
        />
        <meta property="og:image" content={`${origion}/img/banner.png`} />
      </Head>
      {/*Navbar*/}
      <Navbar />
      <main
        style={{
          padding: "0px 20px",
        }}
      >
        {children}
      </main>
    </>
  );
};
