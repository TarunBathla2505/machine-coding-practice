import React, { useEffect, useState } from "react";
import "./Pagination.css";

const ProductCard = ({ product }) => {
  return (
    <div className="card">
      <img
        style={{ width: "200px", paddingRight: "20px", height: "200px" }}
        alt="product thumbnail"
        src={product?.thumbnail}
      />
      {product?.title}
    </div>
  );
};

function Pagination() {
  const [products, setProducts] = useState([]);
  const [limit, setLimit] = useState(20);
  const [skip, setSkip] = useState(0);
  const [totalProducts, setTotalProducts] = useState(0);

  const fetchData = async () => {
    const data = await fetch(
      `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
    );
    const json = await data.json();
    setProducts(json?.products);
    setTotalProducts(json?.total);
  };

  useEffect(() => {
    fetchData();
  }, [skip, limit]);

  const noOfPages = Math.ceil(totalProducts / limit);

  return (
    <div>
      <h1>Pagination</h1>
      <div style={{ textAlign: "center" }}>
        <span
          onClick={() =>
            setSkip((prev) => {
              if (prev - limit < 0) {
                return prev;
              }
              return prev - limit;
            })
          }
          className="arrow"
        >
          {"<"}
        </span>
        {[...Array(noOfPages).keys()].map((keyValue) => (
          <span
            key={keyValue}
            className={`${
              skip / limit === keyValue ? "selected" : "page-number"
            }`}
            onClick={() => setSkip(keyValue * limit)}
          >
            {keyValue + 1}
          </span>
        ))}
        <span
          onClick={() =>
            setSkip((prev) => {
              if (prev + limit >= totalProducts) return prev;
              return prev + limit;
            })
          }
          className="arrow"
        >
          {">"}
        </span>
      </div>
      <div className="product-container">
        {products &&
          products.map((product) => (
            <ProductCard key={product?.id} product={product} />
          ))}
      </div>
    </div>
  );
}

export default Pagination;
