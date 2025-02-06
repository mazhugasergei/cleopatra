import type { StorybookConfig } from "@storybook/nextjs"

const config: StorybookConfig = {
	stories: ["../components/**/*.stories.@(js|jsx|mjs|ts|tsx)", "../app/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
	addons: ["@storybook/addon-essentials", "@chromatic-com/storybook", "@storybook/addon-interactions"],
	framework: {
		name: "@storybook/nextjs",
		options: {},
	},
	staticDirs: [
		{
			from: "../fonts",
			to: "/fonts",
		},
	],
}

export default config
