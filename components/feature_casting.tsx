export default function FeatureCasting({ data }: { data: any }) {
    return (
        <div>
            <div>
                <p>
                    {data.title}
                </p>
            </div>
            <div>
                <div>hello</div>
                <div>
                    <p>
                        {data.feature1_1}

                    </p>
                    <p>
                        {data.feature1_2}
                    </p>
                    <p>
                        {data.explanation1}
                    </p>
                </div>
            </div>
            <div>
                <div></div>
                <div>
                    <p>
                        {data.feature2_1}

                    </p>
                    <p>
                        {data.feature2_2}
                    </p>
                    <p>
                        {data.explanation2}
                    </p>
                </div>
            </div>
        </div>
    )
}