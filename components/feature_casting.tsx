export default function FeatureCasting({ data }: { data: any }) {
    return (
        <div className="w-full h-[150vh] flex flex-col justify-center items-center">
            <div className="top bg-gray-100 w-full flex-1 flex flex-col items-center justify-center" style={{flexBasis: "20%"}}>
                <div className="img w-[90px] h-[90px] bg-blue-100 flex flex-col items-center justify-center mt-10">
                    image
                </div>
                <div className="title text-5xl font-extrabold mt-5 mb-5">
                    {data.title}
                </div>
            </div>
            <div className="bot w-full bg-gray-600 flex-1 flex flex-col items-center justify-center" style={{flexBasis: "80%"}}>
                <div className="firstBlock w-full bg-white flex-1 flex flex-row items-center justify-center" style={{flexBasis: "50%"}}>
                    <div className="left bg-slate-300 flex-1 h-full flex flex-col items-end justify-center">
                        <div className="w-[400px] h-[400px] rounded bg-gray-700 mr-10">GIF</div>
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
                    <div className="right bg-slate-300 flex-1 h-full flex flex-col items-start justify-center">
                        <div className="w-[400px] h-[400px] rounded bg-gray-700 ml-10">GIF</div>
                    </div>
                </div>
            </div>
        </div>
    )
}