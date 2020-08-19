import React from "react";
import { Box, Button, Grommet, Heading } from "grommet";
import AppBar from "../components/AppBar";
import { Home } from "grommet-icons";
import history from "../utils/history";
import Logout from "../components/Logout";
import UserProductsGallery from "../containers/UserProductsGallery";
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation,
} from "react-router-dom";

const theme = {
  global: {
    colors: {
      brand: "purple",
    },
    font: {
      family: "Roboto",
      size: "18px",
      height: "20px",
    },
  },
};

type Props = {
  isAuthenticated: boolean;
};

const UserGallery = ({ isAuthenticated }: Props): JSX.Element => {
  if (isAuthenticated) {
    return (
      <Grommet theme={theme}>
        <Box fill>
          <AppBar>
            Hello There!
            <Heading level="3" margin="none">
              User Gallery
            </Heading>
            <Logout />
            <Button
              icon={<Home />}
              onClick={() => {
                history.push("/home");
              }}
            />
          </AppBar>
          <Box>
            <h1>Gallery Name</h1>
            <UserProductsGallery />
          </Box>
        </Box>
      </Grommet>
    );
  } else {
    return <Redirect to={{ pathname: "/login" }} />;
  }

  // return (
  //   <Grommet theme={theme}>
  //     <Box fill>
  //       <AppBar>
  //         Hello There!
  //         <Heading level="3" margin="none">
  //           User Gallery
  //         </Heading>
  //         <Logout />
  //         <Button
  //           icon={<Home />}
  //           onClick={() => {
  //             history.push("/home");
  //           }}
  //         />
  //       </AppBar>
  //       {handleUserGalleryRender()}
  //       <Box>
  //         <h1>Gallery Name</h1>
  //         <UserProductsGallery />
  //       </Box>
  //     </Box>
  //   </Grommet>
  // );
};

const mapStateToProps = (state: any) => {
  return {
    isAuthenticated: state.isAuthenticated,
  };
};

export default connect(mapStateToProps, null)(UserGallery);
