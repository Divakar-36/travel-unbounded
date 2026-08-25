import Link from "next/link";

const quickLinks = [
    {
        name: "Home",
        href: "/",
    },
    {
        name: "About",
        href: "/about",
    },
    {
        name: "Contact",
        href: "/contact",
    },
];

const destinations = [
    "Kerala",
    "Himachal Pradesh",
    "Ladakh",
    "Kenya",
    "Vietnam",
    "Iceland",
];

export default function Footer() {
    return (
        <footer className="bg-gray-950 text-white">
            <div className="mx-auto max-w-7xl px-6 py-16">
                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
                    <div className="lg:col-span-1">
                        <Link href="/" className="text-2xl font-bold">
                            Travel <span className="text-blue-500">Unbounded</span>
                        </Link>

                        <p className="mt-5 leading-7 text-gray-400">
                            India's Most Trusted Experiential Travel Experts. We create
                            journeys around people, places, culture, comfort, and adventure.
                        </p>

                        <Link
                            href="/contact"
                            className="mt-6 inline-block rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold transition hover:bg-blue-700"
                        >
                            Plan Your Trip
                        </Link>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold">Quick Links</h3>

                        <ul className="mt-5 space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 transition hover:text-white"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold">Popular Destinations</h3>

                        <ul className="mt-5 space-y-3">
                            {destinations.map((destination) => (
                                <li key={destination} className="text-gray-400">
                                    {destination}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold">Our Offices</h3>

                        <div className="mt-5 space-y-5 text-sm leading-6 text-gray-400">
                            <div>
                                <p className="font-semibold text-gray-200">
                                    Bengaluru — Headquarters
                                </p>
                                <p>541, 7th Main Rd, HAL 2nd Stage</p>
                                <p>Indiranagar, Bengaluru – 560008</p>
                                <p>India</p>
                            </div>

                            <div>
                                <p className="font-semibold text-gray-200">
                                    Kochi — Kerala Office
                                </p>
                                <p>LR Towers, S Janatha Road</p>
                                <p>Palavivatton, Kochi – 682025</p>
                                <p>India</p>
                            </div>

                            <div>
                                <p className="font-semibold text-gray-200">
                                    Nairobi — Kenya Office
                                </p>
                                <p>Westpark Towers, Muthithi Road</p>
                                <p>Nairobi, P.O. Box 6950</p>
                                <p>Postal Code 00100, Kenya</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-14 border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
                    © {new Date().getFullYear()} Travel Unbounded. All rights reserved.
                </div>
            </div>
        </footer>
    );
}