import React from "react";
import { Box, Grommet } from "grommet";
import UserProductsGallery from "../containers/UserProductsGallery";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { RootState } from "../models/rootstate";

type Props = {
  isAuthenticated: boolean;
  name: string;
};

function UserGallery({ isAuthenticated, name }: Props): JSX.Element {
  if (isAuthenticated) {
    return (
      <Grommet>
        <Box fill>
          <Box>
            <h1> {name}'s Gallery</h1>
            <UserProductsGallery />
          </Box>
        </Box>
      </Grommet>
    );
  } else {
    return <Redirect to={{ pathname: "/login" }} />;
  }
}

const mapStateToProps = (state: RootState) => {
  console.log("state", state);
  return {
    isAuthenticated: state.isAuthenticated,
    name: state.name,
  };
};

export default connect(mapStateToProps, {})(UserGallery);
