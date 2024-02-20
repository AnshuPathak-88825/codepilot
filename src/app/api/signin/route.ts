import { NextResponse,NextRequest } from "next/server";
import bcrypt from "bcrypt"
import connect from "../../../../db";
import User,{UserDocument,UserModel} from "../../../../models/UserModel";
export async function POST(req:NextRequest,res:NextResponse)
{
    console.log("hello");

    try {
        await connect();
        const {email,password}=await req.json();
        const existingUser:UserDocument|null=await User.findOne({email});
        console.log(existingUser);
        if(!existingUser)
        {
           return NextResponse.json("User not exist",{status:400});
        }
        
        const isPasswordValid =await bcrypt.compare(password,existingUser.password);
        if(isPasswordValid)
        {
            return NextResponse.json({User:existingUser},{status:200});
        }
        else{
            return NextResponse.json({error:"Password not match"},{status:200});
        }

    } catch (error) {
        return NextResponse.json({error:"Internal server error"},{status:400});
        
    }

}