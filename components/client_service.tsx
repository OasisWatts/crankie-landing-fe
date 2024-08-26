'use client'

import btn from "@/img/client-service-btn.svg";
import Image from "next/image";

import { useRouter } from 'next/navigation'

export default function ClientService({ data }: { data: any }) {

    const handleImageClick = () => {
        window.open('https://www.naver.com', '_blank');
    }

    return (
        <div className="bg-[#5A95F5] text-center h-screen w-full flex flex-col items-center justify-center">
            {/* Top Section: Contains titles */}
            <div className="flex-1 flex flex-col w-full items-center justify-center text-white mt-20">
                <div className="text-4xl font-extrabold mb-2">{data.title1_1}</div>
                <div className="text-4xl font-extrabold mb-2">{data.title1_2}</div>
                <div className="text-4xl font-extrabold mb-2">{data.title1_3}</div>
                <div className="text-4xl font-extrabold mt-10">{data.title2}</div>
            </div>
            {/* Button Section */}
            <div className="flex-1 flex flex-col w-full items-center justify-center">
                <div className="flex flex-col items-center justify-end bg-[#5A95F5] p-4 rounded-lg">
                    <Image src={btn} alt="Feature 2 Image" width={329} height={84} className="w-full h-auto rounded-lg" onClick={handleImageClick} style={{cursor: "pointer"}}/>
                </div>
            </div>
        </div>
    );
}
