export default function FeatureCasting({ data }: { data: any }) {
    return (
        <div className="inline-block w-screen py-[160px]">
            <div className="text-center">
                <p className="text-3xl font-bold">
                    {data.title}
                </p>
            </div>
            {/* Block 1*/}
            <div className="mt-[250px] flex justify-center">
                <div className="w-[400px] h-[400px] rounded bg-gray-700">GIF</div>
                <div className="pl-[100px] h-[400px] flex flex-col justify-center">
                    <p className="text-xl font-bold">
                        {data.feature1_1}
                    </p>
                    <p className="text-xl font-bold">
                        {data.feature1_2}
                    </p>
                    <p className="mt-5">
                        {data.explanation1}
                    </p>
                </div>
            </div>
            {/*Block 2*/}
            <div className="mt-[100px] flex justify-center">
                <div className="pr-[100px] h-[400px] flex flex-col justify-center">
                    <p className="text-xl font-bold">
                        {data.feature2_1}
                    </p>
                    <p className="text-xl font-bold">
                        {data.feature2_2}
                    </p>
                    <p className="mt-5">
                        {data.explanation2}
                    </p>
                </div>
                <div className="w-[400px] h-[400px] rounded bg-gray-700">GIF</div>
            </div>
        </div>
    )
}