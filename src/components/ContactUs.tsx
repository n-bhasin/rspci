import { Container, Box, SimpleGrid, Text, Link } from "@chakra-ui/react";
import ContactForm from "./ContactForm";

const ContactUs = () => {
  return (
    <Box className="contactUs" id="contact" bgColor="#EFF1EE">
      <Container maxW="1200px">
        <SimpleGrid
          columns={{ sm: 1, md: 2 }}
          spacing={5}
          paddingY={{ base: 10, sm: 10, md: 20 }}
        >
          <Box>
            <Box>
              <Text
                fontSize={{ base: "12px", sm: "sm", md: "md", lg: "md" }}
                className="reach-us"
                mb={3}
                fontWeight="800"
                color="themeRed"
              >
                Contact Us
              </Text>
            </Box>
            <Box>
              <Text
                fontSize={{ base: "14px", sm: "lg", md: "2xl", lg: "2xl" }}
                className="reach-us"
                mb={3}
                fontWeight="800"
              >
                Corporate Office
              </Text>
              <Text fontSize={{ base: "15px", sm: "16px", md: "16px" }}>
                268, Margaret Avenue, Hamilton, L8E 2J2
              </Text>
            </Box>
            <Box mt={10}>
              <Text
                fontSize={{ base: "14px", sm: "lg", md: "2xl", lg: "2xl" }}
                className="reach-us"
                fontWeight="800"
                marginBottom={3}
              >
                Contact
              </Text>
              <Text
                marginBottom={1}
                fontSize={{ base: "15px", sm: "16px", md: "18px" }}
              >
                Naresh Samota, Director
              </Text>
              <Text
                fontSize={{ base: "15px", sm: "16px", md: "16px" }}
                color="gray.600"
              >
                <Link href="tel:+16474034600">+1-647-403-4600</Link>
                <br />
                <Link href="mailto:info@rspolymer.ca">info@rspolymer.ca</Link>
              </Text>
            </Box>
          </Box>
          <Box mt={3}>
            <ContactForm />
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default ContactUs;
