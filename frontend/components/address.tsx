import { cn } from "@/utils/cn"
import Link from "next/link"
import { buttonVariants } from "./ui/button"

export interface AddressProps extends React.HTMLAttributes<HTMLDivElement> {
	ref?: React.Ref<HTMLDivElement>
}

export const Address = ({ className, ...props }: AddressProps) => {
	return (
		<div className={cn("space-y-2", className)} {...props}>
			<Link
				href="https://www.google.com/maps/place/1550,+Oryu-dong,+Seo-gu,+Incheon/@37.4582313,126.6396971,17z/data=!3m1!4b1!4m5!3m4!1s0x357ca3c7a6a1d3f9:0x5d1d0b7a4b4b0e5!8m2!3d37.458227!4d126.6418858"
				target="_blank"
				className="block hover:underline"
			>
				1550, Oryu-dong, Seo-gu, Incheon, Korea
			</Link>

			<div className="flex flex-wrap gap-2">
				<Link
					href="https://map.naver.com/p/search/%EC%9D%B8%EC%B2%9C%EA%B4%91%EC%97%AD%EC%8B%9C%20%EC%84%9C%EA%B5%AC%20%EC%98%A4%EB%A5%98%EB%8F%99%201550%EB%B2%88%EC%A7%80/address/14093232.9927001,4517773.5596789,%EC%9D%B8%EC%B2%9C%EA%B4%91%EC%97%AD%EC%8B%9C%20%EC%84%9C%EA%B5%AC%20%EC%98%A4%EB%A5%98%EB%8F%99%201550,jibun?c=15.00,0,0,0,dh&isCorrectAnswer=true"
					target="_blank"
					className={buttonVariants({ variant: "ghost" })}
				>
					Naver Map
				</Link>
				<Link
					href="https://map.kakao.com/?map_type=TYPE_MAP&q=%EC%9D%B8%EC%B2%9C+%EC%84%9C%EA%B5%AC+%EC%98%A4%EB%A5%98%EB%8F%99+1550&urlLevel=2&urlX=412051&urlY=1128778"
					target="_blank"
					className={buttonVariants({ variant: "ghost" })}
				>
					Kakao Map
				</Link>
				<Link
					href="https://www.google.com/maps/place/1550,+Oryu-dong,+Seo-gu,+Incheon/@37.4582313,126.6396971,17z/data=!3m1!4b1!4m5!3m4!1s0x357ca3c7a6a1d3f9:0x5d1d0b7a4b4b0e5!8m2!3d37.458227!4d126.6418858"
					target="_blank"
					className={buttonVariants({ variant: "ghost" })}
				>
					Google Map
				</Link>
			</div>
		</div>
	)
}
