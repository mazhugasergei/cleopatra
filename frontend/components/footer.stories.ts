import { Footer } from "@/components/footer"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof Footer> = {
	title: "Footer",
	component: Footer,
	parameters: {
		layout: "fullscreen",
	},
	tags: ["autodocs"],
	argTypes: {
		ref: {
			table: { disable: true },
			control: false,
		},
	},
}

export default meta
type Story = StoryObj<typeof meta>

const defaultArgs: Partial<Story["args"]> = {}

export const Default: Story = {
	args: {
		...defaultArgs,
	},
}
