export default function Waitlist({ data }: { data: any }) {
    return (
        <div className="bg-blue-400 text-center w-full h-screen flex flex-col items-center justify-center">
            <div className="top bg-red-100 w-full flex-1 flex flex-col items-center justify-center">
                <h1 className="text-3xl font-extrabold">{data.title1}</h1>
                <h1 className="text-3xl font-extrabold">{data.title2}</h1>
            </div>
            <div className="bot w-full flex-1 flex flex-col items-center justify-center">
                <div className="w-[150px] h-[150px] bg-gray-300 border border-gray-400 flex items-center justify-center">
                    크랭이 만나보기
                </div>
            </div>
        </div>
    )
}