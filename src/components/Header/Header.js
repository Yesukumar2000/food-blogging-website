import React from 'react'; 
import { Flex, Box, Image, Heading,Text, Button } from '@chakra-ui/react';
import pizza from "../../assets/pizza1.jpg";  
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <>
    <Flex
      justifyContent="space-between"
      bg="red.500"
      color="white"
      mb={{base:'20px', md:'150px'}}
      flexDirection={{ base: "column-reverse", md: "row" }}  
    >
      <Box
        w={{ base: "100%", md: "50%" }}
        p={8}
        display="flex"
        flexDirection="column"
        justifyContent={{ base: "center", md: "left" }}
        alignItems={{ base: "center", md: "flex-start" }}
        bg="white"
        textAlign={{ base: "center", md: "left" }}
        pl={{  md: 20 }}
      >
        <Image
          src={logo}
          alt="Food Truck"
          w={110}
          mb={10}
          display={{ base: "none", md: "block" }}
        />
        <Heading as="h1" size="4xl" color="#0E2368" mb={4}>
          Discover the
          <br />
          <Text as="span" color="red.500" mr="25px">
            Best
          </Text>
          Food <br /> and Drinks
        </Heading>
        <Text fontSize="lg" w={{ base: "100%", md: "380px" }} color="#444957" mb={10}>
          Naturally made Healthcare Products for the better care & support of your body.
        </Text>
        <Button colorScheme="red" variant="solid" borderRadius="50px">
          Explore Now!
        </Button>
      </Box>
       <Box
        w={{ base: "100%", md: "50%" }}
        h="100%"
        position="relative"
        overflow="hidden"
      >
        <Image
          src={pizza}
          alt="Pizza"
          objectFit="cover"
          w="100%"
          h="100%"
        />
        <Button
          position="absolute"
          top={5}
          right={4}
          color={'white'}
          variant="outline"
          borderRadius="50px"
          _hover={{colorScheme:"red"}}
        >
          Get In Touch
        </Button>
      </Box>
    </Flex>
    </>
  );
};

export default Header;
