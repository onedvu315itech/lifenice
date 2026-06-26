import { useTranslations } from "next-intl"

const GALLERY_ITEMS = [
    "md:col-span-2",
    "",
    "",
    "md:col-span-2",
]

export function HomeGallery() {
    const t = useTranslations("home")

    return (
        <section id="gallery" className="bg-[#F7FAFF] px-4 py-20 sm:px-6 lg:px-10 xl:px-16">
            <div className="mx-auto max-w-full">
                <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
                    <div>
                        <p className="text-sm font-black uppercase tracking-[0.28em] text-sky-600">
                            {t("galleryEyebrow")}
                        </p>

                        <h2 className="mt-4 max-w-2xl text-3xl font-black tracking-tight text-[#0F2145] sm:text-4xl lg:text-5xl">
                            {t("galleryTitle")}
                        </h2>
                    </div>

                    <p className="max-w-md text-base leading-7 text-[#0F2145]/70">
                        {t("galleryDescription")}
                    </p>
                </div>

                <div className="mt-10 grid gap-5 md:grid-cols-3">
                    {GALLERY_ITEMS.map((className, index) => (
                        <article
                            key={t(`galleryItem${index + 1}Title`)}
                            className={[
                                "group relative min-h-72 overflow-hidden rounded border border-[#0F2145]/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl",
                                className,
                            ].join(" ")}
                        >
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.16),transparent_34%)] opacity-0 transition group-hover:opacity-100" />

                            <div className="relative z-10 flex h-full flex-col justify-between">
                                <div className="grid h-12 w-12 place-items-center rounded bg-[#0F2145] text-sm font-black text-white">
                                    {String(index + 1).padStart(2, "0")}
                                </div>

                                <div>
                                    <h3 className="text-2xl font-black text-[#0F2145]">
                                        {t(`galleryItem${index + 1}Title`)}
                                    </h3>

                                    <p className="mt-3 max-w-sm text-sm leading-6 text-[#0F2145]/65">
                                        {t(`galleryItem${index + 1}Description`)}
                                    </p>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}
