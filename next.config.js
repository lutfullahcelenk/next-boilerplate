/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require("@next/bundle-analyzer")({
	enabled: process.env.ANALYZE === "true",
});
const nextConfig = {
	reactStrictMode: true,
	env: {
		BASE_API_URL: "http://localhost:3000/api",
	},
};

module.exports = withBundleAnalyzer(nextConfig);
