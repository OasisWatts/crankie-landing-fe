export default function Waitlist({ data }: { data: any }) {
    return (
        <div className="bg-gray-400 text-center inline-block w-full py-[160px]">
            <div className="top">
                <h1 className="text-5xl font-extrabold">{data.title1}</h1>
                <h1 className="text-5xl font-extrabold">{data.title2}</h1>
            </div>
            <div className="bot">
                <div className="w-[150px] h-[150px] bg-gray-300 border border-gray-400 flex items-center justify-center">
                    크랭이 만나보기
                </div>
            </div>
        </div>
    )
}