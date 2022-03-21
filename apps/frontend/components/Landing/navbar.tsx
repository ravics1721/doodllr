import React, { FC } from 'react';
import { HStack, Text, Button, Spacer } from '@chakra-ui/react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../assets/Logo.svg';

const Navbar: FC = () => {
  return (
    <header className="py-2 px-10 w-full bg-slate-50">
      <HStack w="full" justifyContent="space-between">
        <HStack>
          <Image src={Logo} alt="logo" width="40px" height="40px" />
          <Text color="teal.800" fontSize="3xl" fontWeight="bold">
            Doodllr
          </Text>
          <Spacer width="10" />
          <Link href="/" passHref={true}>
            <Text
              fontSize="xl"
              fontWeight="medium"
              marginLeft="10"
              _hover={{
                textDecoration: 'underline',
              }}
            >
              Features
            </Text>
          </Link>
          <Spacer width="10" />
          <Link href="/" passHref={true}>
            <Text
              fontSize="xl"
              fontWeight="medium"
              _hover={{
                textDecoration: 'underline',
              }}
            >
              About
            </Text>
          </Link>
        </HStack>

        <HStack as="nav" ml="auto" width="fit-content">
          <Link href="/login" passHref={true}>
            <Button
              colorScheme="teal"
              size="lg"
              _focus={{
                outline: 'none',
              }}
            >
              Login
            </Button>
          </Link>
        </HStack>
      </HStack>
    </header>
  );
};

export default Navbar;
