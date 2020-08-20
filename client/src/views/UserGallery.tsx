import React from "react";
import { Box, Grommet } from "grommet";
import UserProductsGallery from "../containers/UserProductsGallery";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

type Props = {
  isAuthenticated: boolean;
};

const UserGallery = ({ isAuthenticated }: Props): JSX.Element => {

  if (isAuthenticated) {
    return (
      <Grommet>
        <Box fill>
          <Box>
            <h1> Gallery</h1>
            <UserProductsGallery />
          </Box>
        </Box>
      </Grommet>
    );
  } else {
    return <Redirect to={{ pathname: "/login" }} />;
  }
};

const mapStateToProps = (state: any) => {
  return {
    isAuthenticated: state.isAuthenticated,
  };
};

export default connect(mapStateToProps, null)(UserGallery);
