import type { NextConfig } from "next"

const nextConfig: NextConfig = {
	reactStrictMode: true,
	experimental: {
		nextScriptWorkers: true,
	},
	logging: false,
}

export default nextConfig
