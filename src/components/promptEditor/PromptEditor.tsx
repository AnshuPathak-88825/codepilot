import React, { use, useEffect, useRef, useState } from "react";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "../ui/button";
import axios from "axios";
import { GoogleGenerativeAI } from "@google/generative-ai";
type Props = {};

const PromptEditor =async (props: Props) => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const promptvalue = useRef(null);
    const prompthandler = (value: any) => {
        promptvalue.current = value;
    };
    const prompsend = () => {
        console.log(promptvalue.current);
    };
    const api=process.env.NEXT_PUBLIC_API_KEY;
    
   
    return (
        <div className="grid w-full h-[90vh] gap-2 p-1">
            <Textarea
                placeholder="Type your message here."
                onChange={(e) => prompthandler(e.target.value)}
            />
            <Button
                onClick={() => {
                }}
            >
            </Button>
            <div>{api}</div>
        </div>
    );
};

export default PromptEditor;
