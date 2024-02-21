import mongoose, { Model, Document } from "mongoose";

const { Schema } = mongoose;

interface IPost extends Document {
    username: string;
    email: string;
}

const PostSchema = new Schema<IPost>({
    username: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
    }
});

const Post = mongoose.models.Post || mongoose.model<IPost>('Post', PostSchema);

export default Post;

// const User = mongoose.models.User || mongoose.model<UserDocument, UserModel>("User", UserSchema);

// export default User;