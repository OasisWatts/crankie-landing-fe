export default function Problem({ data }: { data: { title1: string, title2: string, paragraph1: string, paragraph2: string } }) {
    return (
        <div className="text-center w-full h-screen flex flex-col items-center justify-center">
            <div className="top flex-1 w-full flex flex-col bg-gray-50" style={{ flexBasis: '40%' }}>
                <div className="top flex-1 flex flex-col bg-gray-600 w-full items-center justify-center">
                    <div className="image w-[90px] h-[90px] bg-white flex items-center justify-center">
                        image
                    </div>
                </div>
                <div className="mid flex-1 flex flex-col bg-gray-100 w-full items-center justify-center">
                    <h1 className="text-3xl font-extrabold">{data.title1}</h1>
                    <h1 className="text-3xl font-extrabold">{data.title2}</h1>
                </div>
                <div className="bot flex-1 flex flex-col bg-gray-400 items-center justify-center">
                    <h1 className="text-xl font-bold">{data.paragraph1}</h1>
                    <h1 className="text-xl font-bold">{data.paragraph2}</h1>
                </div>
            </div>
            <div className="bot flex-1 w-full flex flex-col bg-gray-100" style={{ flexBasis: '60%' }}>
                <div className="img bg-black flex-1 flex flex-col m-10 rounded-xl">
                    <div className="img1 flex1 flex bg-white" style={{ flexBasis: '50%' }}>
                        
                    </div>
                    <div className="img2 flex1 flex bg-gray-300" style={{ flexBasis: '50%' }}>
                    
                    </div>
                </div>
            </div>
        </div>
    )
}