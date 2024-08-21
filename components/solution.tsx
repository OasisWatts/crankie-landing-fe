export default function Solution({ data }: { data: { title1: string, title2: string, explanation1: string, explanation2: string } }) {

    return (

        <div className="bg-blue-400 w-full h-screen flex flex-row justify-center items-center">
            <div className="left flex1 h-full flex flex-col justify-center items-center" style={{ flexBasis: "50%" }}>
                <div className="title">
                    <h1 className="text-5xl font-extrabold">{data.title1}</h1>
                    <h1 className="text-5xl font-extrabold">{data.title2}</h1>
                </div>
                <div className="content">
                    <h1 className="text-xl font-bold">{data.explanation1}</h1>
                    <h1 className="text-xl font-bold">{data.explanation2}</h1>
                </div>
            </div>
            <div className="right bg-red-400 flex1 h-full flex flex-col justify-center items-center" style={{ flexBasis: "50%" }}>
                <div className="img flex justify-center items-center h-[300px] w-[300px] bg-gray-200">
                    이미지 크랭이 로고
                </div>
            </div>
        </div>
    )
}