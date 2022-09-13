import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "@/utils/axios";
import { IDasboardResponse, IDasboardResponseData } from "@/services/types/api/response";

export const dashboardExampleAsyncAction = createAsyncThunk<IDasboardResponseData, void, { rejectValue: string }>(
	"dasboardAPI/exampleAsyncAction",
	async (_, { rejectWithValue }) => {
		try {
			const res: IDasboardResponse = await axios.get("/dashboard");
			const { data } = res;

			return data;
		} catch (error: any) {
			const message: string =
				(error.response && error.response.data && error.response.data.message) || error.message || error.toString();
			console.log(message);
			return rejectWithValue(message);
		}
	}
);
