import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const body = await request.json();

        const { email, password } = body;

        if (!email || !password) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Email and password are required.",
                },
                { status: 400 }
            );
        }

        const adminEmail = process.env.ADMIN_EMAIL;
        const adminPassword = process.env.ADMIN_PASSWORD;

        if (!adminEmail || !adminPassword) {
            console.error("Admin credentials are not configured.");

            return NextResponse.json(
                {
                    success: false,
                    message: "Admin login is not configured.",
                },
                { status: 500 }
            );
        }

        if (email !== adminEmail || password !== adminPassword) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Invalid email or password.",
                },
                { status: 401 }
            );
        }

        const response = NextResponse.json({
            success: true,
            message: "Login successful.",
        });

        response.cookies.set("admin_session", "authenticated", {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            path: "/",
            maxAge: 60 * 60 * 24,
        });

        return response;
    } catch (error) {
        console.error("ADMIN_LOGIN_ERROR:", error);

        return NextResponse.json(
            {
                success: false,
                message: "Unable to login.",
            },
            { status: 500 }
        );
    }
}