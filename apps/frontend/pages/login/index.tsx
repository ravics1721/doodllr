import React from 'react';
import { Box, Button, Center, Text, VStack } from '@chakra-ui/react';
import Link from 'next/link';

const Login = () => {
  return (
    <div className="w-full">
      <Center>
        <Box shadow="base" px="10" py="10" rounded="xl" minW="sm" mt="20">
          <VStack>
            <Text fontSize={26} mt="0" fontWeight="bold" color="teal.600" as="h1">
              Login
            </Text>
            <Link href="http://localhost:3333/api/auth" passHref>
              <Button variant="outline" colorScheme="red">
                Login With Google
              </Button>
            </Link>
            <Button variant="outline" colorScheme="teal">
              Login With Github
            </Button>
            <Button variant="outline" colorScheme="twitter">
              Login With Twitter
            </Button>
          </VStack>
        </Box>
      </Center>
    </div>
  );
};

export default Login;
