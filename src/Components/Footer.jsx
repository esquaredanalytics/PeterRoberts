import { SiFacebook, SiInstagram } from "react-icons/si";

export default function Footer() {
    return (
        <footer className="relative w-full bg-black py-10">
            <div className="mx-auto w-full px-4">
                <div className="mx-auto rounded-2xl border border-white/10 bg-black px-6 py-10 shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_20px_60px_rgba(0,0,0,0.65)] md:px-10">
                    <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">

                        <div className="order-2 md:order-1">
                            <p className="text-sm text-white/60">
                                © {new Date().getFullYear()} Peter Roberts, Inc.
                            </p>
                        </div>

                        <div className="order-1 md:order-2 flex flex-col items-center text-center">
                            <p className="text-sm text-white/60">
                                155 Smythe St, Fredericton, Canada
                            </p>
                            <a
                                href="tel:+15064588476"
                                className="mt-1 text-sm text-white/70 hover:text-white transition-colors"
                            >
                                +1 506-458-8476
                            </a>
                        </div>

                        <div className="order-3 flex items-center gap-3 md:gap-5">
                            <SocialIcon
                                href="https://www.facebook.com/peterrobertsinc/"
                                label="Facebook"
                                Icon={SiFacebook}
                            />
                            <SocialIcon
                                href="https://www.instagram.com/peterrobertsinc/"
                                label="Instagram"
                                Icon={SiInstagram}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

function SocialIcon({ href, label, Icon }) {
    return (
        <a
            href={href}
            aria-label={label}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-white/60 transition hover:bg-white/5 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/20"
        >
            <Icon className="h-5 w-5" />
        </a>
    );
}