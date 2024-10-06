import React, { useState } from 'react';
import {
  Box,
  Flex,
  Image,
  Heading,
  Text,
  Button,
  HStack,
  VStack,
  useBreakpointValue,
} from '@chakra-ui/react';
import GrilledTomatos from "../../assets/GrilledTomatos.png";
import snacks from "../../assets/snacks.png";
import postWorkout from "../../assets/postWorkout.png";
import GrillCorn from "../../assets/GrillCorn.png";
import Crunchwrap from "../../assets/Crunchwrap.png";
import Soup from "../../assets/Soup.png";

const articlesData = [
  {
    title: 'Grilled Tomatoes at Home',
    image: GrilledTomatos,
    description: `PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...`,
  },
  {
    title: 'Snacks for Travel',
    image: snacks,
    description: `PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...`,
  },
  {
    title: 'Post-workout Recipes',
    image: postWorkout,
    description: `PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...`,
  },
  {
    title: 'How To Grill Corn',
    image: GrillCorn,
    description: `PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...`,
  },
  {
    title: 'Crunchwrap Supreme',
    image: Crunchwrap,
    description: `PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...`,
  },
  {
    title: 'Broccoli Cheese Soup',
    image: Soup,
    description: `PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...`,
  },
];

const Articles = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const articlesPerPage = useBreakpointValue({ base: 1, md: 2, lg: 3 });
  const showPageNumbers = useBreakpointValue({ base: false, md: true });
  const totalPages = Math.ceil(articlesData.length / articlesPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const startIndex = currentPage * articlesPerPage;
  const endIndex = startIndex + articlesPerPage;
  const visibleArticles = articlesData.slice(startIndex, endIndex);

  return (
    <Box maxW="container.xl" mx="auto" p={10}>
      <Heading as="h6" textAlign="left" color="#0E2368">Latest Articles</Heading>
      <Flex 
        flexWrap="wrap" 
        textAlign="left"
        px={{ base: 2, md: 10 }}
        py={{ base: 4, md: 10 }} 
      >
        {visibleArticles.map((article, index) => (
          <Box key={index} m={4} w={{ base: '100%', md: '45%', lg: '30%', sm:"100%" }} spacing={2} border="1px solid" borderColor="#93A2D361" padding="5" borderRadius="10px">
            <Image src={article.image} alt={article.title} borderRadius="15px" />
            <VStack spacing={3} textAlign="left" alignItems="flex-start" mt="20px">
              <Heading as="h3" size="md" color="#0E2368">{article.title}</Heading>
              <Text color="#444957">{article.description}</Text>
              <Button color="#424961" variant="outline" borderRadius="20px">Read More</Button>
            </VStack>
          </Box>
        ))}
      </Flex>

      <HStack justifyContent="center" mt={4} spacing={4}>
        <Button
            variant="ghost"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 0}
        >
            {'<'}
        </Button>
        {showPageNumbers &&
            Array.from({ length: totalPages }).map((_, index) => (
            <Button
                key={index}
                variant="ghost"
                onClick={() => handlePageChange(index)}
                colorScheme={currentPage === index ? 'blue' : 'gray'}
            >
                {index + 1}
            </Button>
            ))}
        <Button
            variant="ghost"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages - 1}
        >
            {'>'}
        </Button>
       </HStack>
    </Box>
  );
};

export default Articles;
