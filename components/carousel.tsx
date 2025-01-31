import React from "react"

export const Carousel = () => {
	const slides = ["Slide 1", "Slide 2", "Slide 3", "Slide 4"]
	const [transitionOn, setTransitionOn] = React.useState(true)
	const [index, setIndex] = React.useState(0)
	const [autoScroll, setAutoScroll] = React.useState(true)
	const intervalRef = React.useRef<NodeJS.Timeout | null>(null)

	const nextSlide = () => {
		setIndex((prev) => (prev + 1) % slides.length)
		setAutoScroll(false)
	}

	const prevSlide = () => {
		setIndex((prev) => (prev - 1 + slides.length) % slides.length)
		setAutoScroll(false)
	}

	const goToSlide = (i: number) => {
		setIndex(i)
		setAutoScroll(false)
	}

	React.useEffect(() => {
		if (autoScroll) {
			intervalRef.current = setInterval(() => {
				setIndex((prev) => (prev + 1) % slides.length)
			}, 3000)
		}
		return () => clearInterval(intervalRef.current as NodeJS.Timeout)
	}, [autoScroll])

	return (
		<div className="relative mx-auto w-full overflow-hidden border">
			<div
				className="grid bg-gray-300"
				style={{
					transition: transitionOn ? "transform 0.5s ease-in-out" : "none",
					gridTemplateColumns: `repeat(${slides.length}, minmax(0, 1fr))`,
					transform: `translateX(-${(100 / slides.length) * index}%)`,
					width: `${slides.length * 100}%`,
				}}
			>
				{slides.map((slide, i) => (
					<Slide key={i} slide={slide} />
				))}
			</div>

			{/* Left Arrow */}
			<button onClick={prevSlide} className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow">
				{"<"}
			</button>

			{/* Right Arrow */}
			<button
				onClick={nextSlide}
				className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow"
			>
				{">"}
			</button>

			{/* Progress Dots */}
			<div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 space-x-2">
				{slides.map((_, i) => (
					<button
						key={i}
						onClick={() => goToSlide(i)}
						className={`h-2 w-2 rounded-full ${index === i ? "bg-blue-500" : "bg-gray-400"}`}
					/>
				))}
			</div>
		</div>
	)
}

const Slide = ({ slide }: { slide: string }) => (
	<div
		className="flex h-48 items-center justify-center border"
		style={{
			width: "100%",
		}}
	>
		{slide}
	</div>
)
