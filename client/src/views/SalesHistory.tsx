import React from "react";
import { useHistory } from "react-router-dom";
import CategoriesBar from "../components/CategoriesBar";
import AppBar from "../components/AppBar";
import SoldProducts from "../components/SoldProducts";
import { Box, Text } from "grommet";

type Props = {
  isAuthenticated: boolean;
};

function SalesHistory({ isAuthenticated }: Props): any {
  let history = useHistory();

  if (isAuthenticated) {
    return (
      <Box>
        <AppBar />
        <CategoriesBar />
        <Box
          direction="column"
          alignSelf="center"
          align="center"
          justify="center"
          pad="medium"
          margin={{ vertical: "large" }}
          background="offwhite"
          width="90%"
        >
          <Text size="xlarge" color="blue" weight="bold" alignSelf="center">
            <span className="heading-title">Sales history</span>
          </Text>

          <Text size="large" alignSelf="center" margin="small">
            {" "}
            · · ·{" "}
          </Text>
          <Text alignSelf="center">
            Here you can find information about all your previous sales!
          </Text>
          <SoldProducts />
        </Box>
      </Box>
    );
  } else {
    return history.push("/login");
  }
}

export default SalesHistory;
