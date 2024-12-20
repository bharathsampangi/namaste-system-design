import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const LIMIT = 10;

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [products, setProducts] = useState([]);
  const [noOfPages, setNoOfPages] = useState(0);

  const fetchProducts = async () => {
    const data = await fetch(
      `https://dummyjson.com/products?limit=${LIMIT}&skip=${
        currentPage * LIMIT
      }&select=id,title,description,price,thumbnail,discountPercentage`
    );
    const json = await data.json();
    setProducts(json.products);
    setNoOfPages(Math.ceil(json.total / LIMIT));
  };

  useEffect(() => {
    fetchProducts();
  }, [currentPage]);

  return (
    <div>
      <div className="flex flex-wrap">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
      <div className="p-10 cursor-pointer">
        {currentPage !== 0 && (
          <span
            className="text-xl p-4"
            onClick={() => {
              setCurrentPage((prev) => prev - 1);
            }}
          >
            Prev
          </span>
        )}
        {[...Array(noOfPages).keys()].map((pN) => (
          <span
            key={pN}
            className={
              "text-xl p-4 " + (pN === currentPage && "font-bold underline")
            }
            onClick={() => setCurrentPage(pN)}
          >
            {pN + 1}
          </span>
        ))}
        {currentPage < noOfPages - 1 && (
          <span
            className="text-xl p-4"
            onClick={() => {
              setCurrentPage((prev) => prev + 1);
            }}
          >
            Next
          </span>
        )}
      </div>
    </div>
  );
};

export default Pagination;
