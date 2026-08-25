import Link from "next/link";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white">
            <section className="bg-gray-950 px-6 py-24 text-white">
                <div className="mx-auto max-w-5xl">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">
                        About Travel Unbounded
                    </p>

                    <h1 className="mt-5 text-5xl font-bold leading-tight sm:text-6xl">
                        We Create Journeys, Not Just Trips
                    </h1>

                    <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-300">
                        Travel Unbounded is an experiential travel company focused on
                        creating memorable journeys across India and destinations around
                        the world.
                    </p>
                </div>
            </section>

            <section className="px-6 py-20">
                <div className="mx-auto max-w-5xl">
                    <div className="grid gap-12 md:grid-cols-2">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900">
                                Who We Are
                            </h2>

                            <p className="mt-5 leading-8 text-gray-600">
                                We believe travel should be personal, comfortable, exciting,
                                and meaningful. Our team helps travelers discover destinations
                                through thoughtfully planned experiences.
                            </p>

                            <p className="mt-5 leading-8 text-gray-600">
                                From family holidays and romantic getaways to adventure trips
                                and international escapes, we design journeys around what
                                matters most to you.
                            </p>
                        </div>

                        <div className="rounded-2xl bg-gray-50 p-8">
                            <h2 className="text-3xl font-bold text-gray-900">
                                Why Travel Unbounded?
                            </h2>

                            <ul className="mt-6 space-y-4 text-gray-600">
                                <li>✓ Personalized travel planning</li>
                                <li>✓ Carefully selected destinations</li>
                                <li>✓ Comfortable accommodation options</li>
                                <li>✓ Experiences designed around you</li>
                                <li>✓ Support throughout your journey</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-gray-50 px-6 py-20">
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="text-4xl font-bold text-gray-900">
                        Ready to Start Your Journey?
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-gray-600">
                        Tell us where you want to go and our travel experts will help
                        create your perfect trip.
                    </p>

                    <Link
                        href="/contact"
                        className="mt-8 inline-block rounded-full bg-blue-600 px-7 py-3.5 font-semibold text-white transition hover:bg-blue-700"
                    >
                        Plan Your Trip
                    </Link>
                </div>
            </section>
        </main>
    );
}