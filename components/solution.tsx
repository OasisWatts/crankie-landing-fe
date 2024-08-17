import Image from "next/image";


export default function Solution({ data }: { data: {title1:string, title2:string, explanation1:string, explanation2 :string} }) {

    return (
        <div className="bg-[#2A2829] w-[1920px] h-[1080px] py-[100px] flex flex-row">
            <div className="flex-col flex items-center justify-center">
                <div className="ml-[200px] text-left text-white">
                    <h1 className="text-2xl font-extrabold">{data.title1}</h1>
                    <h1 className="text-2xl font-extrabold">{data.title2}</h1>
                    <p className="mt-[30px]">{data.explanation1}</p>
                    <p>{data.explanation2}</p>
                </div>
                <div className="mt-[100px] ml-[200px] w-[300px] h-[450px] rounded-md bg-gray-300 text-center flex item-center justify-center">
                    <p className="py-[215px]">brand logo</p>
                    </div>
            </div>
            <div className="mt-[150px] ml-[100px] w-[1000px] h-[645px] rounded-md bg-gray-300 text-center flex items-center justify-center">
                <p className="py-[320px]">image</p>
            </div>
        </div>
    )
}
