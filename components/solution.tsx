import img_tmp from '@/img/crankie-logo.jpg'
import Image from "next/image"

export default function Solution({ data }: { data: { title1: string, title2: string, explanation1: string, explanation2: string } }) {

    return (

        <div className="bg-[#2A2829] w-full h-screen flex flex-row justify-center items-center">
            <div className="left flex1 h-full flex flex-col justify-center items-center" style={{ flexBasis: "50%" }}>
                <div className="title">
                    <h1 className="text-5xl font-extrabold text-white">{data.title1}</h1>
                    <h1 className="text-5xl font-extrabold text-white">{data.title2}</h1>
                </div>
                <div className="content">
                    <h1 className="text-xl font-bold text-white">{data.explanation1}</h1>
                    <h1 className="text-xl font-bold text-white">{data.explanation2}</h1>
                </div>
            </div>
            <div className="right flex1 h-full flex flex-col justify-center items-center" style={{ flexBasis: "50%" }}>
                <div className="img flex justify-center items-center h-[300px] w-[300px] bg-gray-200">
                    <Image src={img_tmp} alt="dsf" width={300} height={300}/>
                </div>
            </div>
        </div>
    )
}