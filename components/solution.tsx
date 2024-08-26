import img_tmp from '@/img/crankie-logo.jpg';
import Image from "next/image";

export default function Solution({ data }: { data: { title1: string, title2: string, explanation1: string, explanation2: string } }) {

    return (
        <div className="bg-[#2881DD] w-full min-h-screen flex flex-col md:flex-row justify-end items-center p-4">
            <div className="left flex-1 h-full flex flex-col justify-center items-center mb-8 md:mb-0 md:pr-4" style={{ flexBasis: "50%" }}>
                <div className="title text-start mb-10">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
                        정리, 이제
                    </h1>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
                        {data.title2}.
                    </h1>
                </div>
                <div className="content text-start ">
                    <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{data.explanation1}
                    </h1>
                    <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mt-2">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{data.explanation2}
                    </h1>
                </div>
            </div>
            <div className="right flex-1 h-full flex flex-col justify-center items-start" style={{ flexBasis: "50%" }}>
                <div className="img flex justify-center items-start bg-gray-200 rounded-xl overflow-hidden">
                    <Image src={img_tmp} alt="Solution Image" width={622} height={473} className="w-full h-auto" />
                </div>
            </div>
        </div>
    )
}
