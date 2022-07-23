import { Box, Text, Button, Image, Link, Flex } from "@chakra-ui/react";
import imageFigma from "../images/Figma.svg"
import imageGithub from "../images/Github.svg"

const SectionFour = () => {
  return (
   <>
    <Box pb="spacer-32">
      <Box
        background="text-button-accent"
        ml={["spacer-4", "spacer-32"]}
        mr={["spacer-4", "spacer-32"]}
        mt="spacer-32"
        p={["spacer-8", "spacer-20"]}
        textAlign={["center", "start"]}
      >
        <Text textStyle="text-header-3XL">
          Ready to depoy more and better products?
        </Text>
        <Button
          mt="spacer-8"
          borderRadius="radii-6"
          color="text-button-accent"
          mr={["spacer-0", "spacer-16"]}
          background="accent-default"
        >
          Request your free demo 
        </Button>
        </Box>
        </Box>
        
        <Box>
         <Flex justifyContent="space-evenly" flexDirection={['column', 'row']} mr={['spacer-0', "spacer-28"]} textAlign='start'>
         <Box width={["null", "20%"]} ml={["spacer-8", "spacer-0"]}>
          <Image src={imageGithub} alt="GithubLogo" />
          <Text textStyle="text-header-L" pt="spacer-4">
            Composer is open-sourced on GitHub. You're welcome to contribute.
          </Text>
          <Button borderRadius="radii-6" color="accent-default" mt="spacer-4" background="text-button-accent" >
            Contribute on GitHub  
          </Button>
        </Box>
        <Box
          width={["null", "20%"]}
          ml={["spacer-0", "spacer-0"]}
          mt={["spacer-0", "spacer-0"]}
        >
          <Image src={imageFigma} alt="FigmaLogo" />
          <Text textStyle="text-header-L" pt="spacer-3">
            Composer is part of the Figma community. Visit us with handle
            @impulsum
          </Text>
          <Button
            borderRadius="radii-6"
            color="accent-default"
            background="text-button-accent"
            mt="spacer-4"
          >
            Contribute on Figma
          
          </Button>
        </Box>
        <Box
          width={["null", "20%"]}
          ml={["spacer-8", "null"]}
          mt={["spacer-8", "spacer-0"]}
        >
          <Text textStyle="text-header-M" pt="spacer-12">
            Keep in touch
          </Text>
          <Text textStyle="text-link-body-small" pt="spacer-4">
            <Link>Share feedback on GitHub</Link>
          </Text>
          <Text textStyle="text-link-body-small" pt="spacer-4">
            <Link>Find us on LinkedIn</Link>
          </Text>
          <Text textStyle="text-link-body-small" pt="spacer-4">
            <Link>Meet the crew on Instagram</Link>
          </Text>
        </Box>
      </Flex>
        </Box>
        </>
  );
};

export default SectionFour;
