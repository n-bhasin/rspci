import {
  Box,
  Heading,
  SimpleGrid,
  Text,
  Stack,
  Icon,
  Container,
} from "@chakra-ui/react";
import { whyChooseUseData } from "../data";

const WhyChooseUs = () => {
  return (
    <Box
      marginBottom={{ base: 5, sm: 10, md: "45px" }}
      bgColor="#EFF1EE"
      pt={20}
      id="whychooseus"
    >
      <Container maxW="1200px">
        <Text
          fontSize={{ base: "12px", sm: "sm", md: "md", lg: "md" }}
          className="reach-us"
          mb={3}
          fontWeight="800"
          color="themeRed"
          textTransform="capitalize"
        >
          Why R.S Polymer Canada
        </Text>
        <Text
          fontSize={{ base: "xl", sm: "xl", md: "xl", lg: "3xl" }}
          className="reach-us"
          mb={3}
          fontWeight="800"
        >
          Experience the Difference
        </Text>

        <SimpleGrid columns={[1, 2, 3]} spacing={8} py={10}>
          {whyChooseUseData.map((reason, index) => (
            <Box key={index} p={6} bg="white" shadow="md" borderRadius="lg">
              <Stack direction="row" align="center">
                <Icon as={reason.icon} boxSize={6} color="teal.500" />
                <Heading as="h3" size="md" ml={3}>
                  {reason.title}
                </Heading>
              </Stack>
              <Text mt={3} color="gray.600">
                {reason.description}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default WhyChooseUs;
