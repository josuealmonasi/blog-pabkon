import { Card, Col, Row, Button, Text } from '@nextui-org/react';
import { BlogPost } from 'interfaces';
import { FC } from 'react';
import { useRouter } from 'next/router';

interface BlogCardProps {
  post: BlogPost;
}

export const BlogCard: FC<BlogCardProps> = ({ post }) => {
  const router = useRouter();

  const goToPost = (): void => {
    router.push(`/blog/${post.slug}`);
  };

  return (
    <Card css={{ w: '100%', h: '400px' }}>
      <Card.Body css={{ p: 0 }}>
        <Card.Image
          loading='lazy'
          src={post.image.fields.file.url}
          objectFit='cover'
          width='100%'
          height='100%'
          alt='Relaxing app background'
        />
      </Card.Body>

      <Card.Footer
        isBlurred
        css={{
          position: 'absolute',
          bgBlur: 'rgba(255, 255, 255, 0.7)',
          bottom: 0,
          zIndex: 1,
        }}
      >
        <Row>
          <Col>
            <Row justify='center' align='center'>
              <Col span={3}>
                <Card.Image
                  loading='lazy'
                  src={post.author.fields.image.fields.file.url}
                  css={{ bg: 'black', br: '50%' }}
                  height={40}
                  width={40}
                  alt={post.author.fields.name}
                />
              </Col>

              <Col>
                <Text color='secondary' size={14}>
                  @{post.author.fields.name}
                </Text>
                <Text h3 color='black'>
                  {post.title}
                </Text>
              </Col>
            </Row>
          </Col>

          <Col>
            <Row justify='flex-end'>
              <Button flat auto rounded color='secondary' onClick={goToPost}>
                <Text
                  css={{ color: 'inherit' }}
                  size={12}
                  weight='bold'
                  transform='uppercase'
                >
                  Leer
                </Text>
              </Button>
            </Row>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
};
