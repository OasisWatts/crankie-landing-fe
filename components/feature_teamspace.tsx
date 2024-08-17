export default function FeatureTeamSpace({ data }: { data: any }) {
    return (
        <div className="inline-block w-screen p-[80px] h-[800px] bg-blue-500 flex flex-row justify-center items-center">
            {/*Left*/}
            <div className="flex flex-col top-0">
                <p className="text-xl font-bold">{data.title}</p>
                <p className="mt-5">{data.explanation1}</p>
                <p className="">{data.explanation2}</p>
                <p className="mb-20">{data.explanation3}</p>
                <div className="top-[500px] mt-40">
                    <p className="text-2xl font-extrabold">{data.footer1}</p>
                    <p className="text-2xl font-extrabold">{data.footer2}</p>
                </div>
            </div>
            {/*Righet*/}
            <div className="bg-gray-200 w-[550px] h-[400px] rounded ml-[100px] right-0 top-[200px]">
                GIF
            </div>
        </div>
    )
}