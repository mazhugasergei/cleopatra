import { SectionHeader } from "@/components/layout/section-header"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof SectionHeader> = {
	title: "Cleopatra/Layout/SectionHeader",
	component: SectionHeader,
	parameters: {
		layout: "fullscreen",
	},
	tags: ["autodocs"],
	argTypes: {
		children: {
			description: "SectionHeader content",
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
	backLink: "#",
	title: "Section Header",
}

export const Default: Story = {
	args: {
		...defaultArgs,
	},
}
