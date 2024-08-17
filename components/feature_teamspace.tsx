export default function FeatureTeamSpace({ data }: { data: any }) {
    return (
        <div className="inline-block w-screen p-[80px] h-[800px] bg-blue-500 relative">
            <div className="relative">
                {/*Left*/}
                <div className="absolute top-0">
                    <p className="text-xl font-bold">{data.title}</p>
                    <p className="mt-5">{data.explanation1}</p>
                    <p className="">{data.explanation2}</p>
                    <p className="">{data.explanation3}</p>
                </div>
                <div className="absolute top-[500px]">
                    <p className="text-2xl font-extrabold">{data.footer1}</p>
                    <p className="text-2xl font-extrabold">{data.footer2}</p>
                </div>
                {/*Righet*/}
                <div className="bg-gray-200 w-[550px] h-[400px] rounded ml-[100px] absolute right-0 top-[200px]">
                    GIF
                </div>
            </div>
        </div>
    )
}