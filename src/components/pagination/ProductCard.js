import React from "react"

const ProductCard = ({
    title,
    price,
    description,
    thumbnail,
    discountPercentage
}) => {
    return (
        <div className="m-4 p-4 border border-solid border-black">
            <img className="h-48 w-72 object-fill" src={thumbnail} alt={title} />
            <h1 className="p-2 w-72 font-bold text-xl">{title}</h1>
            <h2 className="p-1 w-72 text-lg">Rs. {price} - discount of {discountPercentage}</h2>
            <p className="p-1 text-md w-72">{description}</p>
        </div>
    )
}

export default ProductCard