export function ExampleComponent() {
    return (
        <div className="inline-block text-center p-5 w-[50rem] h-[25rem] bg-gray-500">
            <p>react components example</p>
            <ExampleSubComponent value={1} />
            <ExampleSubComponent value={2} />
        </div>
    )
}

export function ExampleSubComponent({ value }: { value: number }) {
    return (
        <div className="inline-block m-5 p-5 w-[20rem] h-[20rem] bg-gray-300">
            subComponent {value}
        </div>
    )
}
