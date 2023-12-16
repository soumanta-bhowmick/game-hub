import axios from "axios";

export default axios.create({
	baseURL: "https://api.rawg.io/api",
	params: {
		key: "46c1cd37ea934b84ac108709f3c0327c",
	},
});
