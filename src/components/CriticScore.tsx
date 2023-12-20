import { Badge } from "@chakra-ui/react";

interface Props {
	score: number;
}
const CriticScore = ({ score }: Props) => {
	const color = score > 89 ? "green" : score > 75 ? "yellow" : "";

	return (
		<Badge colorScheme={color} fontSize={14} paddingX={2} borderRadius={4}>
			{score}
		</Badge>
	);
};

export default CriticScore;
