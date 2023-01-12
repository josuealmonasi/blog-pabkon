import React, { FC, PropsWithChildren } from 'react';
import Head from 'next/head';
import { NavBar } from 'components/ui';
import { Container } from '@nextui-org/react';

type LayoutProps = {
  title?: string;
} & PropsWithChildren;

export const Layout: FC<LayoutProps> = ({ children, title = 'Pokémon App' }) => {
  return (
    <>
      <Head>
        <title>{`${title.charAt(0).toUpperCase()}${title.substring(1)}`}</title>
        <meta name='author' content='Josué Almonasi' />
        <meta name='description' content={`Info about Pokémon ${title}`} />
        <meta name='keywords' content={`${title}, pokémon, pokemon, pokedex`} />
      </Head>

      <NavBar />

      <Container as='main'>{children}</Container>
    </>
  );
};
