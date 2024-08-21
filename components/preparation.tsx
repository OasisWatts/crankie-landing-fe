'use client'

import { useState, useEffect } from "react";

export default function Preparation({ data }: { data: any }) {
    const [currentExp, setCurrentExp] = useState(1); 
    const expCount = 3; 

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentExp((prevExp) => (prevExp % expCount) + 1);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-gray-500 text-center h-screen w-full flex flex-col">
            <div className="title bg-slate-300 h-[30vh] flex flex-col">
                <div className="title-top bg-gray-300 flex-1 flex flex-row items-center justify-center" style={{ flexBasis: '50%' }}>
                    <div className="w-[90px] h-[90px] bg-gray-300 border border-gray-400 flex items-center justify-center">
                        check 이미지 
                    </div>
                </div>
                <div className="title-bottom flex-1 flex flex-col items-center justify-center" style={{ flexBasis: '50%' }}>
                    <h1 className="text-3xl font-extrabold">{data.title}</h1>
                </div>
            </div>
            <div className="content bg-slate-500 h-[70vh] flex flex-row">
                <div className="left bg-slate-700 flex-1 flex items-center justify-end" style={{ flexBasis: '50%' }}>
                    <div className="image w-[400px] h-[400px] bg-red-100 flex items-center justify-center mr-10">
                        image {currentExp}
                    </div>
                </div>
                {/*설명란*/}
                <div className="right flex-1 flex flex-col" style={{ flexBasis: '50%' }}>
                    {/*설명1 ${currentExp === 1 ? "bg-blue-500" : "bg-blue-50"}*/}
                    <div className={`exp1 flex flex-row items-center justify-center flex-1 `}>
                        <div className={`left h-full flex-1 flex items-center justify-center ${currentExp === 1 ? "bg-blue-500" : "bg-blue-100"}`} style={{flexBasis: "20%"}}>
                            <div className="w-[95px] h-[95px] bg-gray-300 border border-gray-400 flex items-center justify-center">
                                 이미지
                            </div>
                        </div>
                        <div className={`right h-full flex-1 flex flex-col items-start justify-center ${currentExp === 1 ? "bg-blue-500" : "bg-blue-50"}`} style={{flexBasis: "80%"}}>
                            <h1 className="text-3xl font-extrabold">{data.explanation1}</h1>
                            <h1 className="text-lg font-extrabold">{data.explanation1_1}</h1>
                        </div>
                    </div>
                    {/*설명2*/}
                    <div className={`exp2 flex flex-row items-center justify-center flex-1`}>
                        <div className={`left h-full flex-1 flex items-center justify-center ${currentExp === 2 ? "bg-blue-500" : "bg-blue-100"}`} style={{flexBasis: "20%"}}>
                            <div className="w-[95px] h-[95px] bg-gray-300 border border-gray-400 flex items-center justify-center">
                                 이미지
                            </div>
                        </div>
                        <div className={`right h-full flex-1 flex flex-col items-start justify-center ${currentExp === 2 ? "bg-blue-500" : "bg-blue-50"}`} style={{flexBasis: "80%"}}>
                            <h1 className="text-3xl font-extrabold">{data.explanation2}</h1>
                            <h1 className="text-lg font-extrabold">{data.explanation2_1}</h1>
                        </div>
                    </div>
                    {/*설명3*/}
                    <div className={`exp3 flex flex-row items-center justify-center flex-1`}>
                        <div className={`left h-full flex-1 flex items-center justify-center ${currentExp === 3 ? "bg-blue-500" : "bg-blue-100"}`} style={{flexBasis: "20%"}}>
                            <div className="w-[95px] h-[95px] bg-gray-300 border border-gray-400 flex items-center justify-center">
                                 이미지
                            </div>
                        </div>
                        <div className={`right h-full flex-1 flex flex-col items-start justify-center ${currentExp === 3 ? "bg-blue-500" : "bg-blue-50"}`} style={{flexBasis: "80%"}}>
                            <h1 className="text-3xl font-extrabold">{data.explanation3}</h1>
                            <h1 className="text-3xl font-extrabold">{data.explanation3_0}</h1>
                            <h1 className="text-lg font-extrabold">{data.explanation3_1}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}