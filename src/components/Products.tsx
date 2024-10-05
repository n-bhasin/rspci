import { Box, Text, Container, SimpleGrid } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import ProductRange from "./ProductRange";
import { productData } from "../data";

interface ProductType {
  label: string;
  img: string; // Assuming img is a string representing the image path
  description: string;
}
const Products = () => {
  const navigate = useNavigate();

  // Function to navigate to product details page
  const handleProductClick = (product: ProductType) => {
    navigate("/product-details", { state: product });
  };
  return (
    <Box
      marginBottom={{ base: 5, sm: 10, md: "45px" }}
      // bgColor="#EFF1EE"
      pt={20}
      id="products"
    >
      <Container maxW="1200px">
        <Box>
          <Text
            fontSize={{ base: "12px", sm: "sm", md: "md", lg: "md" }}
            className="reach-us"
            mb={3}
            fontWeight="800"
            color="themeRed"
            textTransform="capitalize"
          >
            our products
          </Text>
          <Text
            fontSize={{ base: "xl", sm: "xl", md: "xl", lg: "3xl" }}
            className="reach-us"
            mb={3}
            fontWeight="800"
          >
            Explore our products
          </Text>
        </Box>
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 3 }}
          py={10}
          spacing={{ base: 10, sm: 10, md: 5 }}
        >
          {productData.map((pt, index) => (
            <ProductRange
              key={index}
              label={pt.label}
              description={pt.description}
              image={pt.img}
              onClick={() => handleProductClick(pt)}
            />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Products;
