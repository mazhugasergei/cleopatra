import { create } from "@storybook/theming"

export const theme = create({
	base: "light",

	// typography
	fontBase: '"Open Sans", sans-serif',
	fontCode: "monospace",

	brandTitle: "<h1 class='logo'>CLEOPATRA <span>TRADING CO.</span></h1>",
	// brandUrl: 'https://example.com',
	brandImage: "",
	brandTarget: "_self",

	// colors
	colorPrimary: "#3A10E5",
	colorSecondary: "#585C6D",

	// text colors
	textColor: "#000",
	textMutedColor: "#5C6870",
	textInverseColor: "#ffffff",

	// UI
	appBg: "#ffffff",
	appContentBg: "#ffffff",
	appPreviewBg: "#ffffff",
	// appBorderColor: "#585C6D",
	appBorderRadius: 2,

	// toolbar default and active colors
	barBg: "#ffffff",
	// barTextColor: "#9E9E9E",
	barSelectedColor: "#000",
	barHoverColor: "#000",

	//button
	buttonBg: "#fff",
	buttonBorder: "#dcdcdc",
})
