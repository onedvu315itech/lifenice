import { useTranslations } from "next-intl"
import { FaFire, FaFlagCheckered, FaPeopleGroup } from "react-icons/fa6"

const MOMENT_ICONS = [FaPeopleGroup, FaFire, FaFlagCheckered]

export function FeaturedMoments() {
    const t = useTranslations("home")

    return (
        <section id="moments" className="bg-white px-4 py-20 sm:px-6 lg:px-10 xl:px-16">
            <div className="mx-auto grid max-w-full gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
                <div className="relative min-h-112 overflow-hidden rounded bg-[#0F2145] p-6 shadow-2xl shadow-[#0F2145]/15">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.28),transparent_30%),radial-gradient(circle_at_80%_80%,rgba(125,211,252,0.18),transparent_30%)]" />

                    <div className="relative flex h-full min-h-100 flex-col justify-between rounded border border-white/10 bg-white/5 p-6">
                        <div className="flex items-center justify-between">
                            <p className="text-sm font-black uppercase tracking-[0.3em] text-sky-200">
                                {t("momentsCardEyebrow")}
                            </p>

                            <div className="grid h-12 w-12 place-items-center rounded bg-white text-sm font-black text-[#0F2145]">
                                LIF.
                            </div>
                        </div>

                        <div>
                            <h3 className="max-w-sm text-4xl font-black tracking-tight text-white sm:text-5xl">
                                {t("momentsCardTitle")}
                            </h3>

                            <p className="mt-4 max-w-md text-base leading-7 text-white/75">
                                {t("momentsCardDescription")}
                            </p>
                        </div>
                    </div>
                </div>

                <div>
                    <p className="text-sm font-black uppercase tracking-[0.28em] text-sky-600">
                        {t("momentsEyebrow")}
                    </p>

                    <h2 className="mt-4 text-3xl font-black tracking-tight text-[#0F2145] sm:text-4xl lg:text-5xl">
                        {t("momentsTitle")}
                    </h2>

                    <div className="mt-8 space-y-4">
                        {MOMENT_ICONS.map((Icon, index) => (
                            <article
                                key={t(`momentsItem${index + 1}Title`)}
                                className="flex gap-4 rounded border border-[#0F2145]/10 bg-white p-5 shadow-sm"
                            >
                                <div className="grid h-12 w-12 shrink-0 place-items-center rounded bg-sky-50 text-sky-600">
                                    <Icon />
                                </div>

                                <div>
                                    <h3 className="font-black text-[#0F2145]">
                                        {t(`momentsItem${index + 1}Title`)}
                                    </h3>

                                    <p className="mt-2 text-sm leading-6 text-[#0F2145]/65">
                                        {t(`momentsItem${index + 1}Description`)}
                                    </p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
