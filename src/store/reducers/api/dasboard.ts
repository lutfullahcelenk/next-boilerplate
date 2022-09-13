import { IDasboardResponseData } from "@/services/types/api/response";
import { IFetchStatus } from "@/services/types/propTypes/generic";
import { dashboardExampleAsyncAction } from "@/store/asyncActions/dashboard";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

export interface DashboardState {
	fetchDasboardStatus: IFetchStatus;
	dummyResponse: string;
}

export const initialDashboardState: DashboardState = {
	fetchDasboardStatus: "idle",
	dummyResponse: "",
};

export const dashboardReducer = createSlice({
	name: "dashboard.api",
	initialState: initialDashboardState,
	reducers: {},
	extraReducers: ({ addCase }) => {
		addCase(dashboardExampleAsyncAction.pending, (state) => {
			state.fetchDasboardStatus = "loading";
		});
		addCase(dashboardExampleAsyncAction.fulfilled, (state, action: PayloadAction<IDasboardResponseData>) => {
			state.fetchDasboardStatus = "success";
			state.dummyResponse = action.payload.dummyResponse;
		});
		addCase(dashboardExampleAsyncAction.rejected, (state) => {
			state.fetchDasboardStatus = "error";
		});
	},
});

export default dashboardReducer.reducer;
