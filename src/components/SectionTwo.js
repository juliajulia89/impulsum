import { Flex, Box, Image, Text } from "@chakra-ui/react";

const SectionTwo = () => {
  return (
    <>
      <Flex
        ml={["spacer-4", "spacer-48"]}
        mr={["spacer-4", "spacer-32"]}
        pb="spacer-32"
        alignItems="center"
        flexDirection={["column", "row"]}
      >
        <Box textAlign={["center", "start"]}>
          <Text
            mt="spacer-4"
            textStyle="text-body-bold"
            color="text-link-primary-default"
          >
            For Marketing Experts
          </Text>
          <Text
            mt="spacer-4"
            textStyle="text-header-2XL"
            color="accent-default"
          >
            Get better conversion rates
          </Text>
          <Text mt="spacer-4" textStyle="text-body-regular">
            We help you create high-converting landing pages, engaging popups,
            integrated SEO and social media integrations to reach a wider
            audience and optimize conversion rates using precise and customized
            A/B testing and analytical insights.
          </Text>
        </Box>
        <Image src="./images/Marketing.svg" />
      </Flex>
    </>
  );
};

export default SectionTwo;
