import type { NextPage } from 'next';

import Layout from '@/components/layouts';
import { Text } from '@/components/ui';

const Blog: NextPage = () => {
  return (
    <Layout>
      <Text as='h1' fontSize={30} fontWeight='bold' darkColor='glow.10'>
        Coming Soon...!
      </Text>
    </Layout>
  );
};

export default Blog;
