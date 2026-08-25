import Link from "next/link";
import DestinationCard from "@/components/DestinationCard";
import {
  indiaDestinations,
  internationalDestinations,
} from "@/data/destinations";

export const metadata = {
  title: "Travel Unbounded | Experiential Travel Experts",
  description:
    "Discover unforgettable India and international travel experiences with Travel Unbounded.",
};

export default function Home() {
  return (
    <main>
      <section className="relative flex min-h-[75vh] items-center overflow-hidden text-white">
        <img
          src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=2000&q=85"
          alt="Beautiful mountain travel destination"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/55" />

        <div className="relative mx-auto w-full max-w-7xl px-6 py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">
              Travel Unbounded
            </p>

            <h1 className="mt-5 text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl">
              India's Most Trusted Experiential Travel Experts
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-200">
              From breathtaking landscapes to unforgettable cultural
              experiences, we create journeys designed around you.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-blue-600 px-7 py-3.5 font-semibold text-white transition hover:bg-blue-700"
              >
                Plan Your Trip
              </Link>

              <Link
                href="/about"
                className="rounded-full border border-white px-7 py-3.5 font-semibold text-white transition hover:bg-white hover:text-gray-900"
              >
                Discover Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
              Explore India
            </p>

            <h2 className="mt-3 text-4xl font-bold text-gray-900">
              Discover India
            </h2>

            <p className="mt-4 max-w-2xl text-gray-600">
              From peaceful backwaters to dramatic Himalayan landscapes,
              discover experiences across India's most beautiful destinations.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {indiaDestinations.map((destination) => (
              <DestinationCard
                key={destination.id}
                destination={destination}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
              Explore The World
            </p>

            <h2 className="mt-3 text-4xl font-bold text-gray-900">
              International Escapes
            </h2>

            <p className="mt-4 max-w-2xl text-gray-600">
              Go beyond borders and experience wildlife, culture, adventure,
              and extraordinary landscapes around the world.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {internationalDestinations.map((destination) => (
              <DestinationCard
                key={destination.id}
                destination={destination}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-950 px-6 py-20 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">
            Your Journey Starts Here
          </p>

          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
            Ready to Travel Unbounded?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-300">
            Tell us where you want to go and we'll help you create a journey
            designed around you.
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