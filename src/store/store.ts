import { configureStore, combineReducers, AnyAction, ThunkAction, Action } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import dashboardUI from "@/store/reducers/ui/dashboard";
import dashboardAPI from "@/store/reducers/api/dasboard";

const uiReducers = combineReducers({
	dashboard: dashboardUI,
});

const apiReducers = combineReducers({
	dashboard: dashboardAPI,
});

const combinedReducer = combineReducers({
	ui: uiReducers,
	api: apiReducers,
});

const store = configureStore({
	reducer: {
		ui: uiReducers,
		api: apiReducers,
	},
	middleware: (getDefaultMiddleware: any) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});

const reducer = (state: ReturnType<typeof combineReducers>, action: AnyAction) => {
	if (action.type === HYDRATE) {
		const nextState = {
			...state, // use previous state
			...action.payload, // apply delta from hydration
		};
		return nextState;
	} else {
		//@ts-ignore
		return combinedReducer(state, action);
	}
};

export const makeStore = () =>
	configureStore({
		reducer,
		devTools: true,
	});

export const wrapper = createWrapper<AppStore>(makeStore, { debug: true });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>;

export type RootStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootStore> = useSelector;
