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

export default function Home() {
  const [url, setUrl] = useState<string>("");
  const [data, setData] = useState<any | null>([]);
  const getdata = async () => {
    try {
      const result = await FetchData(url);
      console.log(result);
      setData(result);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };
  useEffect(() => { }, [url]);

  return (
    <div className="  ">
      <ModeToggle />
      <div className="flex">
        <div className="m-1">
          <DropdownMenuRadioGroupDemo />
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
          <Button variant="default" onClick={()=>url!==""?getdata():console.log("Please add url")}>
            Send
          </Button>
        </div>
      </div>
    </div>
  );
}
