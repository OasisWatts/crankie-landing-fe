import img_tmp from '@/img/check-img.jpg'
import gif1_tmp from '@/img/gif1.jpg'
import gif2_tmp from '@/img/gif2.jpg'
import Image from "next/image"

export default function FeatureCasting({ data }: { data: any }) {
    return (
        <div className="w-full h-[150vh] flex flex-col justify-center items-center bg-white">
            <div className="top bg-white w-full flex-1 flex flex-col items-center justify-center" style={{flexBasis: "20%"}}>
                <div className="img w-[60px] h-[60px] flex flex-col items-center justify-center mt-10">
                    <Image src={img_tmp} alt="dsf" width={60} height={60}/>
                </div>
                <div className="title text-5xl font-extrabold mt-5 mb-5">
                    {data.title}
                </div>
            </div>
            <div className="bot w-full flex-1 flex flex-col items-center justify-center" style={{flexBasis: "80%"}}>
                <div className="firstBlock w-full bg-white flex-1 flex flex-row items-center justify-center" style={{flexBasis: "50%"}}>
                    <div className="left flex-1 h-full flex flex-col items-end justify-center">
                        <div className="w-[400px] h-[400px] rounded">
                            <Image src={gif1_tmp} alt="dsf" width={400} height={400}/>
                        </div>
                    </div>
                    <div className="right flex-1 h-full flex flex-col items-start justify-center">
                        <div className="feature ml-10">
                            <div className="f1 text-xl font-bold">{data.feature1_1}</div>
                            <div className="f1 text-xl font-bold">{data.feature1_2}</div>
                        </div>
                        <div className="f1 ml-10 mt-5">{data.explanation1}</div>
                    </div>
                </div>
                <div className="secondBlock w-full flex-1 flex flex-row items-center justify-center" style={{flexBasis: "50%"}}>
                    <div className="left flex-1 h-full flex flex-col items-end justify-center">
                        <div className="feature mr-10 flex flex-col items-end">
                            <div className="f1 text-xl font-bold">{data.feature2_1}</div>
                            <div className="f1 text-xl font-bold">{data.feature2_2}</div>
                        </div>
                        <div className="exp mr-10 mt-5 flex flex-col items-end">
                            <div className="f1 ">{data.explanation2_1}</div>
                            <div className="f1 ">{data.explanation2_2}</div>
                            <div className="f1 ">{data.explanation2_2}</div>
                        </div>
                    </div>
                    <div className="right flex-1 h-full flex flex-col items-start justify-center">
                        <div className="w-[400px] h-[400px] rounded">
                            <Image src={gif2_tmp} alt="dsf" width={400} height={400}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}