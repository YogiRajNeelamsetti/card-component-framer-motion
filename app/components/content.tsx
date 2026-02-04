import React from "react";
import { Card } from "./ui/card";
import { GeistSans } from "geist/font/sans";
import { cn } from "../lib/utils";

export const Content = () => {
    return (
        <div 
        className={ cn(
            GeistSans.className,
            "h-screen flex items-center justify-center bg-gray-50"
        )}
        >
            <Card />
        </div>
    );
};