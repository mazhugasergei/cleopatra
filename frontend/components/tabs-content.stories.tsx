import { TabsContent } from "@/components/tabs-content"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof TabsContent> = {
	title: "Cleopatra/Components/TabsContent",
	component: TabsContent,
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

export const Default: Story = {
	args: {
		description: "Tabs content description",
		image: "https://pettownsendvet.com/wp-content/uploads/2023/01/iStock-1052880600.jpg",
	},
}
