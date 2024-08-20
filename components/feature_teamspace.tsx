export default function FeatureTeamSpace({ data }: { data: any }) {
    return (
        <div className="w-full h-screen bg-blue-500 flex flex-row justify-center items-center">
            <div className="left h-full flex-1 flex flex-col items-end justify-center" style={{flexBasis: "50%"}}>
                <div className="title flex flex-col items-end justify-center mr-10">
                    <p className="text-5xl">여기 빨리 디자인 내놔</p>
                    <p className="text-xl font-bold">{data.title}</p>
                    <p className="mt-5">{data.explanation1}</p>
                    <p className="">{data.explanation2}</p>
                    <p className="mb-20">{data.explanation3}</p>
                    <p className="text-2xl font-extrabold">{data.footer1}</p>
                    <p className="text-2xl font-extrabold">{data.footer2}</p>
                </div>
            </div>
            <div className="right h-full bg-red-200 flex-1 flex flex-col items-start justify-center" style={{flexBasis: "50%"}}>
                <div className="bg-gray-200 w-[550px] h-[400px] flex flex-col items-start justify-center ml-10">
                    GIF
                </div>
            </div>
        </div>
    )
}

// export default function FeatureTeamSpace({ data }: { data: any }) {
//     return (
//         <div className="w-full h-screen bg-blue-500 flex flex-row justify-center items-center">
//             {/*Left*/}
//             <div className="flex flex-col top-0">
//                 <p className="text-xl font-bold">{data.title}</p>
//                 <p className="mt-5">{data.explanation1}</p>
//                 <p className="">{data.explanation2}</p>
//                 <p className="mb-20">{data.explanation3}</p>
//                 <div className="top-[500px] mt-40">
//                     <p className="text-2xl font-extrabold">{data.footer1}</p>
//                     <p className="text-2xl font-extrabold">{data.footer2}</p>
//                 </div>
//             </div>
//             {/*Righet*/}
//             <div className="bg-gray-200 w-[550px] h-[400px] rounded ml-[100px] right-0 top-[200px]">
//                 GIF
//             </div>
//         </div>
//     )
// }