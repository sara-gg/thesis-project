import React from "react";
import { Box, Grommet, Text } from "grommet";
import { Location } from "grommet-icons";
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
      <Box alignSelf="center">
        <Box
          alignSelf="center"
          width="90%"
          margin="medium"
          justify="center"
          align="center"
          gap="small"
          pad="medium"
          background="lightbeige"
        >
          <Text size="xlarge" color="blue">
            {name}'s Gallery
          </Text>
          <Text size="large" color="blue">
            gallery rating
          </Text>
          <Box direction="row">
            <Location />
            <Text size="medium">gallery location</Text>
          </Box>
          <Text
            size="small"
            color="darkgrey"
            margin={{ vertical: "medium", horizontal: "xlarge" }}
          >
            Welcome to Sara's Vintage Boutique Co. We create one off, unique
            pieces of furniture using the highest grade of materials. We’ve
            spent years combining tried and tested joinery techniques with the
            modern mastery of technology and tools giving our final products a
            truly untouchable finish. Take a look at our items and feel free to
            ask us for any more information. We hope to provide you with one of
            our items very soon!
          </Text>
        </Box>
        <Box
          alignSelf="center"
          width="90%"
          margin="medium"
          justify="center"
          align="center"
          gap="small"
          pad="medium"
          background="offwhite"
        >
          <UserProductsGallery />
        </Box>
      </Box>
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
