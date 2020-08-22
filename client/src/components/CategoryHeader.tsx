import React from "react";
import { Box, Button, DropButton, Heading, Image, Text } from "grommet";
import { Cart, Close } from "grommet-icons";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";
import FilterProducts from "./FilterProducts";
import "../styles/CategoryHeader.scss";

type Props = {
  categoryName: string;
  categoryProductsCount: number;
  categoryId: number;
};

const CategoryHeader = ({
  categoryName,
  categoryProductsCount,
  categoryId,
}: Props): JSX.Element => {
  let history = useHistory();

  const [open, setOpen] = React.useState<boolean>();
  const onOpen = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
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
      <Text color="text" className="navbar-header">
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
        <NavLink exact to="/usergallery">
          <Heading level="4" color="text" className="navbar-header">
            User Gallery
          </Heading>
        </NavLink>

        <DropButton
          label="Open"
          icon={<Cart />}
          open={open}
          onOpen={onOpen}
          onClose={onClose}
          dropContent={<FilterProducts onClose={onClose} categoryId={categoryId}/>}
          dropProps={{ align: { top: "bottom" } }}
        />
      </Box>
    </Box>
  );
};

const mapStateToProps = (state: any) => {
  return {};
};

export default connect(mapStateToProps, null)(CategoryHeader);
