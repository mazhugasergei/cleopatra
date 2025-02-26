"use client"

import React from "react"

export const useHeaderHeight = () => {
	const [headerHeight, setHeaderHeight] = React.useState(0)

	React.useEffect(() => {
		const handleResize = () => {
			const header = document.querySelector("header")
			if (!header) return
			const height = header.getBoundingClientRect().height
			setHeaderHeight(height)
		}
		handleResize()
		window.addEventListener("resize", handleResize)
		return () => window.removeEventListener("resize", handleResize)
	}, [])

	return React.useMemo(() => headerHeight, [headerHeight])
}
