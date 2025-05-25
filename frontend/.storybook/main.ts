import type { StorybookConfig } from "@storybook/nextjs"

const config: StorybookConfig = {
	stories: ["./**/*.mdx", "../**/*.stories.@(js|jsx|mjs|ts|tsx)"],
	addons: ["@storybook/addon-essentials", "@storybook/addon-interactions"],
	framework: {
		name: "@storybook/nextjs",
		options: {},
	},
	staticDirs: [
		"../public",
		// {
		// 	from: "../fonts",
		// 	to: "/fonts",
		// },
	],
}

export default config
