"use client"

import { US, VN } from "country-flag-icons/react/3x2"
import { useLocale } from "next-intl"
import { usePathname, useRouter } from "next/navigation"

import { routing, type Locale } from "@/shared/i18n/routing"

const LANGUAGE_META = {
    en: {
        label: "EN",
        Flag: US,
    },
    vi: {
        label: "VI",
        Flag: VN,
    },
} satisfies Record<
    Locale,
    {
        label: string
        Flag: typeof US
    }
>

function replaceLocaleInPathname(pathname: string, nextLocale: Locale) {
    const segments = pathname.split("/")

    if (routing.locales.includes(segments[1] as Locale)) {
        segments[1] = nextLocale
        return segments.join("/")
    }

    return `/${nextLocale}${pathname}`
}

export function LanguageSwitcher() {
    const locale = useLocale() as Locale
    const pathname = usePathname()
    const router = useRouter()

    const handleChangeLocale = (nextLocale: Locale) => {
        if (nextLocale === locale) return

        router.push(replaceLocaleInPathname(pathname, nextLocale))
    }

    return (
        <div className="flex h-9 items-center gap-2 rounded border border-[#0F2145]/15 bg-[#0F2145]/5 p-1">
            {routing.locales.map((item) => {
                const active = item === locale
                const { label, Flag } = LANGUAGE_META[item]

                return (
                    <button
                        key={item}
                        type="button"
                        onClick={() => handleChangeLocale(item)}
                        className={[
                            "flex items-center gap-1.5 rounded px-2 py-1 text-xs font-semibold uppercase transition",
                            active
                                ? "bg-[#0F2145] text-white shadow-sm"
                                : "text-[#0F2145]/70 hover:bg-[#0F2145]/10 hover:text-[#0F2145]",
                        ].join(" ")}
                    >
                        <Flag className="h-3.5 w-6 rounded-[1px]" />
                        <span>{label}</span>
                    </button>
                )
            })}
        </div>
    )
}
