import { Flex, Box, Image, Text, Link } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box>  
      <Flex
        pt="spacer-48"
        pb="spacer-12"
        justifyContent="space-between"
        alignItems="center"
        flexDirection={["column", "row"]}
      >
        <Text
          ml={["spacer-4", "spacer-32"]}
          mr={["spacer-4, spacer-0"]}
          textStyle="text-body-regular"
        >
          © 2022 Composer. Proudly powered by{" "}
          <Text as="span" color="text-link-primary-default">
            Impulsum Venture Colab.
          </Text>{" "}
          All Rights Reserved.{" "}
          <Link color="text-link-primary-default">Privacy Policy</Link>
        </Text>
        <Image
          mt={["spacer-16", "spacer-0"]}
          mr={["spacer-0", "spacer-32"]}
          src="./images/ComposerLogo.svg"
        />
      </Flex>
    </Box>
  );
};

export default Footer;
