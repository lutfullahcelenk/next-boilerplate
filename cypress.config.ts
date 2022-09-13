import { defineConfig } from "cypress";

export default defineConfig({
	viewportWidth: 1920,
	viewportHeight: 1080,
	screenshotOnRunFailure: false,
	video: false,
	e2e: {
		setupNodeEvents(on, config) {
			// implement node event listeners here
		},
		baseUrl: "http://localhost:3000/",
	},
});
