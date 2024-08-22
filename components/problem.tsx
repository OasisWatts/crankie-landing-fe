import img_tmp from '@/img/check-img.jpg';
import Image from "next/image";

export default function Problem({ data }: { data: { title1: string, title2: string, paragraph1: string, paragraph2: string } }) {
    return (
        <div id="problem" className="text-center w-full min-h-screen flex flex-col items-center justify-center p-4">
            <div className="top flex-1 w-full flex flex-col bg-white p-4 sm:p-6 lg:p-8" style={{ flexBasis: '40%' }}>
                <div className="flex-1 flex flex-col w-full items-center justify-end">
                    <Image src={img_tmp} alt="check icon" width={50} height={50} className='rounded-xl' />
                </div>
                <div className="mid flex-1 flex flex-col w-full items-center justify-center">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold">{data.title1}</h1>
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold">{data.title2}</h1>
                </div>
                <div className="bot flex-1 flex flex-col items-center justify-start">
                    <p className="text-sm sm:text-base lg:text-lg font-bold">{data.paragraph1}</p>
                    <p className="text-sm sm:text-base lg:text-lg font-bold">{data.paragraph2}</p>
                </div>
            </div>
            <div className="bot flex-1 w-full flex flex-col items-center justify-center bg-white p-4 sm:p-6 lg:p-8" style={{ flexBasis: '60%' }}>
                <div className="img bg-[#2A2829] w-full max-w-lg h-48 sm:h-60 lg:h-72 flex-1 flex flex-col m-10 rounded-xl">
                    {/* 여기에는 다른 이미지나 콘텐츠가 들어갈 수 있습니다. */}
                </div>
            </div>
        </div>
    );
}
