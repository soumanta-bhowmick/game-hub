import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.jpg";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
	onSearch: (searchtext: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
	return (
		<HStack padding="10px">
			<Image src={logo} boxSize="60px" borderRadius="10px" />
			<SearchInput onSearch={onSearch} />
			<ColorModeSwitch />
		</HStack>
	);
};

export default NavBar;
