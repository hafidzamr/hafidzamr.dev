/* eslint-disable import/no-extraneous-dependencies */
import NextLink from 'next/link';
import NextImage from 'next/image';
import React from 'react';
import { Box, Flex, Text, Link, useColorModeValue } from '@chakra-ui/react';
import { ArrowRightIcon } from '@chakra-ui/icons';
import { parseISO, format } from 'date-fns';

import { allBlogs } from '.contentlayer/data';
import { Blog as BlogProps } from '.contentlayer/types';

const LatestBlogPost = (): JSX.Element => {
  const dateColor = useColorModeValue('gray.900', 'gray.500');
  return (
    <>
      <Flex justifyContent='space-between'>
        <Text as='h3' fontSize='md'>
          Latest Blog Post
        </Text>
        <Flex alignItems='center'>
          <NextLink href='/blog' passHref>
            <Link>
              <Text as='h3' fontSize='md' display='inline-block'>
                All Blog Post
              </Text>
              <ArrowRightIcon w={3} h={3} marginLeft={2} />
            </Link>
          </NextLink>
        </Flex>
      </Flex>

      {allBlogs.slice(0, 3).map((blog: BlogProps) => (
        <Box key={blog._id} marginY={5}>
          <NextLink href={`/blog/${blog.slug}`}>
            <Link _hover={{ textDecoration: 'none' }} cursor='pointer'>
              <Text as='h4' marginBottom={1} marginTop={5}>
                {blog.icon && <NextImage src={blog.icon} width={15} height={15} />} {blog.title}
              </Text>

              <Text as='p' fontSize='sm' textOverflow='ellipsis' overflow='hidden' whiteSpace='nowrap'>
                {blog.summary}
              </Text>
            </Link>
          </NextLink>
          <Text as='p' color={dateColor} fontSize='sm' marginTop={1}>
            {format(parseISO(blog.createdAt), 'MMMM dd, yyyy')}
          </Text>
        </Box>
      ))}
    </>
  );
};

export default LatestBlogPost;
