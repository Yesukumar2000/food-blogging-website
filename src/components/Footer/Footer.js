import React from 'react';
import {
  Flex,
  Box,
  Heading,
  Text,
  Link,
  Image,
  HStack,
  VStack,
} from '@chakra-ui/react';
import logo from '../../assets/logo.png'; 
import InstaIcon from '../../assets/InstaIcon.png'; 
import XIcon from '../../assets/XIcon.png'; 
import FBIcon from '../../assets/FBIcon.png'; 

const Footer = () => {
  return (
    <Box bg="#f8f8f8" py={10} px={5}>
      <Flex
        maxW="1200px"
        mx="auto"
        justifyContent={{ base: 'center', md: 'space-between' }}
        flexDirection={{ base: 'column', md: 'row' }}
        alignItems="flex-start"
        px={5}
        py={10}
        bg="#f8f8f8"
      >
        <VStack align="center" justifyContent="center" spacing={{ base: 8, md: 3 }}>
          <Image
            src={logo}
            alt="Food Truck"
            maxW="180px"
            margin="50px"
          />
        </VStack>

        <VStack align="flex-start" spacing={{ base: 8, md: 3 }} width={{ base: "100%", md: "auto" }} py={4}>
          <Heading as="h3" size="lg" fontSize="xl" color="blue.900" textAlign={{ base: 'center', md: 'left' }} >
            Contact Us
          </Heading>
          <Text color="gray.600" textAlign={{ base: 'center', md: 'left' }}>Lorem Ipsum Pvt Ltd.</Text>
          <Text color="gray.600" textAlign={{ base: 'center', md: 'left' }}>5/1, Magalton Road</Text>
          <Text color="gray.600" textAlign={{ base: 'center', md: 'left' }}>Phartosh Gate near YTM Market</Text>
          <Text color="gray.600" textAlign={{ base: 'center', md: 'left' }}>XYZ-343434</Text>
          <Link href="mailto:example2020@gmail.com" color="blue.500" textAlign={{ base: 'center', md: 'left' }}>
            example2020@gmail.com
          </Link>
          <Text color="gray.600" textAlign={{ base: 'center', md: 'left' }}>(904) 443-0343</Text>
        </VStack>

        <VStack align="flex-start" spacing={{ base: 8, md: 3 }} width={{ base: "100%", md: "auto" }}py={4}>
          <Heading as="h3" size="lg" fontSize="xl" color="blue.900" textAlign={{ base: 'center', md: 'left' }} >
            More
          </Heading>
          <Link href="/about-us" color="gray.600" textAlign={{ base: 'center', md: 'left' }}>About Us</Link>
          <Link href="/products" color="gray.600" textAlign={{ base: 'center', md: 'left' }}>Products</Link>
          <Link href="/career" color="gray.600" textAlign={{ base: 'center', md: 'left' }}>Career</Link>
          <Link href="/contact-us" color="gray.600" textAlign={{ base: 'center', md: 'left' }}>Contact Us</Link>
        </VStack>

        <VStack align="flex-start"  spacing={{ base: 8, md: 3 }} w={{base:'100%', md:"auto"}}  py={4}>
          <Heading as="h3" size="lg" fontSize='xl' color="blue.900"  display={{ base: 'none', md: 'block' }}>
            Social Links
          </Heading>
          <HStack spacing={6} justifyContent={{base:'center',  md:"left"}}  w={{base:'100%', md:"auto"}}>
            <Link href="https://www.instagram.com/your_instagram_handle">
              <Image
                src={InstaIcon}
                alt="Instagram"
                boxSize="20px"
              />
            </Link>
            <Link href="https://twitter.com/your_twitter_handle">
              <Image
                src={XIcon}
                alt="Twitter"
                boxSize="60px"
              />
            </Link>
            <Link href="https://www.facebook.com/your_facebook_handle">
              <Image
                src={FBIcon}
                alt="Facebook"
                boxSize="20px"
              />
            </Link>
          </HStack>
      <Text textAlign="left" mt={20} mr={15} color="gray.500"  display={{ base: 'none', md: 'block' }}>
        © 2022 Food Truck Example
      </Text>
        </VStack>

          <Text
            textAlign="center"
            mt={4}
            color="gray.500"
            display={{ base: 'block', md: 'none' }}  
            w={{base:'100%', md:"auto"}}
          >
            © 2022 Food Truck Example
          </Text>
      </Flex>
    </Box>
  );
};

export default Footer;
