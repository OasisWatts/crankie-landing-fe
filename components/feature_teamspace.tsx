import gif3_tmp from '@/img/gif3.jpg'
import Image from "next/image"

export default function FeatureTeamSpace({ data }: { data: any }) {
    return (
        <div className="w-full min-h-screen bg-[#2A2829] flex flex-col md:flex-row justify-center items-center p-4">
            <div className="left flex-1 flex flex-col mr-10 items-end justify-end md:items-end text-white mb-10 md:mb-0" style={{ flexBasis: "50%" }}>
                <div className="title text-center md:text-right">
                    <p className="text-xl font-bold">{data.title}</p>
                    <p className="mt-5">{data.explanation1}</p>
                    <p>{data.explanation2}</p>
                    <p className="mb-10 md:mb-20">{data.explanation3}</p>
                </div>
            </div>
            <div className="right flex-1 flex flex-col items-center md:items-start justify-center" style={{ flexBasis: "50%" }}>
                <div className="w-full max-w-[550px] h-auto bg-gray-200 rounded-lg overflow-hidden">
                    <Image src={gif3_tmp} alt="Feature Image" width={550} height={400} className="w-full h-auto"/>
                </div>
            </div>
        </div>
    )
}
