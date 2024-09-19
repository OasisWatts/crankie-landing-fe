export default function Front({ data }: { data: { title1: string, title2: string, title3: string, title4: string, title5: string, title6: string, title7: string } }) {
    return (
        <div className="relative h-[20vh] bg-white flex items-center justify-center">
            {/* Mobile: flex-col, Web: flex-row */}
            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0">

                <div className="w-[1px] h-[20px] sm:h-[40px] bg-black"></div>
                <h1 className="text-xs sm:text-base">{data.title1}</h1>

                <div className="w-[1px] h-[20px] sm:h-[40px] bg-black"></div>
                <h1 className="text-xs sm:text-base">{data.title2}</h1>

                <div className="w-[1px] h-[20px] sm:h-[40px] bg-black"></div>
                <h1 className="text-xs sm:text-base">{data.title3}</h1>

                <div className="w-[1px] h-[20px] sm:h-[40px] bg-black"></div>
                <h1 className="text-xs sm:text-base">{data.title4}</h1>

                <div className="w-[1px] h-[20px] sm:h-[40px] bg-black"></div>
                <h1 className="text-xs sm:text-base">{data.title5}</h1>

                <div className="w-[1px] h-[20px] sm:h-[40px] bg-black"></div>
                <h1 className="text-xs sm:text-base">{data.title6}</h1>

                <div className="w-[1px] h-[20px] sm:h-[40px] bg-black"></div>
                <h1 className="text-xs sm:text-base">{data.title7}</h1>
            </div>
        </div>
    );
}
