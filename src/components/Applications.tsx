import {
  Image,
  SimpleGrid,
  Box,
  Container,
  Heading,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ISOCertificate from "../assets/applications2.jpg";
import { FaCheckCircle } from "react-icons/fa";
import { applicationAdvantanges, applicationTechnologies } from "../data";

const Applications = () => {
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
                  Advantages of using RSPI filler masterbatches
                </Text>
                <List spacing={3}>
                  {applicationAdvantanges.map((advantage, index) => (
                    <ListItem
                      key={index}
                      color="gray.600"
                      fontSize={{
                        base: "14px",
                        sm: "14px",
                        md: "15px",
                        lg: "17px",
                      }}
                    >
                      <ListIcon as={FaCheckCircle} color="themeRed" />
                      {advantage}
                    </ListItem>
                  ))}
                </List>
              </Box>

              {/* Applications Section */}
              <Box>
                <Heading as="h2" size="lg" mb={4}></Heading>
                <Text
                  fontSize={{ base: "12px", sm: "sm", md: "md", lg: "md" }}
                  className="reach-us"
                  mb={3}
                  fontWeight="800"
                  color="themeRed"
                >
                  {" "}
                  Technology
                </Text>
                <List spacing={3}>
                  {applicationTechnologies.map((application, index) => (
                    <ListItem
                      key={index}
                      color="gray.600"
                      fontSize={{
                        base: "14px",
                        sm: "14px",
                        md: "15px",
                        lg: "17px",
                      }}
                    >
                      <ListIcon as={FaCheckCircle} color="themeRed" />
                      {application}
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Stack>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Applications;
