import Image from "next/image";

export default function Problem({ data }: { data: { title1: string, title2: string, paragraph1: string, paragraph2: string } }) {
    return (
        <div className="text-center inline-block w-full py-[160px]">
            <h1 className="text-3xl font-extrabold">{data.title1}</h1>
            <h1 className="text-3xl font-extrabold">{data.title2}</h1>
            <p className="mt-5">{data.paragraph1}</p>
            <p>{data.paragraph2}</p>
            {/* <Image src={image} alt="image"/> */}
        </div>
    )
}