import { Spacer } from '@nextui-org/react';
import { Layout } from 'components/layouts';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { client } from 'utils';

export interface AuthorPageProps {
  author: any;
}

const AuthorPage: NextPage<AuthorPageProps> = ({ author }) => {
  return (
    <Layout title={'ani'}>
      <Spacer y={2} />
      <pre>{JSON.stringify(author)}</pre>
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
