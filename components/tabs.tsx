"use client"

import { cn } from "@/helpers/tailwind"
import React from "react"
import { buttonVariants } from "./button"

export type TabsData = {
	name: string
	content: React.ReactNode
}[]

export interface ListProps extends React.HTMLAttributes<HTMLDivElement> {
	data: TabsData
	ref?: React.Ref<HTMLDivElement>
}

export const Tabs = ({ data, className, ...props }: ListProps) => {
	const id = React.useId()
	const [selected, setSelected] = React.useState(0)
	const containerRef = React.useRef<HTMLUListElement>(null)
	const [isMouseDown, setIsMouseDown] = React.useState(false)
	const [isDragging, setIsDragging] = React.useState(false)
	const [startX, setStartX] = React.useState(0)
	const [scrollLeft, setScrollLeft] = React.useState(0)
	const [scrollRight, setScrollRight] = React.useState(0)

	const getScrollPosition = () => {
		if (!containerRef.current) return
		const ul = containerRef.current
		const maxScrollLeft = ul.scrollWidth - ul.clientWidth
		setScrollLeft(ul.scrollLeft)
		setScrollRight(maxScrollLeft - ul.scrollLeft)
	}

	React.useEffect(() => {
		getScrollPosition()
		window.addEventListener("resize", getScrollPosition)
		return () => {
			window.removeEventListener("resize", getScrollPosition)
		}
	}, [])

	const handleMouseDown = (e: React.MouseEvent) => {
		if (!containerRef.current) return
		setIsMouseDown(true)
		setStartX(e.pageX - containerRef.current.offsetLeft)
	}

	const handleMouseMove = (e: React.MouseEvent) => {
		if (!containerRef.current || !isMouseDown) return
		e.preventDefault()
		setIsDragging(true)
		const x = e.pageX - containerRef.current.offsetLeft
		const walk = x - startX
		containerRef.current.scrollLeft -= walk
		setStartX(x)
	}

	const handleMouseUp = () => {
		setIsMouseDown(false)
		setIsDragging(false)
	}

	return (
		<div className={cn("space-y-8", className)} {...props}>
			{/* tabs */}
			<div className="relative overflow-hidden border-b">
				<ul
					ref={containerRef}
					onMouseDown={handleMouseDown}
					onMouseMove={handleMouseMove}
					onMouseLeave={handleMouseUp}
					onMouseUp={handleMouseUp}
					onScroll={getScrollPosition}
					className={cn("scrollbar-hide overflow-x-auto", className)}
				>
					{/* list */}
					<div className="relative mx-auto flex w-fit gap-2">
						{data.map((item, index) => (
							<li
								key={item.name}
								className={cn(
									"relative flex items-center justify-between border-b-2 border-transparent p-3",
									selected === index && "border-primary"
								)}
							>
								<input
									type="radio"
									name={`tabs_${id}`}
									id={`tab_${index}_${id}`}
									checked={selected === index}
									onChange={() => setSelected(index)}
									className="peer absolute top-0 left-1/2 z-[-1] translate-x-[-50%] opacity-0"
								/>
								<label
									htmlFor={`tab_${index}_${id}`}
									className={buttonVariants({
										variant: "ghost",
										className: cn(
											"cursor-pointer peer-focus-visible:ring",
											selected === index ? "text-primary" : "text-muted-foreground",
											isDragging && "pointer-events-none select-none"
										),
									})}
								>
									{item.name}
								</label>
							</li>
						))}
					</div>
				</ul>

				{/* shadow left */}
				{scrollLeft > 0 && (
					<div className="pointer-events-none absolute top-0 bottom-0 left-0 w-2 bg-gradient-to-r from-black/5 to-transparent" />
				)}

				{/* shadow right */}
				{scrollRight > 0 && (
					<div className="pointer-events-none absolute top-0 right-0 bottom-0 w-2 bg-gradient-to-l from-black/5 to-transparent" />
				)}
			</div>

			{/* content */}
			{data[selected].content}
		</div>
	)
}
