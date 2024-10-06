import React from "react";
import {
  Box,
  Image,
  Text,
  Button,
  Container,
  Stack,
} from "@chakra-ui/react";
import aboutImage from "../../assets/about.png";

const AboutUs = () => {
  return (
    <Stack bg="#f8f8f8">
      <Container maxW={"7xl"}>
        <Box
          display="flex"
          justifyContent={{ base: "center", md: "space-between" }} // Center content on mobile, space-between on larger screens
          alignItems="center"
          flexDirection={{ base: "column", md: "row" }} 
        >
          <Box
            flex="0.3"
            flexGrow={1}
            textAlign="center"
            px="4"
            display={{ base: "none", md: "block" }}
          >
            <Image
              src={aboutImage}
              alt="Healthcare Products"
              w="410px"
              margin="auto"
            />
          </Box>

          <Box
            flex="0.7"
            textAlign={{ base: "center", md: "left" }} 
            flexGrow={1}
            py={8}
            my={8}
          >
            <Text fontSize="4xl" fontWeight="bold" color="blue.800" mb={2}>
              About Us
            </Text>
            <Text fontSize="lg" color="gray.600">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries...
            </Text>
            <br />
            <Button
              variant="solid"
              size="lg"
              borderRadius="full"
              px={6}
              py={4}
              bg="#E23744"
              color="#fff"
              _hover={{ bg: "#E23744" }}
            >
              Read More
            </Button>
          </Box>
        </Box>
      </Container>
    </Stack>
  );
};

export default AboutUs;
