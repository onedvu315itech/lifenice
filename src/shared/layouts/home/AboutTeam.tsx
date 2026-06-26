import { useTranslations } from "next-intl"
import { FaBolt, FaHeart, FaSnowflake } from "react-icons/fa6"

const VALUE_ICONS = [FaSnowflake, FaBolt, FaHeart]

export function AboutTeam() {
    const t = useTranslations("home")

    return (
        <section id="about" className="bg-white px-4 py-20 sm:px-6 lg:px-10 xl:px-16">
            <div className="mx-auto grid max-w-full gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                <div>
                    <p className="text-sm font-black uppercase tracking-[0.28em] text-sky-600">
                        {t("aboutEyebrow")}
                    </p>

                    <h2 className="mt-4 text-3xl font-black tracking-tight text-[#0F2145] sm:text-4xl lg:text-5xl">
                        {t("aboutTitle")}
                    </h2>

                    <p className="mt-6 text-base leading-8 text-[#0F2145]/70 sm:text-lg">
                        {t("aboutDescription")}
                    </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                    {VALUE_ICONS.map((Icon, index) => (
                        <article
                            key={t(`aboutValue${index + 1}Title`)}
                            className="rounded border border-[#0F2145]/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                        >
                            <div className="grid h-12 w-12 place-items-center rounded bg-sky-50 text-sky-600">
                                <Icon />
                            </div>

                            <h3 className="mt-5 text-lg font-black text-[#0F2145]">
                                {t(`aboutValue${index + 1}Title`)}
                            </h3>

                            <p className="mt-3 text-sm leading-6 text-[#0F2145]/65">
                                {t(`aboutValue${index + 1}Description`)}
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}
