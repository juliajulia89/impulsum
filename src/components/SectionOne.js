import { Flex, Box, Image, Text } from "@chakra-ui/react";
import image from "../images/Business.svg"

const SectionOne = () => {
  return (
    <>
      <Flex
        ml={["spacer-4", "spacer-32"]}
        mt="spacer-28"
        mr={["spacer-4", "spacer-16"]}
        alignItems="center"
        flexDirection={["column-reverse", "row"]}
      >
        <Image src={image} alt="Business" />
        <Box mr="spacer-32rem" textAlign={["center", "start"]}>
          <Text
            mt="spacer-4"
            textStyle="text-body-bold"
            color="text-link-primary-default"
          >
            For Startups & Business Owners
          </Text>
          <Text
            mt="spacer-4"
            textStyle="text-header-2XL"
            color="accent-default"
          >
            We support the way you run your business
          </Text>
          <Text mt="spacer-4" textStyle="text-body-regular">
            With our drag-and-drop web editor and customizable professional
            templates that fit your brand, you'll be online in no time.
          </Text>
        </Box>
      </Flex>
    </>
  );
};

export default SectionOne;
