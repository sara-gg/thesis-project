import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Box, Text } from "grommet";
import UserProductCard from "../components/UserProductCard";
import AddNewProduct from "../components/AddNewProduct";
import { RootState } from "../models/rootstate";
import ApiService from "../ApiService/ApiService";
import "../styles/UserProductsGallery.scss";

type Props = {
  visitorId: number;
  ownerId: number;
  id: number;
};

function UserProductsGallery({ visitorId, ownerId, id }: Props): JSX.Element {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    ApiService.getProductsForUser(ownerId).then((res) => {
      setProducts(res.rows);
    });
  }, []);

  const addNewProduct = () => {
    if (visitorId === ownerId) {
      return <AddNewProduct />;
    } else {
      return;
    }
  };

  const productList = () => {
    if (products.length === 0) {
      if (visitorId === ownerId) {
        return (
          <Box>
            <Text> Add products to your gallery to start to sell! </Text>
          </Box>
        );
      } else {
        return (
          <Box>
            <Text> This user doesn't have any products to sell! </Text>
          </Box>
        );
      }
    } else {
      return (
        <Box
          direction="row"
          overflow="hidden"
          wrap={true}
          flex
          align="start"
          justify="center"
        >
          {products.length !== 0 &&
            products.map((product: any) => {
              if (product && product.quantity === 0) {
                return (
                  <div className="soldProduct">
                    {/* <Text size="large" color="red" className="soldProductText">
                    SOLD
                  </Text> */}
                    <UserProductCard
                      key={product.item_id}
                      product={product}
                      visitorId={visitorId}
                      ownerId={ownerId}
                    />
                  </div>
                );
              } else {
                return (
                  <UserProductCard
                    key={product.item_id}
                    product={product}
                    visitorId={visitorId}
                    ownerId={ownerId}
                  />
                );
              }
            })}
        </Box>
      );
    }
  };

  return (
    <Box direction="column" flex align="center" justify="center">
      {addNewProduct()}
      {productList()}
    </Box>
  );
}

const mapStateToProps = (state: RootState) => {
  return {
    id: state.id,
  };
};

export default connect(mapStateToProps, {})(UserProductsGallery);
