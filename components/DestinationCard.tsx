import Image from "next/image";
import Link from "next/link";
import { Destination } from "@/data/destinations";

type DestinationCardProps = {
    destination: Destination;
};

export default function DestinationCard({
    destination,
}: DestinationCardProps) {
    return (
        <article className="group overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-gray-200 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="relative h-64 overflow-hidden">
                <Image
                    src={destination.image}
                    alt={destination.name}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                <div className="absolute left-4 top-4 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                    {destination.country}
                </div>
            </div>

            <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900">
                    {destination.name}
                </h3>

                <p className="mt-3 min-h-20 text-sm leading-6 text-gray-600">
                    {destination.description}
                </p>

                <div className="mt-5">
                    <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
                        Starting from
                    </p>

                    <p className="mt-1 text-xl font-bold text-blue-600">
                        {destination.price}
                    </p>
                </div>

                <Link
                    href="/contact"
                    className="mt-5 block rounded-full bg-gray-900 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-blue-600"
                >
                    Enquire Now
                </Link>
            </div>
        </article>
    );
}