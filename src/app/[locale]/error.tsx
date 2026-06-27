"use client"

import Link from "next/link"
import { useTranslations } from "next-intl"
import { useEffect } from "react"
import { FiAlertTriangle, FiRefreshCw } from "react-icons/fi"

type ErrorPageProps = {
    error: Error & { digest?: string }
    reset: () => void
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
    const t = useTranslations("error")

    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <main className="flex min-h-[70vh] w-full items-center justify-center bg-white px-6 py-20 text-[#0F2145]">
            <section className="flex w-full max-w-3xl flex-col items-center text-center">
                <div className="mb-6 flex size-16 items-center justify-center rounded bg-[#0F2145]/10">
                    <FiAlertTriangle className="size-8 text-[#0F2145]" />
                </div>

                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-[#0F2145]/60">
                    {t("eyebrow")}
                </p>

                <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
                    {t("title")}
                </h1>

                <p className="mt-5 max-w-2xl text-base leading-7 text-[#0F2145]/70 md:text-lg">
                    {t("description")}
                </p>

                {error.digest ? (
                    <p className="mt-4 rounded bg-[#0F2145]/5 px-4 py-2 text-xs text-[#0F2145]/60">
                        {t("digest")}: {error.digest}
                    </p>
                ) : null}

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <button
                        type="button"
                        onClick={reset}
                        className="inline-flex items-center justify-center gap-2 rounded bg-[#0F2145] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0F2145]/90"
                    >
                        <FiRefreshCw className="size-4" />
                        {t("tryAgain")}
                    </button>

                    <Link
                        href="/"
                        className="inline-flex items-center justify-center rounded border border-[#0F2145]/20 px-6 py-3 text-sm font-semibold text-[#0F2145] transition hover:bg-[#0F2145]/5"
                    >
                        {t("backHome")}
                    </Link>
                </div>
            </section>
        </main>
    )
}
