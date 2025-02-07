import { H2 } from "@/components/ui/headings"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof H2> = {
	title: "Cleopatra/UI/Headings",
	component: H2,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		children: {
			description: "Headings content",
			table: {
				type: { summary: "React.ReactNode" },
			},
		},
		ref: {
			table: { disable: true },
			control: false,
		},
	},
}

export default meta
type Story = StoryObj<typeof meta>

const defaultArgs: Partial<Story["args"]> = {
	children: "Heading",
}

export const Default: Story = {
	args: {
		...defaultArgs,
	},
}
