import { Box, HStack, Image, Text, IconButton, Flex } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useState } from "react";
import CustomLink from "./CustomLink";
import Logo from "../assets/logo.png";
const Navbar = () => {
  const [display, changeDisplay] = useState("none");
  return (
    <>
      <HStack
        justifyContent="space-between"
        paddingX={{ base: 5, sm: 10, md: "15px", lg: 20 }}
        paddingY="10px"
        position="fixed" // Make the navbar fixed
        top="0" // Position it at the top
        width="100%" // Ensure it spans the full width of the screen
        backgroundColor="white" // Set background to avoid transparency
        zIndex={display === "none" ? "1000" : "0"} // Ensure it's above other elements
        boxShadow="md" // Add a shadow for better visibility
      >
        <Image src={Logo} className="navbarlogo" />
        <Box display={{ base: "none", md: "flex" }}>
          <HStack spacing={10}>
            <Text fontSize="18px" fontWeight="300" className="navlinks">
              <CustomLink label="About" to="about" isExternalLink={false} />
            </Text>
            <Text fontSize="18px" fontWeight="300" className="navlinks">
              <CustomLink
                label="Products"
                to="products"
                offset={30}
                isExternalLink={false}
              />
            </Text>
            <Text fontSize="18px" fontWeight="300" className="navlinks">
              <CustomLink
                label="Quality"
                to="quality"
                offset={10}
                isExternalLink={true}
              />
            </Text>
            <Text fontSize="18px" fontWeight="300" className="navlinks">
              <CustomLink
                label="Applications"
                to="applications"
                offset={10}
                isExternalLink={true}
              />
            </Text>
            <Text fontSize="18px" fontWeight="300" className="navlinks">
              <CustomLink
                label="Contact"
                to="contact"
                offset={10}
                isExternalLink={false}
              />
            </Text>
          </HStack>
        </Box>
        <Box display={{ base: "block", md: "none" }}>
          <IconButton
            background="transparent"
            aria-label="Open Menu"
            size="xl"
            onClick={() => changeDisplay("flex")}
            icon={<HamburgerIcon color="black" />}
          />
        </Box>
      </HStack>
      <Flex
        w="100vw"
        bgColor="gray.100"
        h="100vh"
        zIndex={20}
        pos="fixed"
        left="0"
        top="0"
        overflowY="auto"
        flexDir="column"
        align="center"
        display={display}
      >
        <Flex justify="flex-end" width="100%">
          <IconButton
            backgroundColor="transparent"
            aria-label="Close Menu"
            size="lg"
            icon={<CloseIcon color="black" />}
            mb={2}
            onClick={() => changeDisplay("none")}
          />
        </Flex>

        <Flex flexDir="column" align="center" m={5}>
          <Text fontSize="18px" fontWeight="300" className="navlinks">
            <CustomLink
              label="About"
              to="about"
              isExternalLink={false}
              onClick={() => changeDisplay("none")}
            />
          </Text>
          <Text fontSize="18px" fontWeight="300" py={5} className="navlinks">
            <CustomLink
              label="Products"
              to="products"
              offset={30}
              isExternalLink={false}
              onClick={() => changeDisplay("none")}
            />
          </Text>
          <Text fontSize="18px" fontWeight="300" className="navlinks">
            <CustomLink
              label="Quality"
              to="quality"
              offset={30}
              isExternalLink={true}
              onClick={() => changeDisplay("none")}
            />
          </Text>
          <Text fontSize="18px" fontWeight="300" py={5} className="navlinks">
            <CustomLink
              label="Applications"
              to="applications"
              offset={30}
              isExternalLink={true}
              onClick={() => changeDisplay("none")}
            />
          </Text>
          <Text fontSize="18px" fontWeight="300" py={5} className="navlinks">
            <CustomLink
              label="Contact"
              to="contact"
              offset={-10}
              isExternalLink={false}
              onClick={() => changeDisplay("none")}
            />
          </Text>
        </Flex>
      </Flex>
    </>
  );
};

export default Navbar;
