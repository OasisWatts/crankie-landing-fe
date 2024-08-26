'use client'

import img_tmp from "@/img/front-logo.svg";
import Image from "next/image";

export default function Front({ data }: { data: { title1: string, title2: string } }) {
    const handleScroll = () => {
        const nextSection = document.getElementById("problem");
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="front text-center w-full h-screen flex flex-col items-center justify-center bg-[#2881DD] p-4">
            <div
                className="top flex flex-col w-full items-center justify-center mt-5"
                style={{ flexBasis: '50%' }}
            >
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
                    {data.title1}
                </h1>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white">
                    {data.title2}
                </h1>
                <h1 className="text-xs sm:text-sm md:text-base font-extrabold text-[#A5CDF7]">
                    빠른 프리프로덕션 - 크랭이
                </h1>
            </div>
            <div
                className="bot flex flex-col items-center justify-start mt-8 mb-10 bg-white rounded-sm">
                <Image
                    unoptimized
                    src={img_tmp}
                    alt="front logo"
                    width={150}
                    height={150}
                    className="rounded-xl md:w-[200px] md:h-[200px] lg:w-[250px] lg:h-[250px]"
                />
            </div>
            <div
                className="scroll-down mt-10 cursor-pointer"
                onClick={handleScroll}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" className="w-10 h-10 sm:w-12 sm:h-12">
                    <path d="M12 21c-.55 0-1-.45-1-1V5.41l-5.29 5.3c-.39.38-1.02.38-1.41 0s-.39-1.03 0-1.41l7-7c.39-.39 1.02-.39 1.41 0l7 7c.39.38.39 1.03 0 1.41s-1.02.38-1.41 0L13 5.41V20c0 .55-.45 1-1 1z" />
                </svg>
            </div>
        </div>
    )
}
