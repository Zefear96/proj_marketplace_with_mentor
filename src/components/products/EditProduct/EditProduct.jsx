import React, { useState, useEffect } from "react";
import { useProducts } from "../../../contexts/ProductContextProvider";
import { useNavigate, useParams } from "react-router-dom";

const EditProduct = () => {
  const { getProductDetails, productDetails, saveEditedProduct } =
    useProducts();

  const [product, setProduct] = useState(productDetails);
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    getProductDetails(id);
  }, []);

  useEffect(() => {
    setProduct(productDetails);
  }, [productDetails]);

  const handleInp = (e) => {
    if (e.target.name === "price") {
      let obj = {
        ...product,
        price: Number(e.target.value),
      };

      setProduct(obj);
    } else {
      let obj = {
        ...product,
        [e.target.name]: e.target.value,
      };
      setProduct(obj);
    }
  };

  return (
    <>
      {product ? (
        <div>
          <h2>EditProduct</h2>
          <input
            type="text"
            placeholder="Name"
            name="name"
            onChange={handleInp}
            value={product.name}
          />
          <br />
          <input
            type="text"
            placeholder="Description"
            name="description"
            onChange={handleInp}
            value={product.description}
          />
          <br />
          <input
            type="text"
            placeholder="Price"
            name="price"
            onChange={handleInp}
            value={product.price}
          />
          <br />
          <input
            type="text"
            placeholder="Picture"
            name="picture"
            onChange={handleInp}
            value={product.picture}
          />
          <br />
          <input
            type="text"
            placeholder="Type"
            name="type"
            onChange={handleInp}
            value={product.type}
          />
          <br />
          <button
            onClick={() => {
              saveEditedProduct(product);
              navigate("/products");
            }}
          >
            Save
          </button>
        </div>
      ) : (
        <h3>Loading...</h3>
      )}
    </>
  );
};

export default EditProduct;
