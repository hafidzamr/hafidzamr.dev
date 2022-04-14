import NextLink from 'next/link';
import { Box, Text, Link, useColorModeValue } from '@chakra-ui/react';
import { parseISO, format } from 'date-fns';
import { allBlogs, Blog as BlogProps } from 'contentlayer/generated';

import Layout from '@/Layouts';

const Article = (): JSX.Element => {
  const textColor = useColorModeValue('gray.900', 'glow.20');
  const dateColor = useColorModeValue('gray.900', 'gray.500');

  return (
    <Layout title='@hafidzamr - Blog' description='Kumpulan Blog Hafidz Amrulloh' keywords={['hafidzamr blog', 'hafidzdev blog']}>
      {allBlogs.map((blog: BlogProps) => (
        <Box key={blog._id} marginY={20}>
          <Text as='p' color={dateColor}>
            {format(parseISO(blog.createdAt), 'MMMM dd, yyyy')}
          </Text>
          <NextLink href={`/blog/${blog.slug}`}>
            <Link _hover={{ textDecoration: 'none' }} cursor='pointer'>
              <Text as='h3' fontWeight='bold' marginBottom={1} marginTop={5} color={textColor} fontSize='1.5em'>
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
