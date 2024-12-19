import React, { useEffect, useState } from "react"

const images = [
    "https://fps.cdnpk.net/photos/home/cover_v3.webp?w=1500",
    "https://img.freepik.com/free-photo/herd-horses-grazing-pasture-beautiful-sky_181624-41307.jpg?ga=GA1.1.1634876070.1734566507&semt=ais_hybrid",
    "https://img.freepik.com/free-photo/medium-shot-latin-people-training-outdoors_23-2151039433.jpg?t=st=1734548926~exp=1734549526~hmac=6e9e9eb149c4022c30e15310d48b16437092012aad75507c0fac302940ed9c00",
    "https://img.freepik.com/free-photo/athletic-male-swimmer-looking-away_23-2148326858.jpg?ga=GA1.1.1634876070.1734566507&semt=ais_hybrid",
    "https://img.freepik.com/free-photo/young-girl-posing-inside-swimming-pool_23-2148700013.jpg?t=st=1734566618~exp=1734570218~hmac=ecd8d6fac5fa586a0ba294f5c07bec623a6f8c7e2d5511d5543e1d86b1abbad7&w=996",
    "https://img.freepik.com/free-photo/closeup-shot-majestic-bald-eagle-about-fly-from-wooden-post-cool-day_181624-13562.jpg?ga=GA1.1.1634876070.1734566507&semt=ais_hybrid",
    "https://img.freepik.com/free-photo/shallow-focus-shot-male-lion-resting-grass-field_181624-15831.jpg?ga=GA1.1.1634876070.1734566507&semt=ais_hybrid",
    "https://img.freepik.com/free-photo/red-deer-nature-habitat-deer-rut_475641-979.jpg?ga=GA1.1.1634876070.1734566507&semt=ais_hybrid"
]

const ImageSlider = () => {
    const [active, setActive] = useState(0)

    const loadNextImage = () => {
        setActive((prev) => (prev + 1) % (images.length))
    }

    const loadPrevImage = () => {
        setActive((prev) => prev - 1 < 0 ? images.length - 1 : prev - 1)
    }

    useEffect(() => {
        let interval = setInterval(() => {
            loadNextImage()
        }, 3000)
        return () => {
            clearInterval(interval)
        }
    }, [])

    return (
        <div>
            <div className="m-2 p-2 flex justify-center items-center">
                <img src="images/left-arrow.png" className="w-20 h-20" onClick={loadPrevImage}/>
                <img className="w-[1200px] h-[700px]" src={images[active]} alt="wallpaper" />
                <img src="images/right-arrow.png" className="w-20 h-20" onClick={loadNextImage} />
            </div>
        </div>
    )
}

export default ImageSlider