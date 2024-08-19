import Image from "next/image";

export default function Problem({ data }: { data: { title1: string, title2: string, paragraph1: string, paragraph2: string } }) {
    return (
        <div className="text-center w-full h-[1080px] py-[160px] flex flex-col items-center justify-center">
            
            <div className="w-[75px] h-[75px] rounded-md bg-gray-300 flex-auto items-center justify-center">
                <p className="text-center py-[30px]">check</p>
            </div>

            <h1 className="mt-10 text-3xl font-extrabold">{data.title1}</h1>
            <h1 className="text-3xl font-extrabold">{data.title2}</h1>
            <p className="mt-5">{data.paragraph1}</p>
            <p>{data.paragraph2}</p>

            <div className="mt-[50px] w-[1070px] h-[600px] rounded-md bg-[#2A2829] flex flex-col items-center justify-center">
                <div className="w-[900px] h-[150px] bg-white rounded-md"></div>
                <div className="mt-[40px] w-[900px] h-[150px] bg-white rounded-md"></div>
            </div>
        </div>
    )
}
