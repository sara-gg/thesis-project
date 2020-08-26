import React from "react";
import { Box, Button, Text } from "grommet";
import registerImg from "../assets/light-wood-lukas-blazek.jpg";
import RegistrationForm from "../components/RegistrationForm";
import AppBar from "../components/AppBar";
import { useHistory } from "react-router-dom";

function Register() {
  let history = useHistory();
  return (
    <>
      <AppBar />
      <Box
        background={{
          opacity: "medium",
          image: `url(${registerImg})`,
        }}
      >
        <Box
          direction="row"
          overflow={{ horizontal: "hidden" }}
          flex
          align="center"
          justify="center"
          margin="5% 0"
        >
          <RegistrationForm />
        </Box>
        <Box
          margin={{ bottom: "large" }}
          width="medium"
          pad="medium"
          align="center"
          alignSelf="center"
          background={{ color: "white", opacity: "strong" }}
          round="small"
        >
          <Text weight="bold">Do you already have an account?</Text>
          <Text size="xlarge" margin="small">
            {" "}
            · · ·{" "}
          </Text>
          <Button
            margin="small"
            label="Login"
            onClick={() => {
              history.push("/login");
            }}
            primary
          />
        </Box>
      </Box>
    </>
  );
}

export default Register;
