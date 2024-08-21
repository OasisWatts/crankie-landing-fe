import gif3_tmp from '@/img/gif3.jpg'
import Image from "next/image"

export default function FeatureTeamSpace({ data }: { data: any }) {
    return (
        <div className="w-full h-screen bg-[#2A2829] flex flex-row justify-center items-center">
            <div className="left h-full flex-1 flex flex-col items-end justify-center" style={{flexBasis: "50%"}}>
                <div className="title flex flex-col items-end justify-center mr-10 text-white">
                    <p className="text-5xl">여기 빨리 디자인 내놔</p>
                    <p className="text-xl font-bold">{data.title}</p>
                    <p className="mt-5">{data.explanation1}</p>
                    <p className="">{data.explanation2}</p>
                    <p className="mb-20">{data.explanation3}</p>
                    <p className="text-2xl font-extrabold">{data.footer1}</p>
                    <p className="text-2xl font-extrabold">{data.footer2}</p>
                </div>
            </div>
            <div className="right h-full flex-1 flex flex-col items-start justify-center" style={{flexBasis: "50%"}}>
                <div className="bg-gray-200 w-[550px] h-[400px] flex flex-col items-start justify-center ml-10">
                    <Image src={gif3_tmp} alt="dsf" width={550} height={550}/>
                </div>
            </div>
        </div>
    )
}