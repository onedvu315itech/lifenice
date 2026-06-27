"use client"

import Image from "next/image"
import Link from "next/link"
import { useLocale, useTranslations } from "next-intl"

import type { Locale } from "@/shared/i18n/routing"

import {
    APP_FOOTER_GROUPS,
    APP_FOOTER_LEGAL_LINKS,
    APP_FOOTER_SOCIAL_LINKS,
    APP_FOOTER_SPONSORS,
} from "./constants"

function normalizeLocalizedHref(locale: Locale, href: string) {
    if (href.startsWith("http")) return href
    if (href.startsWith("#")) return href
    if (href === "/") return `/${locale}`

    return `/${locale}${href.startsWith("/") ? href : `/${href}`}`
}

export function AppFooter() {
    const t = useTranslations("footer")
    const locale = useLocale() as Locale
    const currentYear = new Date().getFullYear()

    return (
        <footer className="border-t border-[#0F2145]/10 bg-white text-[#0F2145]">
            <div className="mx-auto max-w-screen px-4 py-10 sm:px-6 lg:px-8">
                <div className="flex flex-col gap-8 border-b border-[#0F2145]/10 pb-8 lg:flex-row lg:items-center lg:justify-between">
                    <div>
                        <Link
                            href={normalizeLocalizedHref(locale, "/")}
                            aria-label="LIFENICE home"
                            className="inline-flex items-center gap-3"
                        >
                            <div className="flex size-12 items-center justify-center rounded bg-[#0F2145] text-base font-black tracking-tight text-white">
                                LIF.
                            </div>

                            <div className="leading-none">
                                <p className="text-base font-black tracking-[0.22em] text-[#0F2145]">
                                    LIFENICE
                                </p>
                                <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#0F2145]/60">
                                    Football Club
                                </p>
                            </div>
                        </Link>

                        <p className="mt-4 max-w-xl text-sm leading-6 text-[#0F2145]/70">
                            {t("description")}
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-3">
                        {APP_FOOTER_SOCIAL_LINKS.map(
                            ({ label, href, icon: Icon }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label={label}
                                    className="flex size-10 items-center justify-center rounded-full border border-[#0F2145]/15 bg-[#0F2145]/5 text-[#0F2145] transition hover:bg-[#0F2145] hover:text-white"
                                >
                                    <Icon size={18} />
                                </a>
                            )
                        )}
                    </div>
                </div>

                <div className="grid gap-8 border-b border-[#0F2145]/10 py-10 sm:grid-cols-2 lg:grid-cols-4">
                    {APP_FOOTER_GROUPS.map((group) => (
                        <nav key={group.titleKey} aria-label={t(group.titleKey)}>
                            <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-[#0F2145]">
                                {t(group.titleKey)}
                            </h3>

                            <ul className="mt-4 space-y-3">
                                {group.links.map((link) => (
                                    <li key={link.href}>
                                        <Link
                                            href={normalizeLocalizedHref(locale, link.href)}
                                            className="text-sm text-[#0F2145]/65 transition hover:text-[#0F2145]"
                                        >
                                            {t(link.labelKey)}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    ))}
                </div>

                <section
                    aria-labelledby="app-footer-sponsors-title"
                    className="border-b border-[#0F2145]/10 py-8"
                >
                    <div className="mb-5 flex items-center justify-between gap-4">
                        <h2
                            id="app-footer-sponsors-title"
                            className="text-sm font-bold uppercase tracking-[0.18em] text-[#0F2145]"
                        >
                            {t("sponsorsTitle")}
                        </h2>

                        <Link
                            href={normalizeLocalizedHref(locale, "/partners")}
                            className="text-sm font-semibold text-[#0F2145]/65 transition hover:text-[#0F2145]"
                        >
                            {t("viewAllPartners")}
                        </Link>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-x-14 gap-y-8">
                        {APP_FOOTER_SPONSORS.map((sponsor) => {
                            const sponsorLogo = (
                                <Image
                                    src={sponsor.logo}
                                    alt={sponsor.name}
                                    width={360}
                                    height={120}
                                    className="h-16 w-auto object-contain opacity-90 transition hover:opacity-100 sm:h-20 lg:h-24"
                                />
                            )

                            if (!sponsor.href) {
                                return (
                                    <div
                                        key={sponsor.name}
                                        className="flex items-center"
                                    >
                                        {sponsorLogo}
                                    </div>
                                )
                            }

                            if (sponsor.href.startsWith("http")) {
                                return (
                                    <a
                                        key={sponsor.name}
                                        href={sponsor.href}
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label={sponsor.name}
                                        className="flex items-center"
                                    >
                                        {sponsorLogo}
                                    </a>
                                )
                            }

                            return (
                                <Link
                                    key={sponsor.name}
                                    href={normalizeLocalizedHref(
                                        locale,
                                        sponsor.href
                                    )}
                                    aria-label={sponsor.name}
                                    className="flex items-center"
                                >
                                    {sponsorLogo}
                                </Link>
                            )
                        })}
                    </div>
                </section>

                <div className="flex flex-col gap-4 pt-6 text-sm text-[#0F2145]/65 md:flex-row md:items-center md:justify-between">
                    <p>
                        © {currentYear} LIFENICE. {t("copyright")}
                    </p>

                    <div className="flex flex-wrap gap-x-5 gap-y-2">
                        {APP_FOOTER_LEGAL_LINKS.map((link) => (
                            <Link
                                key={link.href}
                                href={normalizeLocalizedHref(locale, link.href)}
                                className="transition hover:text-[#0F2145]"
                            >
                                {t(link.labelKey)}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}
