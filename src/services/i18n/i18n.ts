import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import EN from "@/services/i18n/translations/EN.json";
import AR from "@/services/i18n/translations/AR.json";

i18n.use(initReactI18next).init({
	resources: {
		en: {
			...EN,
		},
		ar: {
			...AR,
		},
	},
	fallbackLng: "en",
	compatibilityJSON: "v3",
	returnObjects: true,
	keySeparator: ".",
});

export default i18n;
