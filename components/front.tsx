'use client'

import img_tmp from "@/img/front-logo.jpg";
import Image from "next/image";

export default function Front({ data }: { data: { title1: string, title2: string } }) {
    const handleScroll = () => {
        const nextSection = document.getElementById("problem");
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="front text-center w-full h-screen flex flex-col items-center justify-center bg-[#2A2829]">
            <div className="top flex flex-col w-full items-center justify-center" style={{ flexBasis: '50%' }}>
                <h1 className="text-5xl font-extrabold text-white">{data.title1}</h1>
                <h1 className="text-5xl font-extrabold text-white">{data.title2}</h1>
            </div>
            <div className="bot w-full flex flex-col items-center justify-start" style={{ flexBasis: '50%' }}>
                <Image src={img_tmp} alt="front logo" width={250} height={250} className="rounded-xl"/>
            </div>
            <div className="scroll-down mt-10 cursor-pointer" onClick={handleScroll}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" width="48px" height="48px">
                    <path d="M12 21c-.55 0-1-.45-1-1V5.41l-5.29 5.3c-.39.38-1.02.38-1.41 0s-.39-1.03 0-1.41l7-7c.39-.39 1.02-.39 1.41 0l7 7c.39.38.39 1.03 0 1.41s-1.02.38-1.41 0L13 5.41V20c0 .55-.45 1-1 1z"/>
                </svg>
            </div>
        </div>
    )
}
