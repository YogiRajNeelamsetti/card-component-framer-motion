/* eslint-disable react/no-unescaped-entities */
"use client";
import { cn } from "@/app/lib/utils";
import Image from "next/image";
import logo from "@/app/assets/logo.png";
import { IconMessage, IconX } from "@tabler/icons-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export const Card = () => {

    const [open, setOpen] = useState(true);

    return (
        <>
        <AnimatePresence>
            {/*exit animation only works when there is a boolean exactly above it  */}
            {open && <motion.div 
            initial={{
                opacity: 0,
                scale: 0.98,
                filter: "blur(10px)",
            }}
            animate={{
                opacity: 1,
                scale: 1,
                filter: "blur(0px)",
            }}
            exit={{
                    opacity: 0,
                    scale: 0.98,
                    filter: "blur(10px)",
            }}
            transition={{
                    duration: 0.3,
                    ease: "easeInOut",
            }}
            className={ cn(
                    "w-72 min-h-[26rem] h-[28rem] rounded-xl",
                    "shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(32,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]",
                    "p-6 flex flex-col"
                    )}
                >
                <h2 className="font-bold text-[12px]">Aceternity UI Component</h2>
                <p className="text-neutral-600 text-[10px]">
                    A collection of beautiful UI components, let's go on with it
                    </p>
                    <div className="flex items-center justify-center">
                        <button onClick={() => setOpen(false)} className="cursor-pointer flex items-center gap-1 text-[10px] shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(32,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] rounded-md px-2 py-1">
                            <Image 
                                className="h-4 rounded-sm w-4" 
                                width={50} 
                                height={50} 
                                alt="logo" 
                                src={logo} 
                            />{" "}
                            Aceternity
                            <IconX className="h-3 w-3 text-neutral-500"/>
                        </button>
                    </div>
                    <div className="bg-gray-100 flex-1 mt-4 rounded-lg border border-dashed border-neutral-200 relative">
                        <motion.div 
                        initial={{
                            opacity: 0,
                            scale: 0.98,
                            filter: "blur(10px)",
                        }}

                        whileHover={{
                            opacity: 1,
                            scale: 1.05,
                            filter: "blur(0px)",
                        }}

                        transition={{
                            duration: 0.3,
                            ease: "easeInOut",
                        }}
                        className="absolute inset-0 h-full w-full rounded-lg bg-white border border-neutral-200 divide-y divide-neutral-300">
                            <div className="flex gap-2 p-4">
                                <div className="h-7 w-7 flex-shrink-0 bg-gradient-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(32,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-white rounded-md flex items-center justify-center">
                                    <IconMessage className="h-4 w-4 text-neutral-600"/>
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-[8px] font-bold text-neutral-600">Aceternity UI components</p>
                                    <p className="text-neutral-400 text-[8px] mt-1">A collection of UI components</p>
                                </div>
                            </div>
                            <div className="flex gap-2 p-4">
                                <div className="h-7 w-7 flex-shrink-0 bg-gradient-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(32,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-white rounded-md flex items-center justify-center">
                                    <IconMessage className="h-4 w-4 text-neutral-600"/>
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-[8px] font-bold text-neutral-600">Aceternity UI components</p>
                                    <p className="text-neutral-400 text-[8px] mt-1">A collection of UI components</p>
                                </div>
                            </div>
                            <div className="flex gap-2 p-4">
                                <div className="h-7 w-7 flex-shrink-0 bg-gradient-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(32,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-white rounded-md flex items-center justify-center">
                                    <IconMessage className="h-4 w-4 text-neutral-600"/>
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-[8px] font-bold text-neutral-600">Aceternity UI components</p>
                                    <p className="text-neutral-400 text-[8px] mt-1">A collection of UI components</p>
                                </div>
                            </div>
                            <div className="flex gap-2 p-4">
                                <div className="h-7 w-7 flex-shrink-0 bg-gradient-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(32,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-white rounded-md flex items-center justify-center">
                                    <IconMessage className="h-4 w-4 text-neutral-600"/>
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-[8px] font-bold text-neutral-600">Aceternity UI components</p>
                                    <p className="text-neutral-400 text-[8px] mt-1">A collection of UI components</p>
                                </div>
                            </div>
                            <div className="flex gap-2 p-4 items-center justify-center">
                                <div className="h-7 w-7 flex-shrink-0 bg-gradient-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(32,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-white rounded-md flex items-center justify-center">
                                    <IconMessage className="h-3 w-3 text-neutral-600"/>
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-neutral-400 text-[8px] mt-1">A collection of UI components</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>}
            </AnimatePresence>
        </>
    );
};