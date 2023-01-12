import { Navbar, Spacer } from '@nextui-org/react';
import Image from 'next/image';
import Link from 'next/link';

export const NavBar = () => {
  const collapseItems = [{ name: 'Favorites', path: 'favorites' }];

  return (
    <Navbar isBordered variant='sticky'>
      <Navbar.Brand>
        <Navbar.Content showIn={'xs'}>
          <Navbar.Toggle aria-label='toggle navigation' />

          <Spacer y={1} />
        </Navbar.Content>

        <Navbar.Content>
          {/* <li>
            <Link href='/'>
              <a>
                <Image
                  src={'/assets/img/pokemon-logo.png'}
                  alt={'Pokemon'}
                  height={76}
                  width={80}
                />
              </a>
            </Link>
          </li> */}
        </Navbar.Content>
      </Navbar.Brand>

      {/* <Navbar.Content hideIn='xs' variant='underline'>
        {collapseItems.map(item => (
          <li key={item.name}>
            <Link href={`/${item.path}`}>{item.name}</Link>
          </li>
        ))}
      </Navbar.Content> */}

      <Navbar.Collapse>
        {collapseItems.map(item => (
          <Navbar.CollapseItem key={item.name}>
            <Link href={`/${item.path}`} color='inherit'>
              {item.name}
            </Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
};
