import { getRequestConfig } from "next-intl/server"

import { routing, type Locale } from "./routing"

const messagesByLocale = {
  en: () => import("../messages/en.json").then((module) => module.default),
  vi: () => import("../messages/vi.json").then((module) => module.default),
} satisfies Record<Locale, () => Promise<IntlMessages>>

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale

  const locale = routing.locales.includes(requested as Locale)
    ? (requested as Locale)
    : routing.defaultLocale

  return {
    locale,
    messages: await messagesByLocale[locale](),
  }
})
