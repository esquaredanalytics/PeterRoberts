import brands from "../Config/brands.json";

export default function Brands() {
    return (
        <section id="brands" className="py-16">
            <div className="mx-auto max-w-6xl px-4">
                <h2 className="text-3xl font-bold text-gray-900">Our Brands</h2>

                <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
                    {brands.map((b, i) => (
                        <a
                            key={b.url ?? i}
                            href={b.url}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={b.alt}
                            title={b.alt}
                            className="group flex h-28 items-center justify-center overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 p-2 transition hover:bg-white hover:shadow-sm"
                        >
                            <img
                                src={b.logo}
                                alt={b.alt || "Brand logo"}
                                loading="lazy"
                                className="h-full w-full object-contain opacity-80 transition group-hover:opacity-100"
                            />
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}

