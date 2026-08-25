import Link from "next/link";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur">
            <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6">
                <Link
                    href="/"
                    className="text-xl font-bold tracking-tight text-gray-950"
                >
                    Travel <span className="text-blue-600">Unbounded</span>
                </Link>

                <nav className="hidden items-center gap-8 md:flex">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-sm font-semibold text-gray-700 transition hover:text-blue-600"
                        >
                            {link.name}
                        </Link>
                    ))}

                    <Link
                        href="/contact"
                        className="rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
                    >
                        Plan Your Trip
                    </Link>
                </nav>

                <Link
                    href="/contact"
                    className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white md:hidden"
                >
                    Plan Trip
                </Link>
            </div>
        </header>
    );
}