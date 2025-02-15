import type { Meta, StoryObj } from "@storybook/react"
import Layout from "./layout"
import Page from "./page"

const meta: Meta<typeof Layout> = {
	title: "Cleopatra/Pages/Page",
	component: Layout,
	parameters: {
		layout: "fullscreen",
	},
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		children: <Page params={new Promise((res) => res({ lang: "en" }))} />,
	},
}

export const Ru: Story = {
	args: {
		children: <Page params={new Promise((res) => res({ lang: "ru" }))} />,
	},
}
