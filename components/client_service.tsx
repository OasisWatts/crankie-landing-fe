export default function ClientService({ data }: { data: any }) {
    return (
        <div className="bg-[#2A2829] text-center h-screen w-full flex flex-col items-center justify-center">
            {/* Top Section: Contains titles */}
            <div className="flex-1 flex flex-col w-full items-center justify-center text-white mt-20">
                <div className="text-5xl font-extrabold mb-2">{data.title1_1}</div>
                <div className="text-5xl font-extrabold mb-2">{data.title1_2}</div>
                <div className="text-5xl font-extrabold mb-2">{data.title1_3}</div>
                <div className="text-5xl font-extrabold mt-10">{data.title2}</div>
            </div>
            {/* Button Section */}
            <div className="flex-1 flex flex-col w-full items-center justify-center">
                <div className="flex flex-col items-center justify-end bg-blue-600 p-4 rounded-lg">
                    <button className="text-white bg-blue-700 hover:bg-blue-800 w-full h-full rounded">
                        {data.button}
                    </button>
                </div>
            </div>
        </div>
    );
}
