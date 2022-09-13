import { dashboardExampleAsyncAction } from "@/store/asyncActions/dashboard";
import { useAppSelector, wrapper } from "@/store/store";
import type { NextPage } from "next";

const Dashboard: NextPage<any> = (props) => {
	const { title } = useAppSelector((state) => state.ui.dashboard);
	const { fetchDasboardStatus, dummyResponse } = useAppSelector((state) => state.api.dashboard);

	if (fetchDasboardStatus === "loading") {
		return <div>loading</div>;
	}

	return (
		<div>
			{title} --- {dummyResponse}
		</div>
	);
};

export const getServerSideProps = wrapper.getServerSideProps(({ dispatch }) => async ({ params }) => {
	await dispatch(dashboardExampleAsyncAction());

	return {
		props: {},
	};
});
export default Dashboard;
