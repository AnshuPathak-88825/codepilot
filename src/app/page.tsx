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
import { useEffect, useState } from "react";
import { FetchData } from "@/utilis/api";
import JsonViewer from "../components/jsonViewer/JsonView"
import { PostData } from "@/utilis/api";
import { MehIcon } from "lucide-react";


export default function Home() {
  const [url, setUrl] = useState<string>("");
  const [data, setData] = useState<any | null>([]);
  const [options, setOption] = useState<any | null>([]);
  const [method, setMethod] = useState<string>("GET")

  const getdata = async (): Promise<any> => {
    try {
      const result = await FetchData(url);
      setData(result);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };
  const postdata = async (): Promise<any> => {
    try {
      const result = await PostData(options, url);
      setData(result);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  }
  const executeRequest = async () => {
    try {
      if (method === "GET") {
        await getdata();
      }
      else if (method === "POST") {
        await postdata();
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
          <Button variant="default" onClick={() => url !== "" ? getdata() : console.log("Please add url")}>
            Send
          </Button>
        </div>
        <div>
          response
          <JsonViewer data={data} />
        </div>
      </div>
    </div>
  );
}
