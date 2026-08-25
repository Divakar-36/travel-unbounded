export const metadata = {
    title: "About Us | Travel Unbounded",
    description:
        "Learn about Travel Unbounded, India's experiential travel experts with offices in Bengaluru, Kerala, and Nairobi.",
};

const offices = [
    {
        city: "Bengaluru — Headquarters",
        address: "541, 7th Main Rd, HAL 2nd Stage",
        location: "Indiranagar, Bengaluru – 560008",
        country: "India",
    },
    {
        city: "Kochi — Kerala Office",
        address: "LR Towers, S Janatha Road",
        location: "Palavivatton, Kochi – 682025",
        country: "India",
    },
    {
        city: "Nairobi — Kenya Office",
        address: "Westpark Towers, Muthithi Road",
        location: "Nairobi, P.O. Box 6950, Postal Code 00100",
        country: "Kenya",
    },
];

const values = [
    {
        title: "Personally-Vetted Experiences",
        description:
            "Every destination, resort, and activity we recommend is carefully evaluated by our travel experts.",
    },
    {
        title: "Local Guides",
        description:
            "We work with trusted local experts who understand the destination and help you experience it authentically.",
    },
    {
        title: "Custom Itineraries",
        description:
            "Your journey is designed around your interests, travel style, budget, and expectations.",
    },
    {
        title: "24x7 Support",
        description:
            "Our team remains available throughout your journey so you can travel with confidence.",
    },
];

export default function AboutPage() {
    return (
        <main>
            <section className="bg-gray-950 px-6 py-24 text-white">
                <div className="mx-auto max-w-5xl text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">
                        About Travel Unbounded
                    </p>

                    <h1 className="mt-5 text-5xl font-bold sm:text-6xl">
                        India's Most Trusted Experiential Travel Experts
                    </h1>

                    <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-300">
                        We believe the best journeys aren't simply selected from a
                        catalogue. They are thoughtfully created around the people taking
                        them.
                    </p>
                </div>
            </section>

            <section className="px-6 py-20">
                <div className="mx-auto max-w-5xl">
                    <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
                                Our Story
                            </p>

                            <h2 className="mt-3 text-4xl font-bold text-gray-900">
                                Journeys Built Around You
                            </h2>
                        </div>

                        <div className="space-y-5 text-lg leading-8 text-gray-600">
                            <p>
                                Travel Unbounded was born from a simple belief — that the best
                                journeys aren't sold from a catalogue. They're built around
                                the people taking them.
                            </p>

                            <p>
                                Headquartered in Bangalore with offices in Kerala and Nairobi,
                                we design trips that blend comfort, culture, and raw nature.
                                Every destination, resort, and activity we recommend has been
                                personally experienced by our team.
                            </p>

                            <p>
                                From spotting the Big Five at dawn in the Masai Mara to
                                cruising Ha Long Bay at sunset — we go where real stories are
                                written, and we bring you along.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-gray-50 px-6 py-20">
                <div className="mx-auto max-w-7xl">
                    <div className="text-center">
                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
                            Where We Are
                        </p>

                        <h2 className="mt-3 text-4xl font-bold text-gray-900">
                            Our Offices
                        </h2>

                        <p className="mx-auto mt-4 max-w-2xl text-gray-600">
                            Our teams across India and Africa help us create authentic
                            experiences for travellers around the world.
                        </p>
                    </div>

                    <div className="mt-12 grid gap-8 md:grid-cols-3">
                        {offices.map((office) => (
                            <div
                                key={office.city}
                                className="rounded-2xl bg-white p-8 shadow-md ring-1 ring-gray-200"
                            >
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-xl">
                                    📍
                                </div>

                                <h3 className="mt-6 text-xl font-bold text-gray-900">
                                    {office.city}
                                </h3>

                                <p className="mt-4 leading-7 text-gray-600">
                                    {office.address}
                                    <br />
                                    {office.location}
                                    <br />
                                    {office.country}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="px-6 py-20">
                <div className="mx-auto max-w-7xl">
                    <div className="text-center">
                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
                            Why Travel With Us
                        </p>

                        <h2 className="mt-3 text-4xl font-bold text-gray-900">
                            Why Choose Us?
                        </h2>
                    </div>

                    <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {values.map((value) => (
                            <div
                                key={value.title}
                                className="rounded-2xl border border-gray-200 p-7 transition hover:-translate-y-1 hover:shadow-lg"
                            >
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-xl text-white">
                                    ✓
                                </div>

                                <h3 className="mt-6 text-xl font-bold text-gray-900">
                                    {value.title}
                                </h3>

                                <p className="mt-4 leading-7 text-gray-600">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-gray-950 px-6 py-20 text-center text-white">
                <div className="mx-auto max-w-3xl">
                    <h2 className="text-4xl font-bold">
                        Let's Create Your Next Adventure
                    </h2>

                    <p className="mt-5 leading-7 text-gray-300">
                        Whether you're planning a relaxing holiday or an extraordinary
                        adventure, our travel experts are ready to help.
                    </p>

                    <a
                        href="/contact"
                        className="mt-8 inline-block rounded-full bg-blue-600 px-7 py-3.5 font-semibold transition hover:bg-blue-700"
                    >
                        Plan Your Trip
                    </a>
                </div>
            </section>
        </main>
    );
}