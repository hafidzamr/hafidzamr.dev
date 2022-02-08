/* eslint-disable import/no-extraneous-dependencies */

import NextLink from 'next/link';
import { Box, Text, Link, useColorModeValue } from '@chakra-ui/react';
import Layout from '@/Layouts';
import { allBlogs } from '.contentlayer/data';
import { Blog as BlogProps } from '.contentlayer/types';

const Article = (): JSX.Element => {
  const textColor = useColorModeValue('gray.900', 'glow.20');

  return (
    <Layout>
      {allBlogs.map((blog: BlogProps) => (
        <Box key={blog._id} cursor='pointer' marginY={20}>
          <NextLink href={`/blog/${blog.slug}`}>
            <Link _hover={{ textDecoration: 'none' }}>
              <Text as='h3' fontWeight='bold' marginBottom={1} color={textColor} fontSize='1.5em'>
                {blog.title}
              </Text>

              <Text as='p' fontSize={['sm', 'md']} textOverflow='ellipsis' overflow='hidden' whiteSpace='nowrap'>
                {blog.summary}
              </Text>
            </Link>
          </NextLink>
        </Box>
      ))}
    </Layout>
  );
};

export default Article;
