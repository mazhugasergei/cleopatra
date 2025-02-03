// import { Montserrat } from "next/font/google"

// export const headingFont = Montserrat({
// 	weight: ["700"],
// 	subsets: ["latin"],
// })

import localFont from "next/font/local";

export const headingFont = localFont({
  src: "./Montserrat-Bold.ttf",
  display: "swap",
});
