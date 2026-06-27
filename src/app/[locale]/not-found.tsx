import Link from "next/link"
import { useLocale, useTranslations } from "next-intl"
import { FiHome, FiSearch } from "react-icons/fi"

export default function NotFoundPage() {
    const t = useTranslations("notFound")
    const locale = useLocale()

    return (
        <main className="flex min-h-[70vh] w-full items-center justify-center bg-white px-6 py-20 text-[#0F2145]">
            <section className="flex w-full max-w-3xl flex-col items-center text-center">
                <div className="mb-6 flex size-16 items-center justify-center rounded bg-[#0F2145]/10">
                    <FiSearch className="size-8 text-[#0F2145]" />
                </div>

                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-[#0F2145]/60">
                    {t("eyebrow")}
                </p>

                <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
                    404
                </h1>

                <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
                    {t("title")}
                </h2>

                <p className="mt-5 max-w-2xl text-base leading-7 text-[#0F2145]/70 md:text-lg">
                    {t("description")}
                </p>

                <div className="mt-8">
                    <Link
                        href={`/${locale}`}
                        className="inline-flex items-center justify-center gap-2 rounded bg-[#0F2145] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0F2145]/90"
                    >
                        <FiHome className="size-4" />
                        {t("backHome")}
                    </Link>
                </div>
            </section>
        </main>
    )
}
