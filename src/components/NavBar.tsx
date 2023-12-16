import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.jpg";

const NavBar = () => {
	return (
		<HStack>
			<Image src={logo} boxSize="60px" borderRadius="10px" />
			<Text>Navbar</Text>
		</HStack>
	);
};

export default NavBar;
