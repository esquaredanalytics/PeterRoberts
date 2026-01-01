export default function Section({ id, children, tone = "light" }) {
    const bg =
        tone === "light"
            ? "bg-white"
            : tone === "soft"
                ? "bg-slate-50"
                : "bg-black";

    const text = tone === "dark" ? "text-white" : "text-slate-900";

    return (
        <section id={id} className={`${bg} ${text} py-4 sm:py-8`}>
            <div className="mx-auto max-w-6xl px-4">{children}</div>
        </section>
    );
}