import axios from "axios";

const instance = axios.create({
	baseURL: process.env.BASE_API_URL,
	headers: {
		"content-type": "application/json",
		accept: "application/json",
	},
});

instance.interceptors.request.use(async (config) => {
	return {
		...config,
		headers: {
			...config.headers,
		},
	};
});

instance.interceptors.response.use(
	(response) => response,
	async (error) => {
		// if(error.response){

		// }

		return Promise.reject(error);
	}
);

export default instance;
