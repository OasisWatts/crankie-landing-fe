import img_tmp from '@/img/check-img.svg';
import problem_img from '@/img/first_page_Image.jpg'
import Image from "next/image";

export default function Problem({ data }: { data: { title1: string, title2: string, paragraph1: string, paragraph2: string } }) {
    return (
        <div id="problem" className="text-center w-full min-h-screen flex flex-col items-center justify-center p-4">
            <div className="top flex-1 w-full flex flex-col bg-white p-4 sm:p-6 lg:p-8 mt-10" style={{ flexBasis: '40%' }}>
                <div className="flex-1 flex flex-col w-full items-center justify-end">
                    <Image src={img_tmp} alt="check icon" width={50} height={50} className='rounded-sm' />
                </div>
                <div className="mid flex-1 flex flex-col w-full items-center justify-center mt-10">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold">캐스팅 공고를 올리자마자 받는</h1>
                    <div className="flex-1 flex flex- row">
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#2881DD]">수많은</h1>
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold">&nbsp;배우님들의 지원 메일</h1>
                    </div>
                </div>
                <div className="bot flex-1 flex flex-col items-center justify-start">
                    <p className="text-sm sm:text-base lg:text-lg font-bold">{data.paragraph1}</p>
                    <p className="text-sm sm:text-base lg:text-lg font-bold">{data.paragraph2}</p>
                </div>
            </div>
            <div className="bot flex-1 w-full flex flex-col items-center mb-10 justify-center bg-white p-4 sm:p-6 lg:p-8" style={{ flexBasis: '60%' }}>    
                    <Image src={problem_img} alt="problem pic" width={1426} height={795} className='rounded-xl' />
            </div>
        </div>
    );
}
