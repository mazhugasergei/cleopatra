export function preventWidowWord(text: string) {
	const lastSpaceIndex = text.lastIndexOf(" ")
	if (lastSpaceIndex === -1) return text
	return text.substring(0, lastSpaceIndex) + " " + text.substring(lastSpaceIndex + 1)
}
