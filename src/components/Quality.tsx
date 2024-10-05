import {
  Image,
  SimpleGrid,
  Box,
  Text,
  Container,
  Stack,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ISOCertificate from "../assets/iso-certificate.jpg";
import { qualityDescription, qualityTechnology } from "../data";

const Quality = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to the top of the page when the pathname changes
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <Box>
      <Container maxW="1200px" marginTop={32}>
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 2 }}
          py={10}
          spacing={{ base: 10, sm: 10, md: 5 }}
        >
          <Image
            src={ISOCertificate} // Replace with your image URL
            alt="ISO Image"
            borderRadius="lg"
            boxShadow="md"
            objectFit="cover"
            height="100%"
            width="500px"
          />
          <Box>
            <Stack spacing={8}>
              {/* Advantages Section */}
              <Box>
                <Text
                  fontSize={{ base: "12px", sm: "sm", md: "md", lg: "md" }}
                  className="reach-us"
                  mb={3}
                  fontWeight="800"
                  color="themeRed"
                >
                  Quality
                </Text>
                <Text
                  fontSize={{
                    base: "14px",
                    sm: "14px",
                    md: "15px",
                    lg: "17px",
                  }}
                  lineHeight={8}
                  color="gray.600"
                >
                  {qualityDescription}
                </Text>
              </Box>

              {/* Applications Section */}
              <Box>
                <Text
                  fontSize={{ base: "12px", sm: "sm", md: "md", lg: "md" }}
                  className="reach-us"
                  mb={3}
                  fontWeight="800"
                  color="themeRed"
                >
                  Technology
                </Text>
                <Text
                  fontSize={{
                    base: "14px",
                    sm: "14px",
                    md: "15px",
                    lg: "17px",
                  }}
                  lineHeight={8}
                  color="gray.600"
                >
                  {qualityTechnology}
                </Text>
              </Box>
            </Stack>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Quality;
