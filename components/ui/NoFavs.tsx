import { Container, Image, Text } from '@nextui-org/react';
import React, { FC } from 'react';

interface NoFavsPorps {
  showIn?: boolean;
}

export const NoFavs: FC<NoFavsPorps> = ({ showIn = true }) => {
  return showIn ? (
    <Container
      css={{
        display: 'flex',
        flexDirection: 'column',
        height: 'calc(100vh - 100px)',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text h1>No favs yet</Text>
      <Image
        src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg'
        width={250}
        height={250}
        alt='Ditto'
        css={{ opacity: 0.5 }}
      />
    </Container>
  ) : null;
};
