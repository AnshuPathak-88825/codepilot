"use client";
import Image from "next/image";
import { ModeToggle } from "@/components/ModeToggle";
import { Input } from "@/components/ui/input";
import {
  DropdownMenuGroup,
  DropdownMenu,
  DropdownMenuLabel,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { DropdownMenuRadioGroupDemo } from "@/components/DropdownMenuRadioGroupDemo";
import { useEffect, useRef, useState } from "react";
import { Deletedata, FetchData, PostData, PutData } from "@/utils/api";
import { JsonEditor } from "@/components/jsonEditor/Editor";
import JsonViewer from "../components/jsonViewer/JsonView"
import { MehIcon } from "lucide-react";


export default function Home() {
  const [url, setUrl] = useState<string>("");
  const [data, setData] = useState<any | null>([]);
  const [options, setOption] = useState<any | null>({
    "email": "anshu@example.com",
    "password": "anshupathak",
    "username": "RAJ"
  });
  const [method, setMethod] = useState<string>("GET")
  const executeRequest = async () => {
    try {

      if (method === "GET") {
        const result = await FetchData(url);
        setData(result);
      }
      else if (method === "POST") {
        const result = await PostData(options, url);
        setData(result);
      }
      else if (method === "PUT") {
        const result = await PutData(options, url);
        setData(result);
      }
      else if (method === "DELETE") {
        const result = await Deletedata(options, url);
        setData(result);
      }
    } catch (error) {
      throw new Error("Error in execute request");

    }

  }
  const runmethod = async () => {
    if (!url) {
      console.log("Please provide Url");
      return;
    }
    executeRequest();

  }
  useEffect(() => { }, [url]);

  return (
    <div className="  ">
      <ModeToggle />
      <div className="flex">
        <div className="m-1">
          <DropdownMenuRadioGroupDemo method={method} setMethod={setMethod} />
        </div>
        <div className="m-1">
          <Input
            type="text"
            value={url}
            placeholder="https://example.com"
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>
        <div className="m-1">
          <Button variant="default" onClick={() => url !== "" ? runmethod() : console.log("Please add url")}>
            Send
          </Button>
        </div>
        <div>
          response
          <JsonViewer data={data} />
        </div>
        <JsonEditor />
      </div>
    </div>
  );
}
