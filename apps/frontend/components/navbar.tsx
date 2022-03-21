import React, { FC } from 'react';
import { HStack, Text, Button } from '@chakra-ui/react';
import Link from 'next/link';

const Navbar: FC = () => {
  return (
    <header className="py-2 px-10 w-full">
      <HStack w="full" justifyContent="space-between">
        <Text color="teal.600" fontSize={22} fontWeight="bold">
          Doodllr
        </Text>
        <HStack as="nav" ml="auto" width="fit-content">
          <Link href="/login" passHref={true}>
            <Button
              colorScheme="gray"
              _focus={{
                outline: 'none',
              }}
            >
              Login
            </Button>
          </Link>
          <Link href="/signup" passHref={true}>
            <Button
              colorScheme="teal"
              _focus={{
                outline: 'none',
              }}
            >
              Signup
            </Button>
          </Link>
        </HStack>
      </HStack>
    </header>
  );
};

export default Navbar;
