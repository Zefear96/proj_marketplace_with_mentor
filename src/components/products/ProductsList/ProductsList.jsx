import React, { useEffect, useState } from "react";
import { useProducts } from "../../../contexts/ProductContextProvider";
import ProductCard from "../ProductCard/ProductCard";
import "../../../styles/pageStyles/products.css";
import { Pagination } from "@mui/material";

const ProductsList = () => {
  const { products, getProducts } = useProducts();

  useEffect(() => {
    getProducts();
  }, []);

  const [page, setPage] = useState(1);
  const itemsOnPage = 6;
  const count = Math.ceil(products.length / itemsOnPage); //pages

  const handlePage = (e, p) => {
    setPage(p);
  };

  function currentData() {
    const begin = (page - 1) * itemsOnPage;
    const end = begin + itemsOnPage;
    return products.slice(begin, end);
  }

  return (
    <>
      <div className="container-prod">
        {/* {products.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))} */}
        {products ? (
          currentData().map((item) => <ProductCard key={item.id} item={item} />)
        ) : (
          <h3>Loading...</h3>
        )}
        <Pagination
          count={count}
          page={page}
          onChange={handlePage}
          id="pagination"
          color="warning"
        />
      </div>
    </>
  );
};

export default ProductsList;
