import { Card, CardBody, Heading, Stack, Text, Image } from "@chakra-ui/react";

interface Props {
  label: string;
  description: string;
  image: string;
  onClick: () => void;
}
const ProductRange = ({ label, description, image, onClick }: Props) => {
  return (
    <Card
      maxW="sm"
      transition="0.5 ease-in-out"
      _hover={{
        transform: "translateY(-10px)", // Lifts the card on hover
        boxShadow: "xl", // Adds a shadow for effect
      }}
      cursor="pointer"
      onClick={onClick}
    >
      <CardBody>
        <Image src={image} borderRadius="lg" width="350px" height="250px" />
        <Stack mt="6" spacing="3">
          <Heading size="md">{label}</Heading>
          <Text>
            {description.slice(0, 100)}...{" "}
            <span style={{ color: "themeRed" }}>[click to learn more]</span>
          </Text>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default ProductRange;
