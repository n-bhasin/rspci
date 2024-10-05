import {
  Box,
  Divider,
  HStack,
  Text,
  Center,
  SimpleGrid,
  Heading,
  List,
  ListItem,
  Image,
} from "@chakra-ui/react";

import { LiaCopyrightSolid } from "react-icons/lia";
import Logo from "../assets/logo.png";
import CustomLink from "./CustomLink";

const Footer = () => {
  return (
    <Box bg="black">
      <SimpleGrid
        columns={{ sm: 1, md: 3, lg: 3, xl: 3 }}
        paddingY="5"
        paddingX="10"
      >
        <Box m="5">
          <Image src={Logo} className="footerlogo" />
        </Box>
        <Box m="5">
          <Heading size="md" color="white" mb={4}>
            Menu
          </Heading>

          <List color="white" fontSize={14} spacing={2}>
            <ListItem>
              <CustomLink label="About" to="about" isExternalLink={false} />
            </ListItem>
            <ListItem>
              <CustomLink
                label="Products"
                to="products"
                isExternalLink={false}
              />
            </ListItem>
            <ListItem>
              <CustomLink label="Quality" to="quality" isExternalLink={true} />
            </ListItem>
            <ListItem>
              <CustomLink
                label="Applications"
                to="applications"
                isExternalLink={true}
              />
            </ListItem>
            <ListItem>
              <CustomLink
                label="Contact Us"
                to="contactus"
                isExternalLink={false}
              />
            </ListItem>
          </List>
        </Box>
        <Box m="5">
          <Heading size="md" color="white" mb={4}>
            Products
          </Heading>
          <List color="white" fontSize={13} spacing={2}>
            <ListItem>White Masterbatch</ListItem>
            <ListItem>Additives Masterbatch</ListItem>
            <ListItem>Black Masterbatch</ListItem>
            <ListItem>ListItem Colour Masterbatch</ListItem>
            <ListItem>Filler Masterbatch</ListItem>
          </List>
        </Box>
      </SimpleGrid>
      <Divider orientation="horizontal" />
      <Center p="5">
        <HStack>
          <LiaCopyrightSolid size={24} color="white" />
          <Text color="white" fontSize="14px" fontWeight="600">
            {" "}
            Copyright owned by RSPolymer 2024
          </Text>
        </HStack>
      </Center>
    </Box>
  );
};

export default Footer;
