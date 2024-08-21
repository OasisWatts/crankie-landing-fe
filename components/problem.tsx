import img_tmp from '@/img/check-img.jpg'
import Image from "next/image"

export default function Problem({ data }: { data: { title1: string, title2: string, paragraph1: string, paragraph2: string } }) {
    return (
        <div className="text-center w-full h-[120vh] flex flex-col items-center justify-center">
            <div className="top flex-1 w-full flex flex-col bg-white" style={{ flexBasis: '40%' }}>
                <div className="top flex-1 flex flex-col w-full items-center justify-end">
                    <Image src={img_tmp} alt="dsf" width={60} height={60} className='rounded-xl'/>
                </div>
                <div className="mid flex-1 flex flex-col w-full items-center justify-center mt-5">
                    <h1 className="text-3xl font-extrabold">{data.title1}</h1>
                    <h1 className="text-3xl font-extrabold">{data.title2}</h1>
                </div>
                <div className="bot flex-1 flex flex-col items-center justify-center">
                    <h1 className="text-m font-bold">{data.paragraph1}</h1>
                    <h1 className="text-m font-bold">{data.paragraph2}</h1>
                </div>
            </div>
            <div className="bot flex-1 w-full flex flex-col items-center justify-center bg-white" style={{ flexBasis: '60%' }}>
                <div className="img bg-[#2A2829] w-[500px] h-[300px] flex-1 flex flex-col m-10 rounded-xl">
                    
                </div>
            </div>
        </div>
    )
}