import React from "react";
import { Box } from "grommet";
import registerImg from "../assets/flowers-eea-ikeda.jpg";
import RegistrationForm from "../components/RegistrationForm";
import AppBar from "../components/AppBar";

function Register() {
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
        >
          <RegistrationForm />
        </Box>
      </Box>
    </>
  );
}

export default Register;
