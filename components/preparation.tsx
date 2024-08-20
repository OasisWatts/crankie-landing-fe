export default function Preparation({ data }: { data: any }) {
    return (
        <div className="bg-gray-500 text-center h-screen w-full flex flex-col">
            <div className="title bg-slate-300 h-[30vh] flex flex-col">
                <div className="title-top bg-blue-300 flex-1 flex flex-row items-center justify-center" style={{ flexBasis: '50%' }}>
                    <div className="w-[90px] h-[90px] bg-gray-300 border border-gray-400 flex items-center justify-center">
                        이미지
                    </div>
                </div>
                <div className="title-bottom flex-1" style={{ flexBasis: '50%' }}>
                    <h1 className="text-3xl font-extrabold mt-10">{data.title}</h1>
                </div>
            </div>
            <div className="content bg-slate-500 h-[70vh] flex flex-row">
                <div className="left bg-slate-700 flex-1 flex items-center justify-center" style={{ flexBasis: '50%'}}>
                    <div className="image w-[90px] h-[90px] bg-red-100 flex items-center justify-center">
                        image
                    </div>
                </div>
                <div className="right flex-1 flex flex-col" style={{ flexBasis: '50%'}}>
                    <div className="exp1 flex-1 bg-blue-50">
                        explanation1
                    </div>
                    <div className="exp2 flex-1 bg-blue-200">
                        explanation2
                    </div>
                    <div className="exp3 flex-1 bg-blue-400">
                        explanation3
                    </div>
                </div>
            </div>
        </div>
    );
}



// export default function Preparation({ data }: { data: any }) {
//     return (
//         <div className="bg-gray-500 text-center h-screen w-full py-[160px] flex flex-col">
//             {/* 상단 */}
//             <div className="title flex flex-col justify-center items-center mb-40">
//                 <div className="w-[90px] h-[90px] bg-gray-300 border border-gray-400 flex items-center justify-center">
//                     이미지
//                 </div>
//                 <h1 className="text-3xl font-extrabold mt-10">{data.title}</h1>
//             </div>
//             {/* 하단 */}
//             <div className="bottom flex flex-row justify-center">
//                 {/* 좌 */}
//                 <div className="img mr-20">
//                     <div className="w-[500px] h-[500px] bg-gray-300 border border-gray-400 flex items-center justify-center">
//                         이미지
//                     </div>
//                 </div>
//                 {/* 우 */}
//                 <div className="exp">
//                     <div className="exp1 flex flex-row mb-40">
//                         {/* 좌 */}
//                         <div className="left mr-5">
//                             <div className="w-[95px] h-[95px] bg-gray-300 border border-gray-400 flex items-center justify-center">
//                                 이미지
//                             </div>
//                         </div>
//                         {/* 우 */}
//                         <div className="right flex flex-col justify-start items-start">
//                             <h1 className="text-3xl font-extrabold">{data.explanation1}</h1>
//                             <h1 className="text-lg font-extrabold">{data.explanation1_1}</h1>
//                         </div>
//                     </div>
//                     <div className="exp2 flex flex-row mb-40">
//                         <div className="left mr-5">
//                             <div className="w-[95px] h-[95px] bg-gray-300 border border-gray-400 flex items-center justify-center">
//                                 이미지
//                             </div>
//                         </div>
//                         <div className="right flex flex-col justify-start items-start">
//                             <h1 className="text-3xl font-extrabold">{data.explanation2}</h1>
//                             <h1 className="text-lg font-extrabold">{data.explanation2_1}</h1>
//                         </div>
//                     </div>
//                     <div className="exp3 flex flex-row mb-40">
//                         <div className="left mr-5">
//                             <div className="w-[95px] h-[95px] bg-gray-300 border border-gray-400 flex items-center justify-center">
//                                 이미지
//                             </div>
//                         </div>
//                         <div className="right flex flex-col justify-start items-start">
//                             <h1 className="text-3xl font-extrabold">{data.explanation3}</h1>
//                             <h1 className="text-3xl font-extrabold">{data.explanation3_0}</h1>
//                             <h1 className="text-lg font-extrabold">{data.explanation3_1}</h1>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }