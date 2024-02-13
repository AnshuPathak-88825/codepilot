"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function DropdownMenuRadioGroupDemo() {
    const [position, setPosition] = React.useState("GET")

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="default">{position}</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                    <DropdownMenuRadioItem value="GET">GET</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="POST">POST</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="PUT">PUT</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="DELETE">DELETE</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="PATCH">PATCH</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="HEAD">HEAD</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="OPTION">OPTION</DropdownMenuRadioItem>

                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
