export default function Waitlist({ data }: { data: any }) {
    return (
        <div className="bg-gray-400 text-center inline-block w-full h-screen py-[160px] flex flex-col items-center">
            <div className="top mb-20">
                <h1 className="text-3xl font-extrabold">{data.title1}</h1>
                <h1 className="text-3xl font-extrabold">{data.title2}</h1>
            </div>
            <div className="bot mt-20">
                <div className="w-[150px] h-[150px] bg-gray-300 border border-gray-400 flex items-center justify-center mt-20">
                    크랭이 만나보기
                </div>
            </div>
        </div>
    )
}