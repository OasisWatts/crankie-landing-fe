export default function PiazzaLogo(props: { gotoHome?: boolean, height: string }) {
    const handleClick = () => {
        if (props.gotoHome) {
            window.location.href = "/"
        }
    }
    return (
        <div onClick={handleClick} className="cursor-pointer">
            <svg width="current" viewBox="0 0 271 70" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" height={props.height}>
                <g clip-path="url(#clip0_514_251)">
                    <path d="M66.6841 27.0006L43.0002 3.31663C38.5827 -1.1009 31.4181 -1.1009 26.9882 3.31663L3.31663 27.0006C-1.1009 31.4181 -1.1009 38.5827 3.31663 43.0126L27.0006 66.6965C31.4181 71.1141 38.5827 71.1141 43.0126 66.6965L66.6965 43.0126C71.1141 38.595 71.1141 31.4305 66.6965 27.0006H66.6841ZM35.0066 51.0186C26.1591 51.0186 18.9822 43.8416 18.9822 34.9942C18.9822 26.1468 26.1591 18.9698 35.0066 18.9698C43.854 18.9698 51.031 26.1468 51.031 34.9942C51.031 43.8416 43.854 51.0186 35.0066 51.0186Z" fill="url(#paint0_linear_514_251)" />
                </g>
                <rect x="98" width="173" height="62" fill="url(#pattern0_514_251)" />
                <defs>
                    <pattern id="pattern0_514_251" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use xlinkHref="#image0_514_251" transform="matrix(0.00158576 0 0 0.00442478 -0.0233004 0)" />
                    </pattern>
                    <linearGradient id="paint0_linear_514_251" x1="7.43719" y1="50.9196" x2="62.5636" y2="19.0812" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#D9B7F8" />
                        <stop offset="0.45" stop-color="#FAC0D8" />
                        <stop offset="0.55" stop-color="#FAC0D8" />
                        <stop offset="1" stop-color="#E38F69" />
                    </linearGradient>
                    <clipPath id="clip0_514_251">
                        <rect width="70" height="70" fill="white" />
                    </clipPath>
                    <image id="image0_514_251" width="660" height="226" xlinkHref="data:image/png;base64,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" />
                </defs>
            </svg >
        </div>
    )
}