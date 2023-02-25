import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";

import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useProducts } from "../../../contexts/ProductContextProvider";

const ProductDetails = () => {
  const { id } = useParams();

  const { getProductDetails, productDetails } = useProducts();

  useEffect(() => {
    getProductDetails(id);
  }, []);

  const navigate = useNavigate();

  return (
    <div>
      {productDetails ? (
        <>
          {/* <h3>{productDetails.name}</h3>
          <h3>{productDetails.description}</h3>
          <h3>{productDetails.price}</h3>
          <h3>{productDetails.type}</h3>
          <img src={productDetails.picture} alt="" width="250" height="250" />
          <button onClick={() => navigate("/products")}>Back</button> */}

          <Card style={{ width: "35%", margin: "3% auto" }}>
            <div
              style={{
                marginBottom: "0",
                paddingBottom: "0",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center ",
                alignItems: "end ",
              }}
            >
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            </div>

            <CardMedia
              component="img"
              image={productDetails.picture}
              alt="error:("
              style={{ width: "30%", margin: " auto" }}
            />
            <div className="content-block">
              <CardHeader
                title={productDetails.name}
                subheader={`category: ${productDetails.type}`}
                subheader2={`ID: ${productDetails.id}`}
              />

              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  <span style={{ fontSize: "1.2rem" }}>
                    ${productDetails.price}
                  </span>
                  <hr />
                  <b>Description:</b> {productDetails.description}
                </Typography>
              </CardContent>
              <CardActions className="btns-block-prod">
                <Button
                  variant="outlined"
                  className="btns-prod"
                  id="btn-prod-details"
                  onClick={() => navigate(`/products`)}
                >
                  Return back
                </Button>
              </CardActions>
            </div>
          </Card>
        </>
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
  );
};

export default ProductDetails;
