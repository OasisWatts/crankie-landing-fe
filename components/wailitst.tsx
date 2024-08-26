'use client'

import insta_img from '@/img/insta_btn.svg'
import register_btn from '@/img/register_btn.svg'
import Image from "next/image"
import { useRouter } from 'next/navigation'

export default function Waitlist({ data }: { data: any }) {
    const router = useRouter();

    // 이미지 클릭 시 이동할 URL로 네이버 페이지를 지정
    const handleRegisterClick = () => {
        window.open('https://www.naver.com', '_blank');
    }

    // 인스타그램 아이콘 클릭 시 새로운 탭에서 인스타그램 페이지를 열기
    const handleInstagramClick = () => {
        window.open('https://www.instagram.com/your_instagram_account', '_blank');
    }

    return (
        <div className="bg-[#D1E8FF] text-center w-full h-screen flex flex-col items-center justify-center p-4">
            {/* 상단 텍스트 부분 */}
            <div className="top w-full flex-1 flex flex-col items-center justify-end p-4 ml-10">
                <h1 className="text-5xl font-extrabol">사전 등록하고,</h1>
                <h1 className="text-5xl font-extrabold">크랭이의 소식을 빠르게 만나보세요</h1>
            </div>

            {/* 하단 이미지 및 인스타그램 아이콘 부분 */}
            <div className="bot w-full flex-1 flex flex-row items-center justify-center">
                <Image unoptimized src={register_btn} alt="waitlist image" width={240} height={70} className='rounded-sm mr-5' onClick={handleRegisterClick} style={{ cursor: "pointer" }} />
                <Image unoptimized src={insta_img} alt="waitlist image" width={240} height={70} className='rounded-sm' onClick={handleInstagramClick} style={{ cursor: "pointer" }} />
            </div>
        </div>
    )
}
