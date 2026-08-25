import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Enquiry from "@/models/Enquiry";

export async function POST(request: Request) {
    try {
        const body = await request.json();

        const {
            fullName,
            countryCode,
            contactNumber,
            email,
            travelDate,
            numberOfPeople,
            hotelCategory,
            numberOfChildren,
        } = body;

        // Required fields
        if (
            !fullName ||
            !countryCode ||
            !contactNumber ||
            !email ||
            !travelDate ||
            !numberOfPeople ||
            !hotelCategory
        ) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Please fill in all required fields.",
                },
                { status: 400 }
            );
        }

        // Validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^[0-9]{7,15}$/;

        if (!emailRegex.test(email)) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Please enter a valid email address.",
                },
                { status: 400 }
            );
        }

        if (!phoneRegex.test(contactNumber)) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Please enter a valid contact number.",
                },
                { status: 400 }
            );
        }

        // Travel date validation
        const selectedDate = new Date(travelDate);

        const today = new Date();
        today.setHours(0, 0, 0, 0);

        if (
            Number.isNaN(selectedDate.getTime()) ||
            selectedDate <= today
        ) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Travel date must be a future date.",
                },
                { status: 400 }
            );
        }

        // Number of people validation
        if (Number(numberOfPeople) < 1) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Number of people must be at least 1.",
                },
                { status: 400 }
            );
        }

        // Number of children validation
        if (Number(numberOfChildren || 0) < 0) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Number of children cannot be negative.",
                },
                { status: 400 }
            );
        }

        // Hotel validation
        if (!["Standard", "Deluxe", "Luxury"].includes(hotelCategory)) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Invalid hotel category.",
                },
                { status: 400 }
            );
        }

        // Connect to MongoDB
        await connectDB();

        // Save enquiry
        await Enquiry.create({
            fullName: fullName.trim(),
            countryCode,
            contactNumber: contactNumber.trim(),
            email: email.trim().toLowerCase(),
            travelDate,
            numberOfPeople: Number(numberOfPeople),
            hotelCategory,
            numberOfChildren: Number(numberOfChildren || 0),
        });

        return NextResponse.json(
            {
                success: true,
                message:
                    "Thank you! Our travel expert will contact you within 24 hours.",
            },
            { status: 201 }
        );
    } catch (error) {
        console.error("ENQUIRY_ERROR:", error);

        return NextResponse.json(
            {
                success: false,
                message: "Unable to submit enquiry. Please try again later.",
            },
            { status: 500 }
        );
    }
}

export async function GET() {
    try {
        // Connect to MongoDB
        await connectDB();

        // Get all enquiries
        const enquiries = await Enquiry.find({})
            .sort({ createdAt: -1 })
            .lean();

        return NextResponse.json({
            success: true,
            enquiries,
        });
    } catch (error) {
        console.error("GET_ENQUIRY_ERROR:", error);

        return NextResponse.json(
            {
                success: false,
                message: "Unable to fetch enquiries.",
            },
            { status: 500 }
        );
    }
}