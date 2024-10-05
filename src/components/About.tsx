import { Box, Text, Container, SimpleGrid, Image } from "@chakra-ui/react";

import Aboutimage from "../assets/about.jpg";

const About = () => {
  return (
    <Box
      marginBottom={{ base: 5, sm: 10, md: "45px" }}
      pt={20}
      id="about"
      zIndex="100"
    >
      <Container maxW="1200px">
        <SimpleGrid
          columns={{ sm: 1, md: 1, lg: 2 }}
          py={10}
          spacing={{ base: 10, sm: 10, md: 50 }}
        >
          <Box>
            <Text
              fontSize={{ base: "12px", sm: "sm", md: "md", lg: "md" }}
              className="reach-us"
              mb={3}
              fontWeight="800"
              color="themeRed"
            >
              WHO WE ARE
            </Text>
            <Text
              fontSize={{ base: "xl", sm: "xl", md: "xl", lg: "3xl" }}
              className="reach-us"
              mb={3}
              fontWeight="800"
            >
              Your partner in growth
            </Text>
            <Text
              fontSize={{ base: "14px", sm: "14px", md: "15px", lg: "17px" }}
              lineHeight={8}
              color="gray.600"
            >
              RS Polymer Canada Inc. was first founded in 2019, is one of the
              premier Masterbatch Manufacturers & Exporters for all plastic
              industries and specializes in Masterbatches for Non-Woven Fabric.
              Our products have the properties of bright appearance, good
              dispersion, strong tension, and environmental protection. They are
              widely used in the fiber and plastic industry, such as in film,
              sheets, molding injection, extrusion, etc. From a humble beginning
              with a capacity of just 200 MT/month, today the company has grown
              to produce 24,000 MT per annum.
            </Text>
            <Text
              fontSize={{ base: "14px", sm: "14px", md: "15px", lg: "17px" }}
              lineHeight={8}
              color="gray.600"
              mt={5}
            >
              We also have a manufacturing plant in India, established in 2007
              in Bhiwadi, Rajasthan, located in the northern part of the
              country.
            </Text>
          </Box>
          <Box display="flex" justifyContent="flex-end">
            <Image src={Aboutimage} objectFit="cover" height="450px" />
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default About;
