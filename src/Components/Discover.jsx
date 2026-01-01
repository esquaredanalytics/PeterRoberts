import { HiOutlineClock, HiOutlineMapPin, HiOutlinePhone } from "react-icons/hi2";
import building from "../assets/building.webp"; 

export default function Discover() {
    return (
        <section className="w-full bg-white py-12 px-6 md:px-12 lg:px-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">

                <div className="flex flex-col justify-between h-full py-2">
                    <div>
                        <h3 className="text-3xl lg:text-4xl tracking-wider text-gray-900 font-serif uppercase">
                            Fit. Function. Fashion.
                        </h3>

                        <div className="mt-8 space-y-6 text-lg leading-relaxed text-gray-800 max-w-prose font-serif">
                            <p>
                                <span className="font-bold">At Peter Roberts</span>, we aim to provide customers with the top brands and
                                trends — whether it be clothing, shoes or shaving cream, Peter Roberts
                                delivers great quality and a comfortable service.
                            </p>

                            <p>
                                When you shop at Peter Roberts, you are investing in your image.
                                Whether you are looking for the perfect suit for your new job, or a
                                comfortable wardrobe for a weekend at the cottage, Peter Roberts is
                                ready for you, with the best brands the world has to offer.
                            </p>
                        </div>
                    </div>

                    {/* Hours Pinned to Bottom */}
                    <div className="mt-12 pt-8 border-t border-black/10">
                        <div className="flex items-center gap-3 text-gray-900">
                            <HiOutlineClock className="h-6 w-6 text-black/50" />
                            <p className="font-serif text-xl italic">
                                Open 9-5 Monday to Saturday
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-8 h-full">
                    <div className="flex-1 overflow-hidden rounded-2xl border border-black/10 shadow-lg">
                        <img
                            src={building} // Replace with your {building} variable
                            alt="Peter Roberts Store Front"
                            className="h-full w-full object-cover min-h-[250px]"
                        />
                    </div>

                    <div className="rounded-2xl border border-black/10 bg-gray-50 p-8">
                        <h3 className="text-xl font-semibold text-black mb-6">Visit Our Store</h3>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="flex items-start gap-4 text-gray-700">
                                <HiOutlineMapPin className="mt-1 h-6 w-6 shrink-0 text-black/60" />
                                <div>
                                    <p className="font-medium text-black">Address</p>
                                    <p className="text-sm leading-relaxed">
                                        155 Smythe Street <br />
                                        Fredericton, Canada
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 text-gray-700">
                                <HiOutlinePhone className="mt-1 h-6 w-6 shrink-0 text-black/60" />
                                <div>
                                    <p className="font-medium text-black">Phone</p>
                                    <a href="tel:+15064588476" className="text-sm hover:underline hover:text-black">
                                        (506) 458-8476
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}