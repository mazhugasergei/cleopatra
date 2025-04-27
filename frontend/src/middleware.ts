import { match } from "@formatjs/intl-localematcher"
import Negotiator from "negotiator"
import { NextRequest, NextResponse } from "next/server"
import { locales } from "./lib/dictionaries"

function getLocale(request: NextRequest) {
	const acceptLanguage = request.headers.get("accept-language") || ""
	const languages = new Negotiator({ headers: { "accept-language": acceptLanguage } }).languages()
	const defaultLocale = "en"
	return match(languages, locales, defaultLocale)
}

export function middleware(request: NextRequest) {
	// check if there is any supported locale in the pathname
	const { pathname } = request.nextUrl
	const pathnameHasLocale = locales.some((locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`)
	if (pathnameHasLocale) return

	// redirect if there is no locale
	const locale = getLocale(request)
	request.nextUrl.pathname = `/${locale}${pathname}`
	// e.g. incoming request is /products
	// the new URL is now /en/products
	return NextResponse.redirect(request.nextUrl)
}

export const config = {
	matcher: [
		// Skip all internal paths (_next)
		"/((?!_next|favicon.ico).*)",
		// Optional: only run on root (/) URL
		// "/",
	],
}
