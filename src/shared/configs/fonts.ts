import { Be_Vietnam_Pro, Inter, Oswald } from "next/font/google"

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
})

export const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-be-vietnam-pro",
  display: "swap",
})

export const localeFontClassName = {
  en: {
    body: "font-body-en",
    heading: "font-heading-en",
  },
  vi: {
    body: "font-body-vi",
    heading: "font-heading-vi",
  },
} as const
