import React, { useState, useEffect } from "react";
import {
  Accordion,
  AccordionPanel,
  Anchor,
  Box,
  Button,
  Image,
  Paragraph,
  Text,
} from "grommet";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactImageMagnify from "react-image-magnify";
import ApiService from "../ApiService/ApiService";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { postBasketProducts } from "../actions";
import AppBar from "../components/AppBar";
import CategoriesBar from "../components/CategoriesBar";
import { Product } from "../models/product";
import SkeletonProductDetailsDashboard from "../components/SkeletonProductDetailsDashboard";
import "../styles/SkeletonProductDetailsDashboard.scss";
import "../styles/ProductDetails.scss";
import { confirmAlert } from "react-confirm-alert";
import {
  FacebookShareButton,
  PinterestShareButton,
  WhatsappShareButton,
  FacebookIcon,
  PinterestIcon,
  WhatsappIcon,
} from "react-share";

interface StateProps {
  id: number;
}

interface DispatchProps {
  postBasketProducts: (product: Product) => any;
}

interface isAuthenticated {
  isAuthenticated: boolean;
}

type Props = DispatchProps & StateProps & isAuthenticated;

function ProductDetails({ postBasketProducts, id, isAuthenticated }: Props) {
  const history = useHistory();
  const [product, setProduct] = useState<any>(null);
  const [currentQuantity, setCurrentQuantity] = useState<number>(0);
  const [userInfo, setUserInfo] = useState<any>([]);
  const [isLoadingProduct, setIsLoadingProduct] = useState(false);
  const url = window.location.href;
  const token = localStorage.getItem("accessToken");
<<<<<<< HEAD

=======
>>>>>>> 04059edfbd80ec752d957a6f9a90ac82a039fe6a

  // TODO: fetch a single product with /product?id=1
  useEffect(() => {
    setIsLoadingProduct(true);
    ApiService.getAllProducts()
      .then((res) => {
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
          return filteredProduct;
        }
      })
      .then((filteredProduct) => {
        if (filteredProduct && filteredProduct.user_id) {
          ApiService.getPublicUserData(filteredProduct.user_id).then((res) => {
            setUserInfo(res);
          });
        }
      })
      .then(() => {
        setIsLoadingProduct(false);
      });
  }, []);

  useEffect(() => {
    if (product) {
      ApiService.saveViewedProduct(product);
    }
  }, [product]);

  const handleAddItemToBasket = () => {
    if (token) {
      let currentQuantityProduct = {
        ...product,
        basket_quantity: currentQuantity,
      };
<<<<<<< HEAD
      toast.dark(
        <Box margin="20px">
          {product.title} has been added to your basket! 🛒 🎉
      </Box>
      );
=======
>>>>>>> 04059edfbd80ec752d957a6f9a90ac82a039fe6a
      postBasketProducts(currentQuantityProduct).then(() =>
        console.log("here posting quantity", currentQuantityProduct)
      );
    } else {
      confirmAlert({
        title: "You aren't logged in",
<<<<<<< HEAD
        message:
          "Only logged users can buy products",
=======
        message: "Only logged users can buy products",
>>>>>>> 04059edfbd80ec752d957a6f9a90ac82a039fe6a
        buttons: [
          {
            label: "Register",
            onClick: () => {
              history.push(`/register`);
            },
          },
          {
            label: "Login",
            onClick: () => {
              history.push(`/login`);
            },
          },
        ],
        childrenElement: () => <div />,
      });
    }
  };

  const handleAddItemToWishlist = () => {
    toast.dark(
      <Box margin="20px">
        {product.title} has been added to your wishlist! ❤️
      </Box>
    );
  };

  const quantityUp = () => {
    if (currentQuantity < product.quantity) {
      setCurrentQuantity(currentQuantity + 1);
    }
  };

  const quantityDown = () => {
    if (currentQuantity > 0) {
      setCurrentQuantity(currentQuantity - 1);
    }
  };

  const redirectToSeller = (id: number) => {
    history.push(`/usergallery/${id}`);
  };

  return (
    <Box>
      <AppBar />
      <CategoriesBar />
      {isLoadingProduct && <SkeletonProductDetailsDashboard duration={10} />}
      {!isLoadingProduct && product && (
        <Box align="center" margin="medium">
          <Box
            direction="row"
            overflow={{ horizontal: "hidden" }}
            align="start"
            justify="center"
            margin="medium"
            width="xxlarge"
            gap="medium"
          >
            <ReactImageMagnify
              {...{
                smallImage: {
                  alt: "Wristwatch by Ted Baker London",
                  isFluidWidth: true,
                  src: product.images,
                },
                largeImage: {
                  src: product.images,
                  width: 1200,
                  height: 1200,
                },
              }}
            />

            <Box
              margin="medium"
              width="50%"
              align="center"
              justify="center"
              className="text-container"
            >
              <Box align="center" justify="center">
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
                  <a
                    className="product-details-seller-1"
                    onClick={() => redirectToSeller(product.user_id)}
                  >
                    {userInfo.username}
                  </a>
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
                  {currentQuantity}
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
                  <Box pad="medium" align="start">
                    <Text size="medium" margin="small">
                      <span className="product-details-beige-subtitle">
                        MEASUREMENTS (height x depth x width):
                      </span>

                      <span color="grey">
                        {product.height} x {product.depth} x {product.width} cm
                      </span>
                    </Text>
                    <Text size="medium" margin="small">
                      <span className="product-details-beige-subtitle">
                        MATERIALS:
                      </span>

                      <span color="grey"> {product.material}</span>
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
                      More about the seller
                    </Text>
                  }
                >
                  <Box pad="medium" align="start">
                    <Text
                      size="xlarge"
                      className="product-details-beige-heading"
                    >
                      Meet the seller: {userInfo.username}
                    </Text>
                    <br />
                    <Text className="seller-description">
                      {userInfo.description}
                    </Text>
                    <br />
                    <Text>
                      Want to see more of {userInfo.username}'s products?
                    </Text>
                    <br />
                    <a
                      className="gallery-button"
                      onClick={() => redirectToSeller(product.user_id)}
                    >
                      Check out their gallery
                    </a>
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

const mapStateToProps = (state: StateProps) => {
  return {
    id: state.id,
  };
};

export default connect(mapStateToProps, {
  postBasketProducts,
})(ProductDetails);
