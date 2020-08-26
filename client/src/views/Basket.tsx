import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import AppBar from "../components/AppBar";
import CategoriesBar from "../components/CategoriesBar";
import "../styles/Basket.scss";
import ApiService from "../ApiService/ApiService";
import BasketProductCard from "../components/BasketProductCard";
import { Product } from "../models/product";
import {
  Box,
  Tabs,
  Tab,
  Heading,
  Paragraph,
  Table,
  TableCell,
  TableHeader,
  TableRow,
  Text,
} from "grommet";
import { useHistory } from "react-router-dom";
import PaymentForm from "../components/Payment/PaymentForm";

type Props = {
  isAuthenticated: boolean;
};

function Basket({ isAuthenticated }: Props): JSX.Element {
  const [basketProducts, setBasketProducts] = useState<Product[]>([]);
  const [amoutToPay, setAmoutToPay] = useState(0);
  let history = useHistory();

  const renderProducts = (productList: Product[]) => {
    let productsResult: JSX.Element[] = [];

    productList.forEach((product, index) => {
      productsResult.push(
        <BasketProductCard
          product={product}
          key={index}
          basketProducts={basketProducts}
          setBasketProducts={setBasketProducts}
        />
      );
    });
    return productsResult;
  };

  useEffect(() => {
    ApiService.getBasketProducts().then((res) => setBasketProducts(res));
  }, []);

  useEffect(() => {
    let total = 0;
    basketProducts.forEach((product) => (total += product.price));
    setAmoutToPay(total);
  }, [basketProducts]);

  return (
  
    <Box>
       <AppBar basketProducts={basketProducts}/>
      <CategoriesBar />
      <Heading
        level="2"
        color="text"
        alignSelf="center"
        margin={{ top: "large" }}
      >
        Your basket
      </Heading>
      <Box direction="column" className="basket-dashbaord">
        {basketProducts && basketProducts.length > 0 ? (
          <Box width="100%" align="center">
            <Box className="basket-container" direction="row" gap="medium">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableCell scope="col" border="bottom">
                      <Text className="basket-table-heading">Item</Text>
                    </TableCell>
                    <TableCell scope="col" border="bottom"></TableCell>
                    <TableCell scope="col" border="bottom">
                      <Text className="basket-table-heading">Qty</Text>
                    </TableCell>
                    <TableCell scope="col" border="bottom">
                      <Text className="basket-table-heading"> Unit price</Text>
                    </TableCell>
                    <TableCell scope="col" border="bottom"></TableCell>
                  </TableRow>
                </TableHeader>
                {renderProducts(basketProducts)}
              </Table>
              {/* <Box
                margin="medium"
                justify="center"
                height="100%"
                width="medium"
                background="offwhite"
                align="center"
                pad="small"
              >
                <p color="headings" className="basket-total-number">
                  {amoutToPay}€
                </p>
                <Paragraph color="grey" className="basket-total-text">
                  TOTAL
                </Paragraph>
                <a className="basket-total-btn">CHECKOUT NOW</a>
              </Box> */}
            </Box>

            <Text margin="small"> · · · </Text>
            <Heading
              level="2"
              color="text"
              alignSelf="center"
              margin={{ top: "medium" }}
            >
              Almost there
            </Heading>
            <PaymentForm
              amoutToPay={amoutToPay}
              basketProducts={basketProducts}
            />
          </Box>
        ) : (
          <Heading
            level="3"
            color="text"
            alignSelf="center"
            margin={{ top: "medium" }}
          >
            You don't have any products in your basket yet
          </Heading>
        )}
      </Box>
    </Box>
  );
}

const mapStateToProps = (state: any) => {
  return {
    isAuthenticated: state.isAuthenticated,
  };
};

export default connect(mapStateToProps, null)(Basket);
