import React, { use, useEffect, useRef, useState } from "react";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "../ui/button";
import axios from "axios";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { ReloadIcon } from "@radix-ui/react-icons"
type Props = {};

const PromptEditor = (props: Props) => {
    const [loading, setLoading] = useState(false);
    const [data, setData]: any = useState("");
    const [error, setError] = useState(null);
    const promptvalue = useRef("hello");
    const prompthandler = (value: any) => {
        promptvalue.current = value;
    };
    const prompsend = () => {
        console.log(promptvalue.current);
    };
    const api = process.env.NEXT_PUBLIC_API_KEY || "sd";

    const genAI = new GoogleGenerativeAI(api);

    async function run() {
        try {
            setLoading(true)
            const model = genAI.getGenerativeModel({ model: "gemini-pro" });
            const result = await model.generateContent(`${promptvalue.current} generate json random value of givens schema `);
            const response = await result.response;
            const text = response.text();
            // console.log(text);
            setData(text);
            console.log(data);
            setLoading(false);
        } catch (error) {
            setData("Try again");
            setLoading(false);
        }


    }

    const schema = `const UserSchema = new Schema({
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true,
        },
        password: {
            type: String,
            required: true,
        }
    }, { timestamps: true });
    `;

    return (
        <div className="grid w-full  gap-2 p-1">
            <Textarea
                placeholder={schema ? `${schema} add you schemm just like this` : `Some Placeholder Text`}

                onChange={(e) => prompthandler(e.target.value)}
            />
            <Button
                onClick={() => {
                    run()
                }}
                disabled={loading}
            >
                submit
            </Button>
            {loading && <Button disabled>
                <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                Please wait
            </Button>}
            {!loading && <div>{data}</div>}
        </div>
    );
};

export default PromptEditor;
