import { Card, Container, Row, Spacer, User, Text } from '@nextui-org/react';
import { Layout } from 'components/layouts';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { client } from 'utils';

export interface AuthorPageProps {
  author: any;
}

const AuthorPage: NextPage<AuthorPageProps> = ({ author }) => {
  console.log(author);

  return (
    <Layout title={`Pabkon Blog - ${author.name}`} author={author.name}>
      <Spacer y={2} />
      <Container wrap='wrap'>
        <Card>
          <Card.Body>
            <Row justify='center' align='center'>
              <User
                css={{ maxWidth: '200px' }}
                src={author.image.fields.file.url}
                name={author.name}
                description={author.shortBio}
                size='xl'
              />
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async _ctx => {
  const response = await client.getEntries({
    content_type: 'person',
  });

  const paths = response.items.map(item => ({
    //@ts-ignore
    params: { name: item.fields.name },
  }));

  console.log(paths);

  return {
    paths,
    /* fallback: false // "blocking" allows SSG */
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { name } = params as { name: string };

  const response = await client.getEntries({
    content_type: 'person',
    'fields.name': name,
  });
  // const Author = await getAuthorInfo(name);
  // if (!Author) {
  //   return {
  //     redirect: {
  //       destination: '/',
  //       permanent: false,
  //     },
  //   };
  // }

  return {
    props: {
      author: response.items[0].fields,
    },
  };
};

export default AuthorPage;
