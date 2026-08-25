import mongoose, { Schema, Model } from "mongoose";

export type EnquiryDocument = {
    fullName: string;
    countryCode: string;
    contactNumber: string;
    email: string;
    travelDate: string;
    numberOfPeople: number;
    hotelCategory: "Standard" | "Deluxe" | "Luxury";
    numberOfChildren: number;
    createdAt: Date;
};

const enquirySchema = new Schema<EnquiryDocument>(
    {
        fullName: {
            type: String,
            required: true,
            trim: true,
        },
        countryCode: {
            type: String,
            required: true,
        },
        contactNumber: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
        },
        travelDate: {
            type: String,
            required: true,
        },
        numberOfPeople: {
            type: Number,
            required: true,
            min: 1,
        },
        hotelCategory: {
            type: String,
            enum: ["Standard", "Deluxe", "Luxury"],
            required: true,
        },
        numberOfChildren: {
            type: Number,
            min: 0,
            default: 0,
        },
    },
    {
        timestamps: true,
    }
);

const Enquiry: Model<EnquiryDocument> =
    mongoose.models.Enquiry ||
    mongoose.model<EnquiryDocument>("Enquiry", enquirySchema);

export default Enquiry;