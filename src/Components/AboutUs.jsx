import erik from "../assets/erik.jpg";

export default function AboutUs() {
    return (
        <section id="aboutus" className="py-16">
            <div className="mx-auto max-w-6xl px-4">
                <h2 className="text-3xl font-bold text-gray-900">About Us</h2>

                {/* Top Section: Erik's Profile */}
                <div className="mt-12 flex flex-col gap-10 md:flex-row md:items-center">
                    <div className="relative shrink-0 self-center">
                        <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-white/20 to-transparent blur-sm" />
                        <div className="relative h-44 w-44 overflow-hidden rounded-full border-2 border-white/20 shadow-2xl transition-all duration-500 group-hover:border-white/40">
                            <img
                                src={erik}
                                alt="Erik"
                                className="h-full w-full object-cover grayscale transition-all duration-700 hover:grayscale-0 hover:scale-110"
                            />
                        </div>
                    </div>

                    <div className="relative flex-1 rounded-3xl border border-black/10 bg-white p-8 shadow-2xl">
                        <h3 className="text-xl font-semibold text-black">Meet Erik</h3>
                        <p className="mt-2 text-lg leading-relaxed text-black/90 italic">
                            "You can buy fashion; but you can’t buy style."
                        </p>
                        <p className="mt-3 text-sm text-black/60 leading-relaxed font-light tracking-wide">
                            Erik brings a passion for timeless style and exceptional service to every client
                            interaction, ensuring a wardrobe that transcends trends.
                        </p>
                    </div>
                </div>

                {/* 3D Tour Section */}
                <div className="mt-16 overflow-hidden rounded-2xl border border-black/10 shadow-lg">
                    <div className="aspect-video w-full">
                        <iframe
                            className="h-full w-full"
                            src="https://my.matterport.com/show/?m=8KC8jPJ5hKW&brand=0"
                            title="Peter Roberts 3D Tour"
                            allowFullScreen
                            allow="xr-spatial-tracking; fullscreen"
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}