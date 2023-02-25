import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../../contexts/ProductContextProvider";
import "../../../styles/pageStyles/admin.css";

const AddProduct = () => {
  const navigate = useNavigate();
  const { addProduct } = useProducts();

  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    picture: "",
    type: "",
  });

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
    <div>
      {/* <h2>AddProduct</h2>
      <input
        type="text"
        placeholder="Name"
        name="name"
        onChange={handleInp}
      />{" "}
      <br />
      <input
        type="text"
        placeholder="Description"
        name="description"
        onChange={handleInp}
      />
      <br />
      <input
        type="text"
        placeholder="Price"
        name="price"
        onChange={handleInp}
      />
      <br />
      <input
        type="text"
        placeholder="Picture"
        name="picture"
        onChange={handleInp}
      />
      <br />
      <input type="text" placeholder="Type" name="type" onChange={handleInp} />
      <br />
      <button
        onClick={() => {
          addProduct(product);
          navigate("/products");
        }}
      >
        Save
      </button> */}

      <Box className="admin-block">
        <h2 style={{ textAlign: "center" }}>Admin panel</h2>
        <TextField
          id="outlined-basic"
          label="Title"
          variant="outlined"
          name="name"
          onChange={handleInp}
          style={{ width: "80%", margin: "1% auto" }}
        />

        <TextField
          id="outlined-basic"
          label="Description "
          variant="outlined"
          name="description"
          onChange={handleInp}
          style={{ width: "80%", margin: "1% auto" }}
        />

        <TextField
          id="outlined-basic"
          label="Price "
          variant="outlined"
          name="price"
          onChange={handleInp}
          style={{ width: "80%", margin: "1% auto" }}
        />

        <TextField
          id="outlined-basic"
          label="Picture URL"
          variant="outlined"
          name="picture"
          onChange={handleInp}
          style={{ width: "80%", margin: "1% auto" }}
        />

        <TextField
          id="outlined-basic"
          label="Type"
          variant="outlined"
          name="type"
          onChange={handleInp}
          style={{ width: "80%", margin: "1% auto" }}
        />

        <Button
          onClick={() => {
            addProduct(product);
            navigate("/products");
          }}
          variant="contained"
          style={{ margin: "5% auto", width: "50%" }}
        >
          Save
        </Button>
      </Box>
    </div>
  );
};

export default AddProduct;
