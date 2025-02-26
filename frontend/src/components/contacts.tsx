import { headingFont } from "@/fonts"
import { cn } from "@/utils/cn"
import {
	InstagramIcon,
	LandmarkIcon,
	MailIcon,
	MapPinIcon,
	MessageCircleIcon,
	MessageSquareIcon,
	PhoneIcon,
	SendIcon,
} from "lucide-react"
import Link from "next/link"
import React from "react"
import { buttonVariants } from "./ui/button"

export interface Contacts extends React.HTMLAttributes<HTMLDivElement> {
	ref?: React.Ref<HTMLDivElement>
}

export const Contacts = ({ className, ...props }: Contacts) => {
	const blocks = [
		{
			Component: Phone,
			Icon: PhoneIcon,
			heading: "Call us",
			subheading: "Speak to our friendly team in a call.",
		},
		{
			Component: Chat,
			Icon: MessageSquareIcon,
			heading: "Chat with us",
			subheading: "Speak to our friendly team in a chat.",
		},
		{
			Component: Address,
			Icon: MapPinIcon,
			heading: "Visit us",
			subheading: "Chat to us in person at our office in Incheon.",
		},
		{
			Component: Bank,
			Icon: LandmarkIcon,
			heading: "Bank details",
			subheading: "Make a payment easily with our bank details.",
		},
	]

	return (
		<div className={cn("space-y-4", className)} {...props}>
			{blocks.map(({ Component, Icon, heading, subheading }, index) => (
				<div key={index} className="grid grid-cols-[auto_1fr] gap-4">
					<Icon size={20} className="size-9 rounded-md border p-2" />
					<div>
						<div className="mb-2">
							<h3 className={cn(headingFont.className, "text-xl font-bold")}>{heading}</h3>
							<p className="text-muted-foreground">{subheading}</p>
						</div>
						<Component />
					</div>
				</div>
			))}
		</div>
	)
}

const Phone = () => {
	const phones = [
		{
			languages: ["KR", "AR", "EN"],
			number: "+8210-8296-9320",
		},
		{
			languages: ["RU", "EN"],
			number: "+8210-4798-9320",
		},
	]

	return (
		<div className="flex flex-col gap-1">
			{phones.map(({ languages, number }, index) => (
				<Link key={index} href={`tel:${number}`} rel="noopener noreferrer" className="font-medium underline">
					{number} ({languages.join(", ")})
				</Link>
			))}
		</div>
	)
}

const Chat = () => {
	const items = [
		{
			label: "Send us an email",
			Icon: MailIcon,
			href: "mailto:hamdy197514@gmail.com",
		},
		{
			label: "Chat on WhatsApp",
			Icon: MessageCircleIcon,
			href: "http://wa.me/+821047989320",
		},
		{
			label: "Chat on Telegram",
			Icon: SendIcon,
			href: "https://t.me/natalia_mikki",
		},
		{
			label: "Visit on Instagram",
			Icon: InstagramIcon,
			href: "https://instagram.com/cleopatra_trd",
		},
	]

	return (
		<div className="flex flex-col gap-1">
			{items.map(({ label, Icon, href }, index) => (
				<Link
					key={index}
					href={href}
					rel="noopener noreferrer"
					className="flex items-center gap-2 font-medium underline"
				>
					<Icon size={18} />
					{label}
				</Link>
			))}
		</div>
	)
}

const Address = () => {
	const maps = [
		{
			name: "Naver Map",
			href: "https://map.naver.com/p/search/%EC%9D%B8%EC%B2%9C%EA%B4%91%EC%97%AD%EC%8B%9C%20%EC%84%9C%EA%B5%AC%20%EC%98%A4%EB%A5%98%EB%8F%99%201550%EB%B2%88%EC%A7%80/address/14093232.9927001,4517773.5596789,%EC%9D%B8%EC%B2%9C%EA%B4%91%EC%97%AD%EC%8B%9C%20%EC%84%9C%EA%B5%AC%20%EC%98%A4%EB%A5%98%EB%8F%99%201550,jibun?c=15.00,0,0,0,dh&isCorrectAnswer=true",
		},
		{
			name: "Kakao Map",
			href: "https://map.kakao.com/?map_type=TYPE_MAP&q=%EC%9D%B8%EC%B2%9C+%EC%84%9C%EA%B5%AC+%EC%98%A4%EB%A5%98%EB%8F%99+1550&urlLevel=2&urlX=412051&urlY=1128778",
		},
		{
			name: "Google Map",
			href: "https://www.google.com/maps/place/1550,+Oryu-dong,+Seo-gu,+Incheon/@37.4582313,126.6396971,17z/data=!3m1!4b1!4m5!3m4!1s0x357ca3c7a6a1d3f9:0x5d1d0b7a4b4b0e5!8m2!3d37.458227!4d126.6418858",
		},
	]

	return (
		<>
			<Link
				href="https://www.google.com/maps/place/1550,+Oryu-dong,+Seo-gu,+Incheon/@37.4582313,126.6396971,17z/data=!3m1!4b1!4m5!3m4!1s0x357ca3c7a6a1d3f9:0x5d1d0b7a4b4b0e5!8m2!3d37.458227!4d126.6418858"
				target="_blank"
				className="font-medium underline"
			>
				1550, Oryu-dong, Seo-gu, Incheon, Korea
			</Link>

			<div className="mt-2 flex flex-wrap gap-2">
				{maps.map(({ name, href }, index) => (
					<React.Fragment key={index}>
						<Link
							key={index}
							href={href}
							target="_blank"
							rel="noopener noreferrer"
							className={buttonVariants({ variant: "ghost" })}
						>
							{name}
						</Link>
						{index < maps.length - 1 && <div className="border-r" />}
					</React.Fragment>
				))}
			</div>
		</>
	)
}

const Bank = () => {
	const items = [
		{
			label: "Hana Bank",
			number: "106-891533-861107",
		},
		{
			label: "KB",
			number: "026401-04-075346",
		},
	]

	return (
		<div className="grid grid-cols-[auto_1fr] gap-x-4">
			{items.map(({ label, number }, index) => (
				<React.Fragment key={index}>
					<h4 className={cn(headingFont.className, "font-medium")}>{label}</h4>
					<div>{number}</div>
				</React.Fragment>
			))}
		</div>
	)
}
