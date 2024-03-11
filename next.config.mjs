/** @type {import('next').NextConfig} */

import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
	dest: "public",
	cacheOnFrontEndNav: true,
	reloadOnOnline: false,
	aggressiveFrontEndNavCaching: true,
	swcMinify: true,
	disable: false,
	workboxOptions: {
		disableDevLogs: true,
	},
});

const nextConfig = {};

export default withPWA(nextConfig);
