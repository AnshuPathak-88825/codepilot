import User, { UserDocument, UserModel } from "../../../../models/UserModel"
import bcrypt from "bcrypt"
import connect from "../../../../db";
import jwt from "jsonwebtoken"
import { NextRequest, NextResponse } from "next/server";
export async function POST(request: NextRequest, res: NextResponse) {
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
        if (!newUser) {
            return NextResponse.json("Error creating user", { status: 500 });
        }
        await newUser.save();
        const JWTSECRET=await process.env.JWTSECRET||"haslkdfsdf";
        
        const token=jwt.sign({email:newUser.email,id:newUser._id},JWTSECRET, { expiresIn: '1h' })
        const response=NextResponse.json({newUser},{status:200});
        response.cookies.set('codepilot',token,{httpOnly:true});
        return response;


    } catch (error) {
        console.error("Error occurred:",error);
        return NextResponse.json("Internal Server Error",{status:500});
    }

}