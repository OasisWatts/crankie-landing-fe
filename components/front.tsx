export default function Front({ data }: { data: { title1: string, title2: string } }) {

    return (
        <div className="front text-center w-full h-screen flex flex-col items-center justify-center">
            <div className="bg-blue-400 top flex flex-col w-full items-center justify-center" style={{ flexBasis: '50%' }}>
                <h1 className="text-5xl font-extrabold text-white">{data.title1}</h1>
                <h1 className="text-5xl font-extrabold text-white">{data.title2}</h1>
            </div>
            <div className="bot w-full bg-red-300 flex flex-col items-center justify-center" style={{ flexBasis: '50%' }}>
                <div className="image w-[150px] h-[150px] bg-green-200">
                    image
                </div>
            </div>
        </div>
    )
}