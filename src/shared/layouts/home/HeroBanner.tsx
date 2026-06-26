import { useTranslations } from "next-intl"
import { FaArrowRight, FaShieldHalved } from "react-icons/fa6"

export function HeroBanner() {
    const t = useTranslations("home")

    return (
        <section className="relative overflow-hidden bg-white">
            <div className="absolute inset-0 bg-[linear-gradient(120deg,_rgba(15,33,69,0.06),_rgba(77,177,255,0.12),_rgba(255,255,255,1))]" />

            <div className="relative mx-auto grid min-h-[calc(100vh-4rem)] max-w-full items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 xl:px-16">
                <div>
                    <div className="mb-6 inline-flex items-center gap-2 rounded border border-[#0F2145]/10 bg-white px-4 py-2 text-sm font-semibold text-[#0F2145] shadow-sm">
                        <FaShieldHalved className="text-sky-500" />
                        {t("heroEyebrow")}
                    </div>

                    <h1 className="max-w-4xl text-5xl font-black tracking-tight text-[#0F2145] sm:text-6xl lg:text-7xl">
                        {t("heroTitle")}
                    </h1>

                    <p className="mt-5 max-w-2xl text-xl font-semibold text-[#0F2145]/80 sm:text-2xl">
                        {t("heroSubtitle")}
                    </p>

                    <p className="mt-5 max-w-2xl text-base leading-8 text-[#0F2145]/70 sm:text-lg">
                        {t("heroDescription")}
                    </p>

                    <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                        <a
                            href="#about"
                            className="inline-flex items-center justify-center gap-2 rounded bg-[#0F2145] px-7 py-3.5 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-sky-600"
                        >
                            {t("heroPrimaryAction")}
                            <FaArrowRight />
                        </a>

                        <a
                            href="#gallery"
                            className="inline-flex items-center justify-center rounded border border-[#0F2145]/15 bg-white px-7 py-3.5 text-sm font-black text-[#0F2145] transition hover:-translate-y-0.5 hover:border-sky-500 hover:text-sky-600"
                        >
                            {t("heroSecondaryAction")}
                        </a>
                    </div>
                </div>

                <div className="relative mx-auto w-full max-w-xl">
                    <div className="rounded border border-[#0F2145]/10 bg-white p-4 shadow-2xl shadow-[#0F2145]/10">
                        <div className="rounded border border-[#0F2145]/10 bg-[#0F2145] p-8 text-white">
                            <div className="flex min-h-104 flex-col items-center justify-center text-center">
                                <div className="grid h-32 w-32 place-items-center rounded bg-white text-4xl font-black tracking-tighter text-[#0F2145] sm:h-40 sm:w-40 sm:text-5xl">
                                    LIF.
                                </div>

                                <p className="mt-8 text-sm font-black uppercase tracking-[0.45em] text-sky-200">
                                    {t("heroClubLabel")}
                                </p>

                                <p className="mt-3 text-2xl font-black text-white sm:text-3xl">
                                    {t("heroClubName")}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="absolute -bottom-5 left-5 hidden rounded border border-[#0F2145]/10 bg-white px-5 py-4 text-[#0F2145] shadow-lg md:block">
                        <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#0F2145]/50">
                            {t("heroMentalityLabel")}
                        </p>
                        <p className="mt-1 text-lg font-black">
                            {t("heroMentalityValue")}
                        </p>
                    </div>

                    <div className="absolute -right-2 -top-5 hidden rounded border border-[#0F2145]/10 bg-white px-5 py-4 text-[#0F2145] shadow-lg md:block">
                        <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#0F2145]/50">
                            {t("heroStyleLabel")}
                        </p>
                        <p className="mt-1 text-lg font-black">
                            {t("heroStyleValue")}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
