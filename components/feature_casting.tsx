import img_tmp from '@/img/check-img.jpg'
import gif1_tmp from '@/img/gif1.jpg'
import gif2_tmp from '@/img/gif2.jpg'
import Image from "next/image"

export default function FeatureCasting({ data }: { data: any }) {
    return (
        <div className="w-full min-h-screen flex flex-col justify-center items-center bg-white">
            <div className="top w-full flex flex-col items-center justify-center p-4" style={{ flexBasis: "20%" }}>
                <div className="img w-[60px] h-[60px] flex items-center justify-center mt-10">
                    <Image src={img_tmp} alt="logo" width={60} height={60} />
                </div>
                <div className="title text-3xl md:text-4xl lg:text-5xl font-extrabold mt-5 mb-5 text-center">
                    {data.title}
                </div>
            </div>
            <div className="bot w-full flex-1 flex flex-col items-center justify-center p-4" style={{ flexBasis: "80%" }}>
                <div className="firstBlock w-full flex flex-col md:flex-row items-center justify-center mb-10" style={{ flexBasis: "50%" }}>
                    <div className="left flex-1 flex items-center justify-center md:justify-end mb-6 md:mb-0">
                        <div className="w-[80%] max-w-[400px] rounded overflow-hidden">
                            <Image src={gif1_tmp} alt="Feature 1 Image" width={400} height={400} className="w-full h-auto" />
                        </div>
                    </div>
                    <div className="right flex-1 flex flex-col items-center md:items-start justify-center text-center md:text-left">
                        <div className="feature text-xl font-bold mb-4">
                            <div>{data.feature1_1}</div>
                            <div>{data.feature1_2}</div>
                        </div>
                        <div className="f1">{data.explanation1}</div>
                    </div>
                </div>
                <div className="secondBlock w-full flex flex-col md:flex-row-reverse items-center justify-center" style={{ flexBasis: "50%" }}>
                    <div className="left flex-1 flex items-center justify-center md:justify-start mb-6 md:mb-0">
                        <div className="w-[80%] max-w-[400px] rounded overflow-hidden">
                            <Image src={gif2_tmp} alt="Feature 2 Image" width={400} height={400} className="w-full h-auto" />
                        </div>
                    </div>
                    <div className="right flex-1 flex flex-col items-center md:items-end justify-center text-center md:text-right">
                        <div className="feature text-xl font-bold mb-4">
                            <div>{data.feature2_1}</div>
                            <div>{data.feature2_2}</div>
                        </div>
                        <div className="exp">
                            <div>{data.explanation2_1}</div>
                            <div>{data.explanation2_2}</div>
                            <div>{data.explanation2_3}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
