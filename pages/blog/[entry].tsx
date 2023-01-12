import { Image, Spacer, User } from '@nextui-org/react';
import { Layout } from 'components/layouts';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { client } from 'utils';

export interface BlogPostPageProps {
  blogPost: any;
}

const BlogPostPage: NextPage<BlogPostPageProps> = ({ blogPost }) => {
  console.log(blogPost);

  return (
    <Layout
      title={`Pabkon Blog - ${blogPost.title}`}
      author={blogPost.author.fields.name}
    >
      <Image
        height={320}
        src={blogPost.image.fields.file.url}
        alt='Default Image'
        objectFit='cover'
      />
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async _ctx => {
  const response = await client.getEntries({
    content_type: 'blogPost-2',
  });

  console.log(response);

  const paths = response.items.map(item => ({
    //@ts-ignore
    params: { entry: item.fields.slug },
  }));

  console.log(paths);

  return {
    paths,
    /* fallback: false // "blocking" allows SSG */
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string };
  console.log(slug);

  const response = await client.getEntries({
    content_type: 'blogPost-2',
    'fields.slug': slug,
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

  console.log(response.items[0]);

  return {
    props: {
      blogPost: response.items[0].fields,
    },
  };
};

export default BlogPostPage;
