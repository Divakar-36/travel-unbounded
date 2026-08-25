"use client";

import { useEffect, useState } from "react";

type Enquiry = {
    _id: string;
    fullName: string;
    countryCode: string;
    contactNumber: string;
    email: string;
    travelDate: string;
    numberOfPeople: number;
    hotelCategory: string;
    numberOfChildren: number;
    createdAt: string;
};

export default function EnquiriesPage() {
    const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function fetchEnquiries() {
            try {
                const response = await fetch("/api/enquiry");

                if (!response.ok) {
                    throw new Error("Failed to fetch enquiries");
                }

                const data = await response.json();

                if (!data.success) {
                    throw new Error(data.message || "Failed to fetch enquiries");
                }

                setEnquiries(data.enquiries);
            } catch (error) {
                console.error(error);
                setError("Unable to load enquiries.");
            } finally {
                setLoading(false);
            }
        }

        fetchEnquiries();
    }, []);

    return (
        <main className="min-h-screen bg-gray-50 px-6 py-12">
            <div className="mx-auto max-w-7xl">
                {/* Header */}
                <div className="mb-10">
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
                        Admin Dashboard
                    </p>

                    <h1 className="mt-3 text-4xl font-bold text-gray-900">
                        Travel Enquiries
                    </h1>

                    <p className="mt-3 text-gray-600">
                        Manage customer travel enquiries submitted through the website.
                    </p>
                </div>

                {/* Statistics */}
                <div className="mb-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="rounded-2xl bg-white p-6 shadow-sm">
                        <p className="text-sm font-medium text-gray-500">
                            Total Enquiries
                        </p>

                        <p className="mt-2 text-3xl font-bold text-gray-900">
                            {enquiries.length}
                        </p>
                    </div>

                    <div className="rounded-2xl bg-white p-6 shadow-sm">
                        <p className="text-sm font-medium text-gray-500">
                            Total Travellers
                        </p>

                        <p className="mt-2 text-3xl font-bold text-gray-900">
                            {enquiries.reduce(
                                (total, enquiry) => total + enquiry.numberOfPeople,
                                0
                            )}
                        </p>
                    </div>

                    <div className="rounded-2xl bg-white p-6 shadow-sm">
                        <p className="text-sm font-medium text-gray-500">
                            Children
                        </p>

                        <p className="mt-2 text-3xl font-bold text-gray-900">
                            {enquiries.reduce(
                                (total, enquiry) => total + enquiry.numberOfChildren,
                                0
                            )}
                        </p>
                    </div>
                </div>

                {/* Loading */}
                {loading && (
                    <div className="rounded-2xl bg-white p-10 text-center shadow-sm">
                        <p className="text-gray-600">
                            Loading enquiries...
                        </p>
                    </div>
                )}

                {/* Error */}
                {!loading && error && (
                    <div className="rounded-2xl bg-red-50 p-6 text-red-700">
                        {error}
                    </div>
                )}

                {/* Empty */}
                {!loading && !error && enquiries.length === 0 && (
                    <div className="rounded-2xl bg-white p-10 text-center shadow-sm">
                        <h2 className="text-xl font-semibold text-gray-900">
                            No enquiries yet
                        </h2>

                        <p className="mt-2 text-gray-600">
                            Customer enquiries will appear here.
                        </p>
                    </div>
                )}

                {/* Enquiries */}
                {!loading && !error && enquiries.length > 0 && (
                    <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
                        <div className="overflow-x-auto">
                            <table className="min-w-full">
                                <thead className="bg-gray-100">
                                    <tr>
                                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                                            Customer
                                        </th>

                                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                                            Contact
                                        </th>

                                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                                            Travel Date
                                        </th>

                                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                                            People
                                        </th>

                                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                                            Hotel
                                        </th>

                                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                                            Submitted
                                        </th>
                                    </tr>
                                </thead>

                                <tbody className="divide-y divide-gray-200">
                                    {enquiries.map((enquiry) => (
                                        <tr
                                            key={enquiry._id}
                                            className="transition hover:bg-gray-50"
                                        >
                                            <td className="px-6 py-5">
                                                <p className="font-semibold text-gray-900">
                                                    {enquiry.fullName}
                                                </p>

                                                <p className="mt-1 text-sm text-gray-500">
                                                    {enquiry.email}
                                                </p>
                                            </td>

                                            <td className="px-6 py-5">
                                                <p className="text-gray-900">
                                                    {enquiry.countryCode}{" "}
                                                    {enquiry.contactNumber}
                                                </p>
                                            </td>

                                            <td className="px-6 py-5 text-gray-700">
                                                {new Date(
                                                    enquiry.travelDate
                                                ).toLocaleDateString("en-IN")}
                                            </td>

                                            <td className="px-6 py-5 text-gray-700">
                                                {enquiry.numberOfPeople}
                                                {enquiry.numberOfChildren > 0 && (
                                                    <span className="ml-2 text-sm text-gray-500">
                                                        ({enquiry.numberOfChildren} children)
                                                    </span>
                                                )}
                                            </td>

                                            <td className="px-6 py-5">
                                                <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
                                                    {enquiry.hotelCategory}
                                                </span>
                                            </td>

                                            <td className="px-6 py-5 text-sm text-gray-500">
                                                {new Date(
                                                    enquiry.createdAt
                                                ).toLocaleDateString("en-IN")}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
}