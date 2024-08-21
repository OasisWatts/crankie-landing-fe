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

// export default function Solution({ data }: { data: { title1: string, title2: string, explanation1: string, explanation2: string } }) {

//     return (

//         <div className="bg-[#2A2829] text-center w-full py-[160px] flex flex-row justify-center items-center">
//             <div className="flex flex-col items-center">
//                 <div className="text-left text-white flex flex-col justify-center">
//                     <h1 className="text-[40px] font-extrabold">{data.title1}</h1>
//                     <h1 className="text-[40px] font-extrabold">{data.title2}</h1>
//                     <p className="mt-[30px] text-[25px]">{data.explanation1}</p>
//                     <p className="text-[25px]">{data.explanation2}</p>
//                 </div>
//             </div>
//             <div className="ml-[200px] w-[900px] h-[600px] rounded-md bg-gray-300 text-center flex items-center justify-center">
//                 <p className="py-[320px]">image</p>
//             </div>
//         </div>
//     )
// }