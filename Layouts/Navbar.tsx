import React from 'react';
import NextLink from 'next/link';
import { Flex, Stack, useColorMode, Link } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Button } from '@/components/UI';

const Navbar: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex height={16} alignItems='center' justifyContent='space-between'>
      <NextLink href='/' passHref>
        <Link cursor='default'>@hafidzamr_</Link>
      </NextLink>

      <Flex alignItems='center'>
        <Stack direction='row' spacing={7} alignItems='center'>
          <NextLink href='/blog' passHref>
            <Link cursor='default'>Blog</Link>
          </NextLink>
          <Button name='btnMode' aria-label='Change Mode' cursor='default' onClick={toggleColorMode}>
            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          </Button>
        </Stack>
      </Flex>
    </Flex>
  );
};

export default Navbar;
