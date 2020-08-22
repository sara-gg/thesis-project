import React from "react";
import { Box, Button, DropButton, Heading, Image, Menu, Text } from "grommet";
import { Sort, Filter, Descend } from "grommet-icons";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";
import FilterProducts from "./FilterProducts";
import { SortProductsForCategory } from "../actions";
import { Product } from "../models/product";
import "../styles/CategoryHeader.scss";

interface Props {
  categoryName: string;
  categoryProductsCount: number;
  categoryId: number;
}

interface DispatchProps {
  SortProductsForCategory: (
    categoryId: number,
    label: string,
    direction: string
  ) => Promise<any>;
}

const CategoryHeader = ({
  categoryName,
  categoryProductsCount,
  categoryId,
  SortProductsForCategory,
}: any): JSX.Element => {
  let history = useHistory();

  const [open, setOpen] = React.useState<boolean>();
  const onOpen = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const handleSort = (direction: "up" | "down") => {
    SortProductsForCategory(categoryId, "price", direction);
  };

  return (
    <Box
      tag="header"
      direction="row"
      width="100%"
      align="center"
      justify="around"
      background="offwhite"
      pad={{ left: "medium", right: "small", vertical: "small" }}
      elevation="medium"
      className="category-header"
    >
      <Text color="text">
        <NavLink exact to="/">
          Home /
        </NavLink>
        {categoryName} items ({`${categoryProductsCount}`})
      </Text>

      <Box
        direction="row"
        align="center"
        justify="center"
        className="right-appbar"
        gap="medium"
        margin="large"
      >
        <DropButton
          icon={<Filter />}
          open={open}
          onOpen={onOpen}
          onClose={onClose}
          alignSelf={"center"}
          dropContent={
            <FilterProducts onClose={onClose} categoryId={categoryId} />
          }
          dropProps={{ align: { top: "bottom" } }}
          className="navbar-header"
        />
        <Menu
          label={
            <Box flex direction="row">
              {/* <Text>Sort by</Text> */}
              <Descend />
            </Box>
          }
          items={[
            {
              label: "Price - low to high",
              onClick: (e: any) => {
                handleSort("up");
              },
            },
            {
              label: "Price - high to low",
              onClick: (e: any) => {
                handleSort("down");
              },
            },
          ]}
        />
      </Box>
    </Box>
  );
};

const mapStateToProps = (state: any) => {
  return {};
};

export default connect(mapStateToProps, { SortProductsForCategory })(
  CategoryHeader
);
