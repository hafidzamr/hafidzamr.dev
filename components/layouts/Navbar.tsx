import React from 'react';
import NextLink from 'next/link';
import { Box, Flex, useColorModeValue, Stack, useColorMode, Container, Link } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Button } from '@/components/ui';

const Navbar: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box background={useColorModeValue('white', 'dark.30')}>
      <Container maxWidth='container.lg'>
        <Flex height={16} alignItems='center' justifyContent='space-between'>
          <NextLink href='/' passHref>
            <Link cursor='default'>@hafidzamr_</Link>
          </NextLink>

          <Flex alignItems='center'>
            <Stack direction='row' spacing={7} alignItems='center'>
              <NextLink href='/articles' passHref>
                <Link cursor='default'>Articles</Link>
              </NextLink>
              <Button name='btnMode' cursor='default' onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
