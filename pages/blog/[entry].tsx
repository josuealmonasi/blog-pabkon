import { Badge, Grid, Image, Spacer } from '@nextui-org/react';
import { Layout } from 'components/layouts';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { client } from 'utils';
import ReactMarkdown from 'react-markdown';
import { Text } from '@nextui-org/react';

export interface BlogPostPageProps {
  blogPost: any;
}

const getColor = (
  index: number,
): 'primary' | 'secondary' | 'success' | 'warning' | 'error' => {
  const colors: Array<'primary' | 'secondary' | 'success' | 'warning' | 'error'> = [
    'primary',
    'secondary',
    'success',
    'warning',
    'error',
  ];
  if (index < colors.length) {
    return colors[index];
  }
  return colors[index % colors.length];
};

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

      <Text h1>{blogPost.title}</Text>

      <Grid.Container gap={1}>
        {blogPost.hashtag.map((tag: string, index: number) => (
          <Grid key={tag + index}>
            <Badge variant='flat' color={getColor(index)}>
              {tag}
            </Badge>
          </Grid>
        ))}
      </Grid.Container>

      <Spacer y={1} />

      <ReactMarkdown>{blogPost.body}</ReactMarkdown>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async _ctx => {
  const response = await client.getEntries({
    content_type: 'blogPost-2',
  });

  const paths = response.items.map(item => ({
    //@ts-ignore
    params: { entry: item.fields.slug },
  }));

  return {
    paths,
    /* fallback: false // "blocking" allows SSG */
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string };

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
