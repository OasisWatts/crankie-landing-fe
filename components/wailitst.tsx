'use client'

import waitlist_img from '@/img/waitlist_img.svg'
import Image from "next/image"

export default function Waitlist({ data }: { data: any }) {
    return (
        <div className="bg-[#2237C6] text-center w-full h-screen flex flex-col items-center justify-center">
            <div className="top w-full flex-1 flex flex-col items-center justify-end mb-20 text-white">
                <h1 className="text-5xl font-extrabold">{data.title1}</h1>
                <h1 className="text-5xl font-extrabold">{data.title2}</h1>
            </div>
            <div className="bot w-full flex-1 flex flex-col items-center justify-start">
                <div className="w-[150px] h-[150px] flex items-center justify-center">
                    <Image src={waitlist_img} alt="dsf" width={150} height={150}/>
                </div>
            </div>
        </div>
    )
}