import { Text, Flex, Image, Icon } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import logo from "../images/ComposerLogo.svg";

const Navbar = () => {
  return (
    <main className="body">
      <Flex pt="spacer-8" justifyContent="space-between" alignItems="center">
        <Flex alignItems="center">
          <Image
            background="background-dark"
            ml={["spacer-4", "spacer-16"]}
            src={logo}
            alt="ComposerLogo"
          />
          <Text
            textStyle="text-header-L"
            display={["none", "block"]}
            color="accent-default"
          >
            Composer
          </Text>
        </Flex>
        <Button
          mr={["spacer-4", "spacer-16"]}
          borderRadius="radii-6"
          color="accent-default"
          background="text-button-accent"
        >
          Request your free demo <Icon name="arrow-forward" />
        </Button>
      </Flex>
    </main>
  );
};

export default Navbar;
