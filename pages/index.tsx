import type { NextPage } from 'next';
import NextLink from 'next/link';
import NextImage from 'next/image';
import { Box, Link, UnorderedList, ListItem, Flex, useColorModeValue } from '@chakra-ui/react';
import { ArrowRightIcon } from '@chakra-ui/icons';
import { parseISO, format } from 'date-fns';

/* Local Components */
import Layout from '@/Layouts';
import { Text } from '@/components/UI';
import { allBlogs, Blog as BlogProps } from 'contentlayer/generated';

const Home: NextPage = (): JSX.Element => {
  const dateColor = useColorModeValue('gray.900', 'gray.500');
  return (
    <Layout>
      <Box marginY={20}>
        <Text data-testid='textGreeting' cursor='default' as='h1' fontSize={[20, 25]} fontWeight='bold' darkColor='glow.10'>
          Hi there,
        </Text>
        <Text data-testid='textIntro' cursor='default' as='h2' fontSize={[20, 25]} fontWeight='bold' darkColor='glow.20'>
          I'm Hafidz, Software Engineer - Frontend
        </Text>

        <Box marginTop={50}>
          <Text data-testid='textDescribe' fontSize={15} marginBottom={3}>
            Im Software Engineer - Frontend 🚀 from Indonesia. Always learning something new!
          </Text>
          <Text data-testid='textTechStacks' fontSize={15}>
            Stacks I have worked with:{' '}
            <Link
              href='https://create-react-app.dev/'
              textDecoration='underline'
              _dark={{ color: 'blue.100' }}
              _light={{ color: 'blue.500' }}
              target='_blank'
              rel='noopener noreferrer'
            >
              React
            </Link>
            {', '}
            <Link
              href='https://nextjs.org/'
              textDecoration='underline'
              _dark={{ color: 'gray.400' }}
              _light={{ color: 'gray.600' }}
              target='_blank'
              rel='noopener noreferrer'
            >
              Next JS
            </Link>
            {', '}
            <Link
              href='https://nuxtjs.org/'
              textDecoration='underline'
              _dark={{ color: 'glow.10' }}
              _light={{ color: 'green.500' }}
              target='_blank'
              rel='noopener noreferrer'
            >
              Nuxt JS
            </Link>
          </Text>
        </Box>

        <Box marginTop={50}>
          <Text cursor='default' marginBottom={3}>
            ✨ Quick Facts
          </Text>

          <UnorderedList marginLeft={6}>
            <ListItem fontSize={15}>
              🌱 I’m currently learning{' '}
              <Link
                href='https://create-react-app.dev/'
                textDecoration='underline'
                _dark={{ color: 'blue.100' }}
                _light={{ color: 'blue.500' }}
                target='_blank'
                rel='noopener noreferrer'
              >
                React
              </Link>
              {', '}
              <Link
                href='https://www.typescriptlang.org/'
                textDecoration='underline'
                color='blue.500'
                target='_blank'
                rel='noopener noreferrer'
              >
                TypeScript
              </Link>
            </ListItem>
            <ListItem fontSize={15}>🎿 Hobbies other than coding : Playing Games</ListItem>
            <ListItem fontSize={15}>
              📫 How to reach me: <Link href='mailto:hafidzdev@gmail.com'>hafidzdev@gmail.com</Link>
            </ListItem>
          </UnorderedList>
        </Box>

        <Box marginTop={50}>
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
                <NextLink href={`/blog/${blog.slug}`} passHref>
                  <Link _hover={{ textDecoration: 'none' }} cursor='pointer'>
                    <Text as='h4' marginBottom={1} marginTop={5}>
                      {blog.icon && <NextImage src={blog.icon} width={15} height={15} alt='img-icon' />} {blog.title}
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
        </Box>

        <Box marginTop={50}>
          <Text marginBottom={3}>👣 Next Steps</Text>
          <Text marginBottom={3} as='em' fontSize={15}>
            Since you don't want to leave my profile just yet! Here are some things you can do connect with me:
          </Text>{' '}
          <Link
            href='https://www.instagram.com/xhttp.req/'
            fontSize={15}
            textDecoration='underline'
            color='pink.400'
            target='_blank'
            rel='noopener noreferrer'
          >
            Instagram
          </Link>
          {', '}
          <Link
            href='https://www.linkedin.com/in/hafidzamr/'
            fontSize={15}
            textDecoration='underline'
            _dark={{ color: 'blue.400' }}
            _light={{ color: 'blue.600' }}
            target='_blank'
            rel='noopener noreferrer'
          >
            Linkedin
          </Link>
          {' or '}
          <Link
            href='https://github.com/hafidzamr'
            fontSize={15}
            textDecoration='underline'
            _dark={{ color: 'gray.400' }}
            target='_blank'
            rel='noopener noreferrer'
          >
            Github
          </Link>
        </Box>
      </Box>
    </Layout>
  );
};

export default Home;
