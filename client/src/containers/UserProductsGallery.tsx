import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Box } from "grommet";
import UserGalleryProductCard from "../components/UserGalleryProductCard";
import AddNewProduct from "../components/AddNewProduct";
import { RootState } from "../models/rootstate";
import ApiService from "../ApiService/ApiService";

type Props = {
  id: number;
};

function UserProductsGallery({ id }: Props): JSX.Element {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    ApiService.getProductsForUser(id).then((res) => {
      console.log("res.rows in UserProductsGallery", res.rows);
      setProducts(res.rows);
    });
  }, []);

  const productList = () => {
    if (products.length === 0) {
      return <AddNewProduct />;
    } else {
      return (
        <Box
          direction="row"
          overflow="hidden"
          wrap={true}
          flex
          align="center"
          justify="center"
        >
          {products.map((product: any) => (
            <UserGalleryProductCard key={product.item_id} product={product} />
          ))}
        </Box>
      );
    }
  };

  return (
    <Box direction="column" flex align="center" justify="center">
      <AddNewProduct />
      {productList()}
    </Box>
  );
}

const mapStateToProps = (state: RootState) => {
  console.log("state", state);
  return {
    id: state.id,
  };
};

export default connect(mapStateToProps, {})(UserProductsGallery);
