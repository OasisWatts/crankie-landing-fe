import Image from "next/image";

export default function Front({ data }: { data: { title1: string, title2: string } }) {

    return (
        <div className="bg-gray-500 text-center inline-block w-full py-[160px]">
            <h1 className="text-5xl font-extrabold">{data.title1}</h1>
            <h1 className="text-5xl font-extrabold">{data.title2}</h1>
            {/** <Image src={image} alt="image" /> */}
        </div>
    )
}