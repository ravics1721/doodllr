import React from 'react';
import { SimpleGrid, Box, Text, Button } from '@chakra-ui/react';
import Image from 'next/image';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import Banner1 from '../../assets/TimeManagement-pana1.svg';

const MainSection = () => {
  return (
    <SimpleGrid columns={2} spacing={0} height="90%">
      <Box bg="white" height="100%">
        <Text fontSize="4xl" fontWeight="bold">
          Project Management & Time Tracking in bettter way
        </Text>
        <Button size="lg" colorScheme="teal">
          Get Started
        </Button>
        <Button size="lg" variant="outline" colorScheme="teal" rightIcon={<ExternalLinkIcon />}>
          Learn More{' '}
        </Button>
      </Box>
      <Box bg="white" height="100%">
        <Image src={Banner1} alt="banner" />
      </Box>
    </SimpleGrid>
  );
};

export default MainSection;
