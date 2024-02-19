// import { NextResponse, NextRequest } from "next/server";
// import connect from "../../../../db";
// import Post from "../../../../models/Post";
// export async function GET() {
//   // await connect();
//   try {
//     await connect();
//     return NextResponse.json({ ee: "hello" });

//   } catch (error) {
//     throw console.error("not able to connect");
    
//   }
// }
import { NextResponse } from "next/server";
import connect from "../../../../db";

export async function GET() {
  try {
    // Connect to the database
    await connect();

    // Create a new post
    // const newPost = new Post({
    //   title: "Example Post",
    //   description: "This is an example description for the post.",
    // });

    // Save the new post to the database
    // const savedPost = await newPost.save();

    // Return a success response
    // return NextResponse.json({ message: "Post created successfully", post: savedPost });
    
  } catch (error) {
    console.error("Error creating post:", error);
    // Return an error response
    return NextResponse.json({hello:"hello"});
  }
}


// export async function POST(req: NextRequest) {
//   try {
//     const body = await req.json();
//     return NextResponse.json({ received: body });
//   } catch (error) {
//     console.error(error);
//     return NextResponse.json({ error: "Error occurred" }, { status: 500 });
//   }
// }
// export async function PUT(req: NextRequest) {
//   try {
//     const body = await req.json();
//     return NextResponse.json({ received: body });
//   } catch (error) {
//     console.error(error);
//     return NextResponse.json({ error: "Error occured" }, { status: 500 });
//   }
// }
