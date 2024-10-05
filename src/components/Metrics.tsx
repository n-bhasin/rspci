import { Box, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

interface Metric {
  label: string;
  value: number;
}

const MetricCard = ({ label, value }: Metric) => (
  <VStack>
    <Heading as="h3" size="2xl">
      <CountUp end={value} duration={3} />
    </Heading>
    <Text fontSize="lg" fontWeight="bold" color="themeRed">
      {label}
    </Text>
  </VStack>
);

const Metrics = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const metrics: Metric[] = [
    { label: "Years", value: 10 },
    { label: "Clients", value: 400 },
    { label: "Products", value: 3000 },
    { label: "Capacity (MTPA)", value: 24000 },
  ];

  return (
    <Box bg="#EFF1EE" py={12} ref={ref} mt={20}>
      <Box>
        <Text
          align="center"
          fontSize={{ base: "12px", sm: "sm", md: "md", lg: "md" }}
          className="reach-us"
          mb={20}
          fontWeight="800"
          color="themeRed"
        >
          Our Journey in Numbers
        </Text>
      </Box>
      {inView && (
        <Flex justify="space-around" align="center" wrap="wrap">
          {metrics.map((metric, index) => (
            <MetricCard key={index} label={metric.label} value={metric.value} />
          ))}
        </Flex>
      )}
    </Box>
  );
};

export default Metrics;
