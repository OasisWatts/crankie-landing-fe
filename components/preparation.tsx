

export default function Preparation({ data }: { data: any }) {
    return (
        <div className="bg-gray-500 text-center inline-block w-full py-[160px] flex flex-col">
            {/* 상단 */}
            <div className="title flex flex-col justify-center items-center mb-40">
                <div className="w-[90px] h-[90px] bg-gray-300 border border-gray-400 flex items-center justify-center">
                    이미지
                </div>
                <h1 className="text-5xl font-extrabold mt-10">{data.title}</h1>
            </div>
            {/* 하단 */}
            <div className="bottom flex flex-row justify-center">
                {/* 좌 */}
                <div className="img mr-20">
                    <div className="w-[653px] h-[750px] bg-gray-300 border border-gray-400 flex items-center justify-center">
                        이미지
                    </div>
                </div>
                {/* 우 */}
                <div className="exp">
                    <div className="exp1 flex flex-row mb-40">
                        {/* 좌 */}
                        <div className="left mr-5">
                            <div className="w-[95px] h-[95px] bg-gray-300 border border-gray-400 flex items-center justify-center">
                                이미지
                            </div>
                        </div>
                        {/* 우 */}
                        <div className="right">
                            <h1 className="text-4xl font-extrabold">{data.explanation1}</h1>
                            <h1 className="text-xl font-extrabold">{data.explanation1_1}</h1>
                        </div>
                    </div>
                    <div className="exp2 flex flex-row mb-40">
                        <div className="left mr-5">
                            <div className="w-[95px] h-[95px] bg-gray-300 border border-gray-400 flex items-center justify-center">
                                이미지
                            </div>
                        </div>
                        <div className="right">
                            <h1 className="text-4xl font-extrabold">{data.explanation2}</h1>
                            <h1 className="text-xl font-extrabold">{data.explanation2_1}</h1>
                        </div>
                    </div>
                    <div className="exp3 flex flex-row mb-40">
                        <div className="left mr-5">
                            <div className="w-[95px] h-[95px] bg-gray-300 border border-gray-400 flex items-center justify-center">
                                이미지
                            </div>
                        </div>
                        <div className="right">
                            <h1 className="text-4xl font-extrabold">{data.explanation3}</h1>
                            <h1 className="text-4xl font-extrabold">{data.explanation3_0}</h1>
                            <h1 className="text-xl font-extrabold">{data.explanation3_1}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}