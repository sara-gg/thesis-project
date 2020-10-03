import React from "react";
import { Box, DropButton, Menu, Text } from "grommet";
import { Filter, Descend } from "grommet-icons";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import FilterProducts from "./FilterProducts";
import { SortProductsForCategory } from "../actions";
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
  const [open, setOpen] = React.useState<boolean>();
  const onOpen = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const handlePriceSort = (direction: "up" | "down", price: "price") => {
    SortProductsForCategory(categoryId, direction, price);
  };

  const handleDateSort = (direction: "up" | "down", createdAt: "createdAt") => {
    SortProductsForCategory(categoryId, direction, createdAt);
  };

  return (
    <Box
      tag="header"
      direction="row"
      width="100%"
      align="center"
      justify="between"
      background="offwhite"
      pad={{ vertical: "small", left: "medium", right: "medium" }}
      elevation="medium"
      className="category-header"
      style={{ zIndex: 2 }}
    >
      <Text color="text">
        <NavLink exact to="/">
          Home /
        </NavLink>
        {categoryName} items ({`${categoryProductsCount}`})
      </Text>

      <Box direction="row" align="center" justify="center">
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
                handlePriceSort("up", "price");
              },
            },
            {
              label: "Price - high to low",
              onClick: (e: any) => {
                handlePriceSort("down", "price");
              },
            },
            {
              label: "Most recent",
              onClick: (e: any) => {
                handleDateSort("down", "createdAt");
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
