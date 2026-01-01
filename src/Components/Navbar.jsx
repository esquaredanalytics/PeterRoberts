import { useState } from "react";
import logo from "../assets/logo.png";

const LINKS = [
    { label: "Discover Your Style", href: "#discover" },
    { label: "About Us", href: "#aboutus" },
    { label: "Our Brands", href: "#brands" },
    { label: "Contact Us", href: "#contactus" },
    { label: "Shop Online", href: "https://peter-roberts-inc-online-store.myshopify.com/" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="fixed inset-x-0 top-0 z-50">
            <nav className="border-b border-gray-200 bg-white">
                <div className="mx-auto max-w-6xl px-4">
                    <div className="flex h-20 items-center justify-start">
                        <a href="#" className="flex items-center">
                            <img
                                src={logo}
                                alt="Peter Roberts"
                                className="h-10 w-auto object-contain"
                            />
                        </a>

                        <div className="hidden items-center gap-8 md:flex ml-10">
                            {LINKS.map((l) => (
                                <a
                                    key={l.href}
                                    href={l.href}
                                    className="text-base font-bold text-black/80 hover:text-black"
                                >
                                    {l.label}
                                </a>
                            ))}
                        </div>

                        <div className="ml-auto md:hidden">
                            <button
                                className="inline-flex items-center justify-center rounded-xl p-2 hover:bg-gray-100"
                                onClick={() => setOpen((v) => !v)}
                                aria-label="Toggle menu"
                                aria-expanded={open}
                            >
                                <div className="grid gap-1">
                                    <span
                                        className={`block h-0.5 w-6 bg-black transition ${open ? "translate-y-1.5 rotate-45" : ""
                                            }`}
                                    />
                                    <span
                                        className={`block h-0.5 w-6 bg-black transition ${open ? "opacity-0" : ""
                                            }`}
                                    />
                                    <span
                                        className={`block h-0.5 w-6 bg-black transition ${open ? "-translate-y-1.5 -rotate-45" : ""
                                            }`}
                                    />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>

                {open && (
                    <div className="md:hidden border-t border-gray-200 bg-white">
                        <div className="mx-auto max-w-6xl px-4 py-3 space-y-1">
                            {LINKS.map((l) => (
                                <a
                                    key={l.href}
                                    href={l.href}
                                    onClick={() => setOpen(false)}
                                    className="block rounded-lg px-3 py-2 text-base font-semibold text-black/80 hover:bg-gray-100 hover:text-black"
                                >
                                    {l.label}
                                </a>
                            ))}
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}
