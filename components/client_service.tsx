export default function ClientService({ data }: any) {
    return (
        <div className="bg-gray-200 text-center inline-block w-full py-[160px]">
            <div className="top">
                <h1 className="text-5xl font-extrabold">{data.title1_1}</h1>
                <h1 className="text-5xl font-extrabold">{data.title1_2}</h1>
                <h1 className="text-5xl font-extrabold">{data.title1_3}</h1>
            </div>
            <div className="bot">
                <h1 className="text-5xl font-extrabold">{data.title2}</h1>
            </div>
            <div className="btn">
                <button>{data.button}</button>
            </div>
        </div>
    )
}