import { Text } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";

const Header = () => {
  return (
    <main className="body">
      <Text
        pt="spacer-24"
        ml={["spacer-4", "spacer-52"]}
        mr={["spacer-4", "spacer-52"]}
        textStyle="text-header-4XL"
        color="accent-default"
      >
        Deploy modern web experiences with the smartest web buider
      </Text>
      <Text
        ml={["spacer-4", "spacer-86"]}
        mr={["spacer-4", "spacer-86"]}
        mt="spacer-8"
        textStyle="text-body-regular"
        color="text-secondary"
      >
        Introducing Composer - the most advanced web and landing page builder
        for non-programmers that helps you to speed up your digital production
        processes.
      </Text>
      <Button
        mt="spacer-8"
        borderRadius="radii-6"
        color="accent-default"
        background="text-button-accent"
      >
        Request your free demo <ArrowForwardIcon />
      </Button>
    </main>
  );
};

export default Header;