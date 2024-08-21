'use client'

import check_img from '@/img/check-img.jpg'
import preparation_img1 from '@/img/preparation_img1.jpg'
import preparation_img2 from '@/img/preparation_img2.jpg'
import preparation_img3 from '@/img/preparation_img3.jpg'
import preparation_pic1 from '@/img/preparation_pic1.jpg'
import preparation_pic2 from '@/img/preparation_pic2.jpg'
import preparation_pic3 from '@/img/preparation_pic3.jpg'
import Image from "next/image"

import { useState, useEffect } from "react";

export default function Preparation({ data }: { data: any }) {
    const [currentExp, setCurrentExp] = useState(1); 
    const [progress, setProgress] = useState(0); // Progress 상태 추가
    const expCount = 3;
    const intervalDuration = 3000; // 각 exp가 활성화되는 시간 (3초)

    const getImageForCurrentExp = () => {
        switch (currentExp) {
            case 1:
                return preparation_img1;
            case 2:
                return preparation_img2;
            case 3:
                return preparation_img3;
            default:
                return preparation_img1;
        }
    };

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
        <div className="bg-white text-center h-screen w-full flex flex-col">
            <div className="title h-[30vh] flex flex-col">
                <div className="title-top flex-1 flex flex-row items-center justify-center" style={{ flexBasis: '50%' }}>
                    <div className="w-[60px] h-[60px] flex items-center justify-cente mt-10">
                        <Image src={check_img} alt="dsf" width={60} height={60}/>
                    </div>
                </div>
                <div className="title-bottom flex-1 flex flex-col items-center justify-center" style={{ flexBasis: '50%' }}>
                    <h1 className="text-4xl font-extrabold">{data.title}</h1>
                </div>
            </div>
            <div className="content bg-white h-[70vh] flex flex-row">
                <div className="left flex-1 flex items-center justify-end" style={{ flexBasis: '50%' }}>
                    <div className="image w-[400px] h-[400px] bg-white flex items-center justify-center mr-10">
                        <Image src={getImageForCurrentExp()} alt={`Preparation Image ${currentExp}`} width={400} height={400}/>
                    </div>
                </div>
                {/* 설명란 */}
                <div className="right flex-1 flex flex-col" style={{ flexBasis: '50%' }}>
                    {/* 설명1 */}
                    <div className={`exp1 flex flex-row items-center justify-center flex-1 `} style={{flexBasis: "30%"}}>
                        <div className="bar h-full flex-1 flex flex-col items-end justify-center" style={{ flexBasis: "2%" }}>
                            <div className="pBar w-1 overflow-hidden rounded-md" style={{
                                height: '50%', 
                                background: `linear-gradient(to bottom, black ${currentExp === 1 ? progress : 0}%, transparent ${currentExp === 1 ? progress : 0}%)`,
                                transition: 'background 0.1s linear',
                                borderRadius: '0 0 50px 50px'
                            }}></div>
                        </div>
                        <div className={`left h-full flex-1 flex items-center justify-center`} style={{ flexBasis: "10%" }}>
                            <div className="w-[40px] h-[40px] flex items-center justify-center">
                                <Image src={preparation_pic1} alt="dsf" width={40} height={40} className={`${currentExp === 1 ? "" : "opacity-15"}`}/>
                            </div>
                        </div>
                        <div className={`right h-full flex-1 flex flex-col items-start justify-center ${currentExp === 1 ? "font-extrabold" : "font-light"}`} style={{ flexBasis: "88%" }}>
                            <h1 className="text-2xl">{data.explanation1}</h1>
                            <h1 className="text-md">{data.explanation1_1}</h1>
                        </div>
                    </div>
                    {/* 설명2 */}
                    <div className={`exp2 flex flex-row items-center justify-center flex-1`} style={{flexBasis: "30%"}}>
                        <div className="bar h-full flex-1 flex flex-col items-end justify-center" style={{ flexBasis: "2%" }}>
                            <div className="pBar w-1 overflow-hidden rounded-md" style={{
                                height: '50%', 
                                background: `linear-gradient(to bottom, black ${currentExp === 2 ? progress : 0}%, transparent ${currentExp === 2 ? progress : 0}%)`,
                                transition: 'background 0.1s linear',
                                borderRadius: '0 0 50px 50px'
                            }}></div>
                        </div>
                        <div className={`left h-full flex-1 flex items-center justify-center`} style={{ flexBasis: "10%" }}>
                            <div className="w-[40px] h-[40px] flex items-center justify-center">
                                <Image src={preparation_pic2} alt="dsf" width={40} height={40} className={`${currentExp === 2 ? "" : "opacity-15"}`}/>
                            </div>
                        </div>
                        <div className={`right h-full flex-1 flex flex-col items-start justify-center ${currentExp === 2 ? "font-extrabold" : "font-light"}`} style={{ flexBasis: "88%" }}>
                            <h1 className="text-2xl">{data.explanation2}</h1>
                            <h1 className="text-md">{data.explanation2_1}</h1>
                        </div>
                    </div>
                    {/* 설명3 */}
                    <div className={`exp3 flex flex-row items-center justify-center flex-1`} style={{flexBasis: "40%"}}>
                        <div className="bar h-full flex-1 flex flex-col items-end justify-center" style={{ flexBasis: "2%" }}>
                            <div className="pBar w-1 overflow-hidden rounded-md" style={{
                                height: '50%', 
                                background: `linear-gradient(to bottom, black ${currentExp === 3 ? progress : 0}%, transparent ${currentExp === 3 ? progress : 0}%)`,
                                transition: 'background 0.1s linear',
                                borderRadius: '0 0 50px 50px'
                            }}></div>
                        </div>
                        <div className={`left h-full flex-1 flex items-center justify-center`} style={{ flexBasis: "10%" }}>
                            <div className="w-[40px] h-[40px] flex items-center justify-center">
                                <Image src={preparation_pic3} alt="dsf" width={40} height={40} className={`${currentExp === 3 ? "" : "opacity-15"}`}/>
                            </div>
                        </div>
                        <div className={`right h-full flex-1 flex flex-col items-start justify-center ${currentExp === 3 ? "font-extrabold" : "font-light"}`} style={{ flexBasis: "88%" }}>
                            <h1 className="text-2xl">{data.explanation3}</h1>
                            <h1 className="text-2xl">{data.explanation3_0}</h1>
                            <h1 className="text-md">{data.explanation3_1}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
