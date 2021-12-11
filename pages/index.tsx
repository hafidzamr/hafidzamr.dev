import type { NextPage } from 'next';
import { Box, Link, UnorderedList, ListItem } from '@chakra-ui/react';
import Layout from '@/components/layouts';
import { Text } from '@/components/ui';

const Home: NextPage = () => (
  <Layout>
    <Text data-testid='textGreeting' cursor='default' as='h1' fontSize={[20, 25]} fontWeight='bold' darkColor='glow.10'>
      Hi there,
    </Text>
    <Text data-testid='textIntro' cursor='default' as='h2' fontSize={[20, 25]} fontWeight='bold' darkColor='glow.20'>
      I'm Hafidz, Software engineer - Frontend
    </Text>

    <Box marginTop={50}>
      <Text data-testid='textDescribe' fontSize={15} marginBottom={3}>
        Im Software Engineer - Frontend 🚀 from Indonesia. Always working on some project or learning something new!
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
        ,{' '}
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
        ,{' '}
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
          ,{' '}
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
        <ListItem fontSize={15}>🎿 Hobbies other than coding : Playing games</ListItem>
        <ListItem fontSize={15}>
          📫 How to reach me: <Link href='mailto:hafidzdev@gmail.com'>hafidzdev@gmail.com</Link>
        </ListItem>
      </UnorderedList>
    </Box>

    <Box marginTop={50}>
      <Text marginBottom={3}>👣 Next Steps</Text>
      <Text marginBottom={3} as='em' fontSize={15}>
        Since you don't want to leave my profile just yet! Here are some things you can do connect with me:
      </Text>{' '}
      <Link
        href='https://www.instagram.com/hafidzamr_/'
        fontSize={15}
        textDecoration='underline'
        color='pink.400'
        target='_blank'
        rel='noopener noreferrer'
      >
        Instagram
      </Link>
      ,{' '}
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
      ,{' '}
      <Link
        href='https://github.com/hafidzamr'
        fontSize={15}
        textDecoration='underline'
        _dark={{ color: 'gray.400' }}
        target='_blank'
        rel='noopener noreferrer'
      >
        Github
      </Link>{' '}
      or{' '}
      <Link
        href='https://drive.google.com/drive/folders/1AO9uKJxLXjvu3TpuiT5-dh5qinGEMbVg?usp=sharing'
        fontSize={15}
        textDecoration='underline'
        _dark={{ color: 'glow.10' }}
        _light={{ color: 'green.500' }}
        target='_blank'
        rel='noopener noreferrer'
      >
        Resume
      </Link>
    </Box>
  </Layout>
);

export default Home;
