'use client'

import waitlist_img from '@/img/waitlist_img.svg'
import Image from "next/image"
import { useRouter } from 'next/navigation'

export default function Waitlist({ data }: { data: any }) {
    const router = useRouter();

    // 이미지 클릭 시 이동할 URL로 네이버 페이지를 지정
    const handleImageClick = () => {
        window.open('https://www.naver.com', '_blank');
    }

    // 인스타그램 아이콘 클릭 시 새로운 탭에서 인스타그램 페이지를 열기
    const handleInstagramClick = () => {
        window.open('https://www.instagram.com/your_instagram_account', '_blank');
    }

    return (
        <div className="bg-[#2237C6] text-center w-full h-screen flex flex-col items-center justify-center">
            {/* 상단 텍스트 부분 */}
            <div className="top w-full flex-1 flex flex-col items-center justify-end mb-20 text-white">
                <h1 className="text-5xl font-extrabold">{data.title1}</h1>
                <h1 className="text-5xl font-extrabold">{data.title2}</h1>
            </div>

            {/* 하단 이미지 및 인스타그램 아이콘 부분 */}
            <div className="bot w-full flex-1 flex flex-col items-center justify-start">
                <div 
                    className="w-[150px] h-[150px] flex items-center justify-center mb-15 cursor-pointer" 
                    onClick={handleImageClick} // 클릭 시 handleImageClick 함수 호출
                >
                    <Image src={waitlist_img} alt="waitlist image" width={150} height={150}/>
                </div>

                {/* 인스타그램 아이콘 */}
                <div className="insta mt-20 cursor-pointer" onClick={handleInstagramClick}>
                    <span className="[&>svg]:h-20 [&>svg]:w-20">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 448 512"
                            color='white'
                        >
                            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8z" />
                        </svg>
                    </span>
                </div>
            </div>
        </div>
    )
}
