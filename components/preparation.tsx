'use client'

import { useState, useEffect } from "react";

export default function Preparation({ data }: { data: any }) {
    const [currentExp, setCurrentExp] = useState(1); 
    const [progress, setProgress] = useState(0); // Progress 상태 추가
    const expCount = 3;
    const intervalDuration = 3000; // 각 exp가 활성화되는 시간 (3초)

    useEffect(() => {
        // progress 바가 부드럽게 채워지도록 하는 효과
        const progressInterval = setInterval(() => {
            setProgress((prevProgress) => {
                if (prevProgress >= 100) {
                    return 100;
                }
                return prevProgress + (100 / (intervalDuration / 16.7)); // ~16.7ms 마다 업데이트 (60fps)
            });
        }, 16.7);

        return () => clearInterval(progressInterval);
    }, []);

    useEffect(() => {
        // 각 exp가 3초 후에 변경되도록 설정
        const interval = setInterval(() => {
            setCurrentExp((prevExp) => {
                setProgress(0); // 다음 exp가 시작될 때 progress를 초기화
                return (prevExp % expCount) + 1;
            });
        }, intervalDuration);

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
                {/* 설명란 */}
                <div className="right flex-1 flex flex-col" style={{ flexBasis: '50%' }}>
                    {/* 설명1 */}
                    <div className={`exp1 flex flex-row items-center justify-center flex-1 `}>
                        <div className="bar h-full flex-1 flex flex-col items-end justify-center" style={{ flexBasis: "5%" }}>
                            <div className="pBar w-2 overflow-hidden rounded-md" style={{
                                height: '100%', 
                                background: `linear-gradient(to bottom, black ${currentExp === 1 ? progress : 0}%, transparent ${currentExp === 1 ? progress : 0}%)`,
                                transition: 'background 0.1s linear'
                            }}></div>
                        </div>
                        <div className={`left h-full flex-1 flex items-center justify-center ${currentExp === 1 ? "bg-blue-500" : "bg-blue-100"}`} style={{ flexBasis: "20%" }}>
                            <div className="w-[95px] h-[95px] bg-gray-300 border border-gray-400 flex items-center justify-center">
                                이미지
                            </div>
                        </div>
                        <div className={`right h-full flex-1 flex flex-col items-start justify-center ${currentExp === 1 ? "bg-blue-500" : "bg-blue-50"}`} style={{ flexBasis: "75%" }}>
                            <h1 className="text-3xl font-extrabold">{data.explanation1}</h1>
                            <h1 className="text-lg font-extrabold">{data.explanation1_1}</h1>
                        </div>
                    </div>
                    {/* 설명2 */}
                    <div className={`exp2 flex flex-row items-center justify-center flex-1`}>
                        <div className="bar h-full flex-1 flex flex-col items-end justify-center" style={{ flexBasis: "5%" }}>
                            <div className="pBar w-2 overflow-hidden rounded-md" style={{
                                height: '100%', 
                                background: `linear-gradient(to bottom, black ${currentExp === 2 ? progress : 0}%, transparent ${currentExp === 2 ? progress : 0}%)`,
                                transition: 'background 0.1s linear'
                            }}></div>
                        </div>
                        <div className={`left h-full flex-1 flex items-center justify-center ${currentExp === 2 ? "bg-blue-500" : "bg-blue-100"}`} style={{ flexBasis: "20%" }}>
                            <div className="w-[95px] h-[95px] bg-gray-300 border border-gray-400 flex items-center justify-center">
                                이미지
                            </div>
                        </div>
                        <div className={`right h-full flex-1 flex flex-col items-start justify-center ${currentExp === 2 ? "bg-blue-500" : "bg-blue-50"}`} style={{ flexBasis: "75%" }}>
                            <h1 className="text-3xl font-extrabold">{data.explanation2}</h1>
                            <h1 className="text-lg font-extrabold">{data.explanation2_1}</h1>
                        </div>
                    </div>
                    {/* 설명3 */}
                    <div className={`exp3 flex flex-row items-center justify-center flex-1`}>
                        <div className="bar h-full flex-1 flex flex-col items-end justify-center" style={{ flexBasis: "5%" }}>
                            <div className="pBar w-2 overflow-hidden rounded-md" style={{
                                height: '100%', 
                                background: `linear-gradient(to bottom, black ${currentExp === 3 ? progress : 0}%, transparent ${currentExp === 3 ? progress : 0}%)`,
                                transition: 'background 0.1s linear'
                            }}></div>
                        </div>
                        <div className={`left h-full flex-1 flex items-center justify-center ${currentExp === 3 ? "bg-blue-500" : "bg-blue-100"}`} style={{ flexBasis: "20%" }}>
                            <div className="w-[95px] h-[95px] bg-gray-300 border border-gray-400 flex items-center justify-center">
                                이미지
                            </div>
                        </div>
                        <div className={`right h-full flex-1 flex flex-col items-start justify-center ${currentExp === 3 ? "bg-blue-500" : "bg-blue-50"}`} style={{ flexBasis: "75%" }}>
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
