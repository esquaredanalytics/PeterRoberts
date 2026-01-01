import { useMemo, useState } from "react";

export default function ContactForm() {
    const initialFormState = {
        name: "",
        email: "",
        phone: "",
        message: "",
        subscribe: true,
    };

    const [form, setForm] = useState(initialFormState);
    const [status, setStatus] = useState({ type: "idle", message: "" });

    const isValid = useMemo(() => {
        return (
            form.name.trim() !== "" &&
            form.email.trim() !== "" &&
            form.message.trim() !== ""
        );
    }, [form]);

    function onChange(e) {
        const { name, value, type, checked } = e.target;
        setForm((p) => ({ ...p, [name]: type === "checkbox" ? checked : value }));
    }

    async function onSubmit(e) {
        e.preventDefault();
        if (!isValid) return;

        // Start loading state
        setStatus({ type: "loading", message: "Sending..." });

        // Simulate an API call delay
        await new Promise((resolve) => setTimeout(resolve, 1500));

        setForm(initialFormState);

        setStatus({
            type: "success",
            message: "Your inquiry has been successfully submitted.",
        });

        setTimeout(() => {
            setStatus({ type: "idle", message: "" });
        }, 2000);
    }

    const inputBase =
        "mt-2 block w-full rounded-lg border border-black/10 bg-white px-4 py-4 text-base text-black " +
        "placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black/10 disabled:bg-gray-50 transition-all shadow-sm";

    const labelBase = "block text-sm font-semibold uppercase tracking-wider text-black/60";

    return (
        <section id="brands" className="py-16">
            <div className="mx-auto max-w-6xl px-4">
                <h2 className="text-3xl font-bold text-gray-900 pb-10">Contact Us</h2>

                <div className="w-full">
                    <form onSubmit={onSubmit} className="w-full space-y-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div>
                                <label className={labelBase} htmlFor="name">Name</label>
                                <input className={inputBase} id="name" name="name" type="text" value={form.name} onChange={onChange} disabled={status.type === "loading"} placeholder="Jane Doe" required />
                            </div>

                            <div>
                                <label className={labelBase} htmlFor="email">Email Address</label>
                                <input className={inputBase} id="email" name="email" type="email" value={form.email} onChange={onChange} disabled={status.type === "loading"} placeholder="jane@example.com" required />
                            </div>

                            <div>
                                <label className={labelBase} htmlFor="phone">Phone Number (Optional)</label>
                                <input className={inputBase} id="phone" name="phone" type="tel" value={form.phone} onChange={onChange} disabled={status.type === "loading"} placeholder="(555) 123-4567" />
                            </div>
                        </div>

                        <div>
                            <label className={labelBase} htmlFor="message">Message</label>
                            <textarea className={inputBase} id="message" name="message" rows={6} value={form.message} onChange={onChange} disabled={status.type === "loading"} placeholder="Describe your inquiry in detail..." required />
                        </div>

                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pt-4">
                            <div className="flex items-center gap-4">
                                <input id="subscribe" name="subscribe" type="checkbox" checked={form.subscribe} onChange={onChange} disabled={status.type === "loading"} className="h-6 w-6 rounded border-gray-300 text-black focus:ring-black cursor-pointer" />
                                <label htmlFor="subscribe" className="text-base font-medium text-gray-700 cursor-pointer select-none">
                                    Join our mailing list for news and style updates
                                </label>
                            </div>

                            <div className="flex flex-col items-end gap-4 min-w-[280px]">
                                {status.message && (
                                    <div className={`w-full rounded-md px-4 py-3 text-sm transition-all border ${status.type === "success" ? "bg-green-50 text-green-700 border-green-200" : status.type === "error" ? "bg-red-50 text-red-700 border-red-200" : "bg-blue-50 text-blue-700 border-blue-200"}`}>
                                        {status.message}
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={!isValid || status.type === "loading"}
                                    className="w-full md:w-auto inline-flex items-center justify-center rounded-lg bg-black px-12 py-5 text-base font-bold text-white hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-50 transition-all active:scale-[0.98] shadow-xl shadow-black/10"
                                >
                                    {status.type === "loading" ? "Sending..." : "Submit Inquiry"}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}