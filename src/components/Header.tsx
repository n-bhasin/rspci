import { Box, Button, Heading, Image, Text } from "@chakra-ui/react";

import Dashboardimage from "../assets/header.jpg";
import { useEffect, useState } from "react";
import CustomLink from "./CustomLink";

const Header = () => {
  const [offsetY, setOffsetY] = useState<number>(0);

  const handleScroll = (): void => {
    setOffsetY(window.pageYOffset);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Clean up event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <Box position="relative" height="100vh" overflow="hidden">
      <Image
        src={Dashboardimage}
        // objectPosition="top"
        objectFit="cover"
        width="100%"
        height="100%"
        transform={`translateY(${offsetY * 0.5}px)`} // Parallax effect
        zIndex="-1"
      />
      {/* Light Black Overlay */}
      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        backgroundColor="rgba(0, 0, 0, 0.7)" // Light black overlay
        zIndex="0"
      />

      {/* Header Content */}
      <Box
        position="absolute"
        top="50%"
        left="40%"
        transform="translate(-50%, -50%)"
        zIndex="1"
        textAlign="left"
        color="white"
      >
        <Heading
          fontWeight={600}
          noOfLines={3}
          fontSize={{
            base: "22px !important",
            sm: "28px !important",
            md: "30px !important",
            lg: "35px !important",
            xl: "46px !important",
          }}
        >
          Empowering Growth
          <br />
          <span style={{ fontWeight: "600" }}>
            Through Precision and Quality
          </span>
        </Heading>

        <Text
          fontSize={{ base: "sm", xl: "xl" }}
          marginTop={5}
          color="gray.300"
        >
          RS Polymer is one of the premier Masterbatch Manufacturer & Exporter
          for all Plastic industries and specialist in Masterbatches for Non
          Woven Fabric.
        </Text>
        <Button mt="20px" size="lg" variant="custom">
          <CustomLink
            label="Get in touch"
            to="contact"
            offset={10}
            isExternalLink={false}
          />
        </Button>
      </Box>
    </Box>
  );
};

export default Header;
