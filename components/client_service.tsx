export default function ClientService({ data }: any) {
    return (
        <div className="bg-[#2A2829] text-center h-screen w-full flex flex-col items-center justify-center">
            <div className="top flex-1 flex flex-col w-full items-center justify-center text-white mt-20">
                <div className="text-5xl font-extrabold">{data.title1_1}</div>
                <div className="text-5xl font-extrabold">{data.title1_2}</div>
                <div className="text-5xl font-extrabold mb-10">{data.title1_3}</div>
                <div className="text-5xl font-extrabold mt-10">{data.title2}</div>
            </div>
            <div className="top flex-1 flex flex-col w-full items-center justify-center">
                <div className="flex flex-col items-center justify-end bg-blue-600">
                    <button className="">{data.button}</button>
                </div>
            </div>
        </div>
    )
}