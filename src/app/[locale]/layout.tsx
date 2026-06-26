import type { Metadata } from "next"
import { hasLocale, NextIntlClientProvider } from "next-intl"
import { getMessages } from "next-intl/server"
import { notFound } from "next/navigation"

import {
  beVietnamPro,
  inter,
  localeFontClassName,
  oswald,
} from "@/shared/configs/fonts"
import { routing, type Locale } from "@/shared/i18n/routing"
import { AppHeader } from "@/shared/widgets/app-header"
import { AppFooter } from "@/shared/widgets/app-footer"

import "../globals.css"

interface LocaleLayoutProps {
  children: React.ReactNode
  params: Promise<{
    locale: string
  }>
}

export const metadata: Metadata = {
  title: {
    default: "LIFENICE",
    template: "%s | LIFENICE",
  },
  description:
    "LIFENICE is a football club website built to introduce the team globally.",
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params

  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  const messages = await getMessages()
  const typedLocale = locale as Locale

  return (
    <html lang={locale}>
      <body
        className={[
          inter.variable,
          oswald.variable,
          beVietnamPro.variable,
          localeFontClassName[typedLocale].body,
          "min-h-screen bg-neutral-950 text-white antialiased",
        ].join(" ")}
      >
        <NextIntlClientProvider messages={messages}>
          <AppHeader />
          <main className="flex-1">{children}</main>
          <AppFooter />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
