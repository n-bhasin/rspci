import { Image, SimpleGrid, Box, Text, Container } from "@chakra-ui/react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ProductDetails = () => {
  const location = useLocation();
  const product = location.state;

  useEffect(() => {
    // Scroll to the top of the page when the pathname changes
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <Container maxW="1200px" marginTop={32}>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 2 }}
        py={10}
        spacing={{ base: 10, sm: 10, md: 5 }}
      >
        <Image src={product.img} />
        <Box>
          <Text
            fontSize={{ base: "12px", sm: "sm", md: "md", lg: "md" }}
            className="reach-us"
            mb={3}
            fontWeight="800"
            color="themeRed"
          >
            {product.label}
          </Text>
          <Text
            fontSize={{ base: "14px", sm: "14px", md: "15px", lg: "17px" }}
            lineHeight={8}
            color="gray.600"
          >
            {product.description}
          </Text>
        </Box>
      </SimpleGrid>
    </Container>
  );
};

export default ProductDetails;
