"use client";

import { FormEvent, useState } from "react";

type FormData = {
    fullName: string;
    countryCode: string;
    contactNumber: string;
    email: string;
    travelDate: string;
    numberOfPeople: string;
    hotelCategory: string;
    numberOfChildren: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const initialFormData: FormData = {
    fullName: "",
    countryCode: "+91",
    contactNumber: "",
    email: "",
    travelDate: "",
    numberOfPeople: "",
    hotelCategory: "",
    numberOfChildren: "0",
};

export default function ContactPage() {
    const [formData, setFormData] = useState<FormData>(initialFormData);
    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    function handleChange(
        event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) {
        const { name, value } = event.target;

        setFormData((previous) => ({
            ...previous,
            [name]: value,
        }));

        setErrors((previous) => ({
            ...previous,
            [name]: "",
        }));

        setSuccessMessage("");
        setErrorMessage("");
    }

    function validateForm() {
        const newErrors: FormErrors = {};

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^[0-9]{7,15}$/;

        if (!formData.fullName.trim()) {
            newErrors.fullName = "Full name is required.";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required.";
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = "Please enter a valid email address.";
        }

        if (!formData.contactNumber.trim()) {
            newErrors.contactNumber = "Contact number is required.";
        } else if (!phoneRegex.test(formData.contactNumber)) {
            newErrors.contactNumber =
                "Enter a valid phone number using 7 to 15 digits.";
        }

        if (!formData.travelDate) {
            newErrors.travelDate = "Date of travel is required.";
        } else {
            const selectedDate = new Date(formData.travelDate);
            const today = new Date();

            today.setHours(0, 0, 0, 0);

            if (selectedDate <= today) {
                newErrors.travelDate = "Travel date must be in the future.";
            }
        }

        if (!formData.numberOfPeople) {
            newErrors.numberOfPeople = "Number of people is required.";
        } else if (Number(formData.numberOfPeople) < 1) {
            newErrors.numberOfPeople =
                "Number of people must be at least 1.";
        }

        if (!formData.hotelCategory) {
            newErrors.hotelCategory = "Please select a hotel category.";
        }

        if (Number(formData.numberOfChildren) < 0) {
            newErrors.numberOfChildren =
                "Number of children cannot be negative.";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    }

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        setSuccessMessage("");
        setErrorMessage("");

        const isValid = validateForm();

        if (!isValid) {
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await fetch("/api/enquiry", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(
                    data.message || "Failed to submit enquiry."
                );
            }

            setSuccessMessage(
                data.message ||
                "Thank you! Our travel expert will contact you within 24 hours."
            );

            setFormData(initialFormData);
            setErrors({});
        } catch (error) {
            setErrorMessage(
                error instanceof Error
                    ? error.message
                    : "Something went wrong. Please try again."
            );
        } finally {
            setIsSubmitting(false);
        }
    }

    const today = new Date().toISOString().split("T")[0];

    return (
        <main className="min-h-screen bg-gray-50">
            <section className="bg-gray-950 px-6 py-20 text-white">
                <div className="mx-auto max-w-4xl text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">
                        Plan Your Journey
                    </p>

                    <h1 className="mt-4 text-4xl font-bold sm:text-5xl">
                        Tell Us About Your Trip
                    </h1>

                    <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-300">
                        Share your travel preferences and our experts will help you
                        create an unforgettable experience.
                    </p>
                </div>
            </section>

            <section className="px-6 py-20">
                <div className="mx-auto max-w-3xl">
                    <form
                        onSubmit={handleSubmit}
                        className="rounded-2xl bg-white p-6 shadow-xl ring-1 ring-gray-200 sm:p-10"
                    >
                        <div className="grid gap-6 sm:grid-cols-2">
                            <div>
                                <label
                                    htmlFor="fullName"
                                    className="mb-2 block text-sm font-semibold text-gray-900"
                                >
                                    Full Name
                                </label>

                                <input
                                    id="fullName"
                                    name="fullName"
                                    type="text"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    placeholder="Enter your full name"
                                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                                />

                                {errors.fullName && (
                                    <p className="mt-1 text-sm text-red-600">
                                        {errors.fullName}
                                    </p>
                                )}
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    className="mb-2 block text-sm font-semibold text-gray-900"
                                >
                                    Email
                                </label>

                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="you@example.com"
                                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                                />

                                {errors.email && (
                                    <p className="mt-1 text-sm text-red-600">
                                        {errors.email}
                                    </p>
                                )}
                            </div>

                            <div>
                                <label
                                    htmlFor="contactNumber"
                                    className="mb-2 block text-sm font-semibold text-gray-900"
                                >
                                    Contact Number
                                </label>

                                <div className="flex">
                                    <select
                                        name="countryCode"
                                        value={formData.countryCode}
                                        onChange={handleChange}
                                        className="rounded-l-lg border border-r-0 border-gray-300 bg-gray-50 px-3 py-3 outline-none focus:border-blue-600"
                                    >
                                        <option value="+91">+91 India</option>
                                        <option value="+1">+1 USA/Canada</option>
                                        <option value="+44">+44 UK</option>
                                        <option value="+61">+61 Australia</option>
                                        <option value="+971">+971 UAE</option>
                                        <option value="+254">+254 Kenya</option>
                                    </select>

                                    <input
                                        id="contactNumber"
                                        name="contactNumber"
                                        type="tel"
                                        inputMode="numeric"
                                        value={formData.contactNumber}
                                        onChange={handleChange}
                                        placeholder="9876543210"
                                        className="min-w-0 flex-1 rounded-r-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                                    />
                                </div>

                                {errors.contactNumber && (
                                    <p className="mt-1 text-sm text-red-600">
                                        {errors.contactNumber}
                                    </p>
                                )}
                            </div>

                            <div>
                                <label
                                    htmlFor="travelDate"
                                    className="mb-2 block text-sm font-semibold text-gray-900"
                                >
                                    Date of Travel
                                </label>

                                <input
                                    id="travelDate"
                                    name="travelDate"
                                    type="date"
                                    value={formData.travelDate}
                                    onChange={handleChange}
                                    min={today}
                                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                                />

                                {errors.travelDate && (
                                    <p className="mt-1 text-sm text-red-600">
                                        {errors.travelDate}
                                    </p>
                                )}
                            </div>

                            <div>
                                <label
                                    htmlFor="numberOfPeople"
                                    className="mb-2 block text-sm font-semibold text-gray-900"
                                >
                                    Number of People
                                </label>

                                <input
                                    id="numberOfPeople"
                                    name="numberOfPeople"
                                    type="number"
                                    min="1"
                                    value={formData.numberOfPeople}
                                    onChange={handleChange}
                                    placeholder="2"
                                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                                />

                                {errors.numberOfPeople && (
                                    <p className="mt-1 text-sm text-red-600">
                                        {errors.numberOfPeople}
                                    </p>
                                )}
                            </div>

                            <div>
                                <label
                                    htmlFor="hotelCategory"
                                    className="mb-2 block text-sm font-semibold text-gray-900"
                                >
                                    Hotel Category
                                </label>

                                <select
                                    id="hotelCategory"
                                    name="hotelCategory"
                                    value={formData.hotelCategory}
                                    onChange={handleChange}
                                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                                >
                                    <option value="">Select hotel category</option>
                                    <option value="Standard">Standard</option>
                                    <option value="Deluxe">Deluxe</option>
                                    <option value="Luxury">Luxury</option>
                                </select>

                                {errors.hotelCategory && (
                                    <p className="mt-1 text-sm text-red-600">
                                        {errors.hotelCategory}
                                    </p>
                                )}
                            </div>

                            <div>
                                <label
                                    htmlFor="numberOfChildren"
                                    className="mb-2 block text-sm font-semibold text-gray-900"
                                >
                                    Number of Children
                                </label>

                                <input
                                    id="numberOfChildren"
                                    name="numberOfChildren"
                                    type="number"
                                    min="0"
                                    value={formData.numberOfChildren}
                                    onChange={handleChange}
                                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                                />

                                {errors.numberOfChildren && (
                                    <p className="mt-1 text-sm text-red-600">
                                        {errors.numberOfChildren}
                                    </p>
                                )}
                            </div>
                        </div>

                        {successMessage && (
                            <div className="mt-8 rounded-xl border border-green-200 bg-green-50 p-4 text-sm font-medium text-green-700">
                                {successMessage}
                            </div>
                        )}

                        {errorMessage && (
                            <div className="mt-8 rounded-xl border border-red-200 bg-red-50 p-4 text-sm font-medium text-red-700">
                                {errorMessage}
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="mt-8 w-full rounded-full bg-blue-600 px-6 py-3.5 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
                        >
                            {isSubmitting ? "Submitting..." : "Submit Enquiry"}
                        </button>
                    </form>
                </div>
            </section>
        </main>
    );
}