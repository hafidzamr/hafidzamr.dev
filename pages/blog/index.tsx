import NextLink from 'next/link';
import { Box, Text, Link } from '@chakra-ui/react';
import Layout from '@/Layouts';
import { allBlogs } from '@/.contentlayer/data';
import { Blog as BlogProps } from '@/.contentlayer/types';

const Article = () => (
  <Layout>
    {allBlogs.map((blog: BlogProps) => (
      <Box key={blog._id} cursor='pointer' marginY={20}>
        <NextLink href={`/blog/${blog.slug}`}>
          <Link _hover={{ textDecoration: 'none' }}>
            <Text as='h1' fontWeight='bold' fontSize={['xl', '2xl']}>
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

export default Article;
