"use client";
import { usePathname } from "next/navigation";

export function MessageToDisplay(){
    const pathname = usePathname();
    const message = pathname.includes("/login")

    return(
        <p className="text-white w-[100px] sm:w-[80%] text-center m-auto sm:text-2xl sm:font-bold sm:mt-[80px]">{message ? "Welcome Back!" : "Thanks for joining us!"}</p>
    );
}