"use client"

import Link from "next/link"
import { useLocale, useTranslations } from "next-intl"
import { usePathname } from "next/navigation"
import React from "react"
import { FaBars, FaRegUser, FaXmark } from "react-icons/fa6"

import type { Locale } from "@/shared/i18n/routing"

import {
    APP_HEADER_NAV_ITEMS,
    AUTH_SIGN_IN_PATH,
} from "./constants"
import { LanguageSwitcher } from "./LanguageSwitcher"

function normalizeLocalizedHref(locale: Locale, href: string) {
    if (href.startsWith("http")) return href
    if (href.startsWith("#")) return href
    if (href === "/") return `/${locale}`

    return `/${locale}${href.startsWith("/") ? href : `/${href}`}`
}

function isActivePath(pathname: string, locale: Locale, href: string) {
    const localizedHref = normalizeLocalizedHref(locale, href)

    if (href === "/") {
        return pathname === localizedHref
    }

    return pathname === localizedHref || pathname.startsWith(`${localizedHref}/`)
}

export function AppHeader() {
    const t = useTranslations()
    const locale = useLocale() as Locale
    const pathname = usePathname()

    const [sidebarOpen, setSidebarOpen] = React.useState(false)

    const signInHref = normalizeLocalizedHref(locale, AUTH_SIGN_IN_PATH)

    React.useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setSidebarOpen(false)
    }, [pathname])

    return (
        <>
            <header className="sticky top-0 z-50 border-b border-[#0F2145]/10 bg-white text-[#0F2145] backdrop-blur-xl">
                <div className="mx-auto flex h-16 max-w-full items-center justify-between px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-3">
                        <button
                            type="button"
                            onClick={() => setSidebarOpen(true)}
                            className="inline-flex size-10 items-center justify-center rounded border border-[#0F2145]/15 bg-[#0F2145]/5 text-[#0F2145] transition hover:bg-[#0F2145]/10 lg:hidden"
                            aria-label="Open sidebar menu"
                        >
                            <FaBars size={18} />
                        </button>

                        <Link
                            href={normalizeLocalizedHref(locale, "/")}
                            className="flex items-center gap-3"
                            aria-label="LIFENICE home"
                        >
                            <div className="flex size-10 items-center justify-center rounded bg-[#0F2145] text-sm font-black tracking-tight text-white">
                                LIF.
                            </div>

                            <div className="hidden leading-none sm:block">
                                <p className="text-sm font-black tracking-[0.2em] text-[#0F2145]">
                                    LIFENICE
                                </p>
                                <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#0F2145]/60">
                                    Football Club
                                </p>
                            </div>
                        </Link>
                    </div>

                    <nav className="hidden items-center gap-1 lg:flex">
                        {APP_HEADER_NAV_ITEMS.map((item) => {
                            const href = normalizeLocalizedHref(locale, item.href)
                            const active = isActivePath(
                                pathname,
                                locale,
                                item.href
                            )

                            return (
                                <Link
                                    key={item.href}
                                    href={href}
                                    className={[
                                        "rounded px-4 py-2 text-sm font-semibold transition",
                                        active
                                            ? "bg-[#0F2145] text-white"
                                            : "text-[#0F2145]/70 hover:bg-[#0F2145]/5 hover:text-[#0F2145]",
                                    ].join(" ")}
                                >
                                    {t(item.labelKey)}
                                </Link>
                            )
                        })}
                    </nav>

                    <div className="flex items-center gap-3">
                        <div className="hidden sm:block">
                            <LanguageSwitcher />
                        </div>

                        <Link
                            href={signInHref}
                            className="inline-flex items-center gap-2 rounded bg-[#0F2145] px-4 py-2 text-sm font-bold text-white transition hover:bg-[#0F2145]/90"
                        >
                            <FaRegUser size={16} />
                            <span className="hidden sm:inline">
                                {t("auth.signIn")}
                            </span>
                        </Link>
                    </div>
                </div>
            </header>

            {sidebarOpen ? (
                <div className="fixed inset-0 z-99 lg:hidden">
                    <button
                        type="button"
                        className="absolute inset-0 bg-[#0F2145]/40"
                        aria-label="Close sidebar menu"
                        onClick={() => setSidebarOpen(false)}
                    />

                    <aside className="absolute left-0 top-0 flex h-full w-80 max-w-[85vw] flex-col border-r border-[#0F2145]/10 bg-white text-[#0F2145] shadow-2xl">
                        <div className="flex h-16 items-center justify-between border-b border-[#0F2145]/10 px-4">
                            <Link
                                href={normalizeLocalizedHref(locale, "/")}
                                className="flex items-center gap-3"
                                aria-label="LIFENICE home"
                            >
                                <div className="flex size-10 items-center justify-center rounded bg-[#0F2145] text-sm font-black text-white">
                                    LN
                                </div>

                                <div>
                                    <p className="text-sm font-black tracking-[0.2em] text-[#0F2145]">
                                        LIFENICE
                                    </p>
                                    <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#0F2145]/60">
                                        Football Club
                                    </p>
                                </div>
                            </Link>

                            <button
                                type="button"
                                onClick={() => setSidebarOpen(false)}
                                className="inline-flex size-10 items-center justify-center rounded border border-[#0F2145]/15 bg-[#0F2145]/5 text-[#0F2145] transition hover:bg-[#0F2145]/10"
                                aria-label="Close sidebar menu"
                            >
                                <FaXmark size={20} />
                            </button>
                        </div>

                        <nav className="flex flex-1 flex-col gap-1 overflow-y-auto p-4">
                            {APP_HEADER_NAV_ITEMS.map((item) => {
                                const href = normalizeLocalizedHref(
                                    locale,
                                    item.href
                                )
                                const active = isActivePath(
                                    pathname,
                                    locale,
                                    item.href
                                )

                                return (
                                    <Link
                                        key={item.href}
                                        href={href}
                                        className={[
                                            "rounded px-4 py-3 text-sm font-semibold transition",
                                            active
                                                ? "bg-[#0F2145] text-white"
                                                : "text-[#0F2145]/70 hover:bg-[#0F2145]/5 hover:text-[#0F2145]",
                                        ].join(" ")}
                                    >
                                        {t(item.labelKey)}
                                    </Link>
                                )
                            })}
                        </nav>

                        <div className="space-y-4 border-t border-[#0F2145]/10 p-4">
                            <LanguageSwitcher />

                            <Link
                                href={signInHref}
                                className="inline-flex h-10 w-full items-center justify-center gap-2 rounded bg-[#0F2145] px-4 text-sm font-bold text-white transition hover:bg-[#0F2145]/90"
                            >
                                <FaRegUser size={16} />
                                {t("auth.signIn")}
                            </Link>
                        </div>
                    </aside>
                </div>
            ) : null}
        </>
    )
}
