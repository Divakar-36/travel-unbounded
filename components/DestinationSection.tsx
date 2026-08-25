import DestinationCard from "@/components/DestinationCard";
import type { Destination } from "@/data/destinations";

type DestinationSectionProps = {
    title: string;
    description: string;
    destinations: Destination[];
};

export default function DestinationSection({
    title,
    description,
    destinations,
}: DestinationSectionProps) {
    return (
        <section className="py-20">
            <div className="mx-auto max-w-7xl px-6">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                        {title}
                    </h2>

                    <p className="mt-4 text-gray-600">
                        {description}
                    </p>
                </div>

                <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {destinations.map((destination) => (
                        <DestinationCard
                            key={destination.id}
                            destination={destination}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}