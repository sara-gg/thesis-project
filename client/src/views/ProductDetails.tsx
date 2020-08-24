import React, { useState, useEffect } from "react";
import {
  Accordion,
  AccordionPanel,
  Anchor,
  Box,
  Button,
  Carousel,
  Image,
  Paragraph,
  Text,
} from "grommet";
import { Cart, Location } from "grommet-icons";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ApiService from "../ApiService/ApiService";
import CategoriesBar from "../components/CategoriesBar";
import { Product } from "../models/product";
import ReactImageMagnify from 'react-image-magnify';
import "../styles/ProductDetails.scss";
import {
  FacebookShareButton,
  PinterestShareButton,
  WhatsappShareButton,
  FacebookIcon,
  PinterestIcon,
  WhatsappIcon,
} from "react-share";

function ProductDetails() {
  const [product, setProduct] = useState<any>(null);
  const [currenQuantity, setCurrentQuantity] = useState<number>(0);
  const url = window.location.href;
  console.log("url", url, "window.location", window.location);
  // TODO: fetch a single product with /product?id=1
  useEffect(() => {
    ApiService.getAllProducts().then((res) => {
      const products: Product[] = res.rows;
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      const productId = urlParams.get("id");
      if (productId) {
        const filteredProduct = products.filter(
          (product) => product.id === +productId //coercing productId to type number
        )[0];
        setProduct(filteredProduct);
        setCurrentQuantity(filteredProduct.quantity);
      }
    });
  }, []);

  const handleAddItemToBasket = () => {
    toast.dark(
      <Box margin="20px">
        {product.title} has been added to your basket! 🛒 🎉
      </Box>
    );
  };

  const handleAddItemToWishlist = () => {
    toast.dark(
      <Box margin="20px">
        {product.title} has been added to your wishlist! ❤️
      </Box>
    );
  };

  const quantityUp = () => {
    if (currenQuantity < product.quantity) {
      setCurrentQuantity(currenQuantity + 1);
    }

    //this.apiClient.updateTopic(this.topic).subscribe()
  };

  const quantityDown = () => {
    if (currenQuantity > 0) {
      setCurrentQuantity(currenQuantity - 1);
      //this.apiClient.updateTopic(this.topic).subscribe()
    }
  };

  const props = { width: 400, height: 250, zoomWidth: 500, img: "1.jpg" };

  return (
    <Box>
      <CategoriesBar />
      {product && (
        <Box align="center" margin="medium">
          {console.log(product)}

          <Box
            direction="row"
            overflow={{ horizontal: "hidden" }}
            align="start"
            justify="center"
            margin="medium"
            width="xxlarge"
            gap="medium"
          >
            <Box width="large" margin="medium" overflow="hidden" align="start">
              {/* TODO: add carousel once we have more than one image */}
              <Image fit="cover" fill="horizontal" src={`${product.images}`} />
            </Box>
            <Box margin="medium" width="50%" align="center">
              <Box align="center">
                <Text size="large" margin="none">
                  <span className="product-details-title">{product.title}</span>
                </Text>
                <Paragraph
                  margin="small"
                  className="product-details-subtitle"
                  size="large"
                  color="headings"
                >
                  {product.price} €
                </Paragraph>
                <Paragraph
                  margin="none"
                  size="medium"
                  className="product-details-title"
                >
                  user name here {product.user_id}
                </Paragraph>
                <Text size="medium" margin="large">
                  {product.description}
                </Text>
              </Box>
              <Box
                direction="row"
                justify="center"
                align="center"
                className="product-detail-quantity"
                margin="none"
                gap="medium"
              >
                <h3 className="product-detail-quantity-text">
                  {currenQuantity}
                </h3>
                <Box
                  direction="column"
                  align="center"
                  justify="center"
                  height="20px"
                >
                  <Anchor
                    alignSelf="center"
                    margin="none"
                    size="small"
                    onClick={quantityUp}
                  >
                    +
                  </Anchor>
                  <Anchor
                    margin="none"
                    alignSelf="center"
                    onClick={quantityDown}
                  >
                    -
                  </Anchor>
                </Box>
              </Box>
              <Box pad="large" direction="column">
                <button
                  type="button"
                  className="product-detail-add-button"
                  onClick={handleAddItemToBasket}
                >
                  ADD TO CART
                </button>
                <button
                  type="button"
                  className="product-detail-wishlist-button"
                  onClick={handleAddItemToWishlist}
                >
                  ADD TO WISHLIST
                </button>
              </Box>
              <Accordion>
                <AccordionPanel
                  label={
                    <Text
                      className="product-details-subtitle"
                      size="large"
                      margin="small"
                    >
                      Details
                    </Text>
                  }
                >
                  <Box pad="large">
                    <Text size="medium">
                      <span className="product-details-beige-subtitle">
                        MEASUREMENTS (height x depth x width):
                      </span>

                      <span color="grey">
                        {product.height} x {product.depth} x {product.width} cm
                      </span>
                    </Text>
                    <Text size="medium">
                      <span className="product-details-beige-subtitle">
                        MATERIALS:
                      </span>

                      <span color="grey">{product.material}</span>
                    </Text>
                  </Box>
                </AccordionPanel>
                <AccordionPanel
                  label={
                    <Text
                      className="product-details-subtitle"
                      size="large"
                      margin="medium"
                    >
                      {" "}
                      More about the seller
                    </Text>
                  }
                >
                  <Box pad="large">
                    <Text>Meet the seller: {product.user_id}</Text>
                    <Text>
                      Insert description here and want to see more of user.name
                      products? checkout their gallery
                    </Text>
                  </Box>
                </AccordionPanel>
              </Accordion>

              <Box pad="medium" direction="row" margin="medium" gap="small">
                <FacebookShareButton
                  url="http://furnissweb.com/" // TODO: localhost doesn't work as valid url. need to change after deploy
                  quote={`Checkout this amazing ${product.title} I found on Furniss 👇🔥`}
                  className="Demo__some-network__share-button"
                  windowHeight={700}
                  windowWidth={500}
                >
                  <FacebookIcon size={32} round />
                </FacebookShareButton>
                <PinterestShareButton
                  url="http://furnissweb.com/" // TODO: localhost doesn't work as valid url. need to change after deploy
                  media={product.images}
                  description={product.title}
                  className="Demo__some-network__share-button"
                  windowHeight={700}
                  windowWidth={700}
                >
                  <PinterestIcon size={32} round />
                </PinterestShareButton>
                <WhatsappShareButton
                  url="http://furnissweb.com/" // TODO: localhost doesn't work as valid url. need to change after deploy
                  title={`Checkout this amazing ${product.title} I found on Furniss 👇🔥`}
                  className="Demo__some-network__share-button"
                  windowHeight={700}
                  windowWidth={1000}
                >
                  <WhatsappIcon size={32} round />
                </WhatsappShareButton>
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
}

export default ProductDetails;
