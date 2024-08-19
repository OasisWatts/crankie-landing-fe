export default function Solution({ data }: { data: { title1: string, title2: string, explanation1: string, explanation2: string } }) {

    return (

        <div className="bg-[#2A2829] text-center w-full py-[160px] flex flex-row justify-center items-center">
            <div className="flex flex-col items-center">
                <div className="text-left text-white flex flex-col justify-center">
                    <h1 className="text-[40px] font-extrabold">{data.title1}</h1>
                    <h1 className="text-[40px] font-extrabold">{data.title2}</h1>
                    <p className="mt-[30px] text-[25px]">{data.explanation1}</p>
                    <p className="text-[25px]">{data.explanation2}</p>
                </div>
            </div>
            <div className="ml-[200px] w-[900px] h-[600px] rounded-md bg-gray-300 text-center flex items-center justify-center">
                <p className="py-[320px]">image</p>
            </div>
        </div>
    )
}