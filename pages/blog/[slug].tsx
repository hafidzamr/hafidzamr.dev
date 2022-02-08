/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { Box, Text, useColorModeValue } from '@chakra-ui/react';
import { parseISO, format } from 'date-fns';

import Layout from '@/Layouts';
import MDXComponent from '@/components/Markdown/';
import { allBlogs } from '.contentlayer/data';
import { Blog as BlogTypes } from '.contentlayer/types';

interface BlogProps {
  blog: BlogTypes;
}

const Blog: React.FC<BlogProps> = ({ blog }) => {
  const MDX = useMDXComponent(blog.body.code);
  return (
    <Layout>
      <Box>
        <Text as='h1' fontWeight='bold' color={useColorModeValue('gray.900', 'glow.20')} fontSize={['1.5em', '2em']}>
          {blog.title}
        </Text>

        <Box display='flex' alignItems='center'>
          <Text as='p' fontSize={['xs', 'sm']}>
            {format(parseISO(blog.createdAt), 'MMMM dd, yyyy')}
          </Text>
          <Text marginInline={2}>-</Text>
          <Text as='p' fontSize={['xs', 'sm']}>
            {blog.readingTime.text}
          </Text>
        </Box>
      </Box>
      <Box marginY={['10', '16']}>
        {MDX ? (
          <MDX components={MDXComponent} />
        ) : (
          <Text as='h3' fontSize={['xl', '5xl']}>
            Content Not Found ...
          </Text>
        )}
      </Box>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = allBlogs.map((blog) => ({
    params: {
      slug: blog.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as { slug: string };
  const blog = allBlogs.find((post) => post.slug === slug);

  return {
    props: {
      blog,
    },
  };
};

export default Blog;
