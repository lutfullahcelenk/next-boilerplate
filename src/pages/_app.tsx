import "@/assets/styles/globals.css";
import "@/services/i18n/i18n";
import { Provider } from "react-redux";
import type { AppProps } from "next/app";
import { wrapper } from "@/store/store";

function MyApp({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}

export default wrapper.withRedux(MyApp);
