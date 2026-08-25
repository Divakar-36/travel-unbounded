import Link from "next/link";

export default function Hero() {
    return (
        <section
            className="relative min-h-[650px] bg-cover bg-center"
            style={{
                backgroundImage:
                    "url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=2000&q=85')",
            }}
        >
            <div className="absolute inset-0 bg-black/55" />

            <div className="relative mx-auto flex min-h-[650px] max-w-7xl items-center px-6">
                <div className="max-w-3xl text-white">
                    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-200">
                        Travel Unbounded
                    </p>

                    <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-7xl">
                        India's Most Trusted Experiential Travel Experts
                    </h1>

                    <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-200 sm:text-xl">
                        Discover journeys built around you, blending comfort, culture,
                        adventure, and unforgettable experiences.
                    </p>

                    <Link
                        href="/contact"
                        className="mt-8 inline-block rounded-full bg-blue-600 px-7 py-3.5 font-semibold text-white transition hover:bg-blue-700"
                    >
                        Plan Your Trip
                    </Link>
                </div>
            </div>
        </section>
    );
}