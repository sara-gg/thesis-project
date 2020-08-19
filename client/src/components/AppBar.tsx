import React from "react";
import { Box, Button, Heading } from "grommet";
import { Notification } from "grommet-icons";

const AppBar = (props: any) => (
  <Box
    tag="header"
    direction="row"
    align="center"
    justify="between"
    background="#af8e7a"
    pad={{ left: "medium", right: "small", vertical: "small" }}
    elevation="medium"
    style={{ zIndex: "1" }}
    {...props}
  >
    <AppBar>
      Hello There!
      <Heading level="3" margin="none">
        Login Page
      </Heading>
      <Button icon={<Notification />} onClick={() => {}} />
    </AppBar>
  </Box>
);

export default AppBar;
