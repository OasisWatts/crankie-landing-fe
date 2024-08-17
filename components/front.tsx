import Image from "next/image";

export default function Front({ data }: { data: { title1: string, title2: string } }) {

    return (
        <div className="bg-gray-800 text-center w-full h-[1080px] py-[160px] flex flex-col items-center justify-center">
            <div className="justify-center">
                <h1 className="text-5xl font-extrabold text-white">{data.title1}</h1>
                <h1 className="text-5xl font-extrabold text-white">{data.title2}</h1>
            </div>
            <div className="mt-[150px] w-[300px] h-[300px] rounded-md bg-gray-400 flex items-center justify-center">
                <p className="py-[140px]">brand logo</p>
            </div>
        </div>
    )
}