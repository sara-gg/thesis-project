import React from "react";
import { Box, Button, Grommet, Heading } from "grommet";
import AppBar from "../components/AppBar";
import { Home } from "grommet-icons";
import history from "../utils/history";
import Logout from "../components/Logout";
import UserProductsGallery from "../containers/UserProductsGallery";

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

function UserGallery() {
  // const [productsData, setProductData] = useState(productsData);
  // productsData = [];

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
        <h1>Gallery Name</h1>
        <UserProductsGallery />
      </Box>
    </Grommet>
  );
}

export default UserGallery;
