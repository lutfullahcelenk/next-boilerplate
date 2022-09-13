import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface DashboardState {
	title: string;
}

export const initialDashboardState: DashboardState = {
	title: "Dashboard",
};

export const dashboardReducer = createSlice({
	name: "dashboard.ui",
	initialState: initialDashboardState,
	reducers: {
		helloWorld: (state: DashboardState, action: PayloadAction<string>) => {
			state.title = action.payload;
		},
	},
});

export const { helloWorld } = dashboardReducer.actions;

export default dashboardReducer.reducer;
