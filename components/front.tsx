import img_tmp from "@/img/front-logo.jpg"
import Image from "next/image"

export default function Front({ data }: { data: { title1: string, title2: string } }) {

    return (
        <div className="front text-center w-full h-screen flex flex-col items-center justify-center bg-[#2A2829]">
            <div className="top flex flex-col w-full items-center justify-center" style={{ flexBasis: '50%' }}>
                <h1 className="text-5xl font-extrabold text-white">{data.title1}</h1>
                <h1 className="text-5xl font-extrabold text-white">{data.title2}</h1>
            </div>
            <div className="bot w-full flex flex-col items-center justify-start" style={{ flexBasis: '50%' }}>
                {/* <img src={image_tmp} alt="front logo" /> */}
                <Image src={img_tmp} alt="dsf" width={250} height={250} className="rounded-xl"/>
            </div>
        </div>
    )
}