import type { NextPage } from 'next';
import { Box } from '@chakra-ui/react';
import Layout from '@/components/layouts';
import { Text } from '@/components/ui';

const Home: NextPage = () => (
  <Layout>
    <Text data-testid='textGreeting' cursor='default' as='h1' fontSize={[20, 25]} fontWeight='bold' darkColor='glow.10'>
      Hi there 👋,
    </Text>
    <Text data-testid='textIntro' cursor='default' as='h2' fontSize={[20, 25]} fontWeight='bold' darkColor='glow.20'>
      I'm Hafidz, software engineer - frontend
    </Text>

    <Box marginTop={50}>
      <Text data-testid='textDescribe' cursor='default' marginBottom={3}>
        Im Software Engineer - Frontend 🚀 from Indonesia. Always working on some project or learning something new!
      </Text>
      <Text data-testid='textTechStacks' cursor='default'>
        Stacks I have worked with : React, Vue(NuxtJS)
      </Text>
    </Box>
  </Layout>
);

export default Home;
