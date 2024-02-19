import User, { UserDocument, UserModel } from "../../../../models/UserModel"
import bcrypt from "bcrypt"
import connect from "../../../../db";
import jwt from "jsonwebtoken"
import { NextRequest, NextResponse } from "next/server";
export async function POST(request: NextRequest, response: NextResponse) {
    try {
        await connect();
        const { email, username, password } = await request.json();
        const existingUser: UserDocument | null = await User.findOne({ email });
        if (existingUser) {
            NextResponse.json("User already exist", { status: 200 })
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser: UserDocument | null = new User({
            email, username, password: hashedPassword
        });
        await newUser.save();
        const JWTSECRET=process.env.JWTSECRET;
        return NextResponse.json({message:"User registed successfuly"});


    } catch (error) {
        console.error("Error occurred:",error);
        return NextResponse.json("Internal Server Error",{status:500});
    }

}