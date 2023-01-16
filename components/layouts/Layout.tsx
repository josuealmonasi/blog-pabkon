import React, { FC, PropsWithChildren } from 'react';
import Head from 'next/head';
import { NavBar } from 'components/ui';
import { Container } from '@nextui-org/react';

type LayoutProps = {
  title?: string;
  author?: string;
} & PropsWithChildren;

export const Layout: FC<LayoutProps> = ({ children, title = 'Pakbon', author = '' }) => {
  return (
    <>
      <Head>
        <title>{`${title.charAt(0).toUpperCase()}${title.substring(1)}`}</title>
        {author !== '' && <meta name='author' content={author} />}
        <meta name='description' content={`Info about Pokémon ${title}`} />
        <meta name='keywords' content={`${title}`} />
      </Head>

      <NavBar />

      <Container as='main'>{children}</Container>
    </>
  );
};
