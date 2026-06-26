import { useTranslations } from "next-intl"

const IDENTITY_ITEMS = ["01", "02", "03"]

export function TeamIdentity() {
    const t = useTranslations("home")

    return (
        <section id="identity" className="bg-[#F7FAFF] px-4 py-20 sm:px-6 lg:px-10 xl:px-16">
            <div className="mx-auto max-w-full">
                <div className="mx-auto max-w-3xl text-center">
                    <p className="text-sm font-black uppercase tracking-[0.28em] text-sky-600">
                        {t("identityEyebrow")}
                    </p>

                    <h2 className="mt-4 text-3xl font-black tracking-tight text-[#0F2145] sm:text-4xl lg:text-5xl">
                        {t("identityTitle")}
                    </h2>

                    <p className="mt-5 text-base leading-8 text-[#0F2145]/70 sm:text-lg">
                        {t("identityDescription")}
                    </p>
                </div>

                <div className="mt-12 grid gap-5 md:grid-cols-3">
                    {IDENTITY_ITEMS.map((label, index) => (
                        <article
                            key={label}
                            className="group rounded border border-[#0F2145]/10 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                        >
                            <p className="text-5xl font-black text-[#0F2145]/10 transition group-hover:text-sky-200">
                                {label}
                            </p>

                            <h3 className="mt-8 text-2xl font-black text-[#0F2145]">
                                {t(`identityItem${index + 1}Title`)}
                            </h3>

                            <p className="mt-4 text-sm leading-7 text-[#0F2145]/65">
                                {t(`identityItem${index + 1}Description`)}
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}
