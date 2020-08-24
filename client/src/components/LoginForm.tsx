import React, { useState } from "react";
import {
  Box,
  Button,
  Form,
  FormField,
  MaskedInput,
  Text,
  TextInput,
} from "grommet";

import { Hide, View } from "grommet-icons";
import { connect } from "react-redux";
import ApiService from "../ApiService/ApiService";
import { toast } from "react-toastify";

// import { useHistory } from "react-router-dom";

// type Props = {
//   setUserData: (
//     i: number,
//     n: string,
//     l: string,
//     u: string,
//     e: string,
//     bd: string,
//     g: string,
//     a: string,
//     b: boolean
//   ) => void;
// };
const initialState = {
  email: "",
  password: "",
};

const LoginForm = (): JSX.Element => {
  const [revealPassword, setRevealPassword] = useState(false);
  const [state, setState] = useState(initialState);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const { email, password } = state;
    const user = { email, password };
    const res = await ApiService.login(user);

    if (!res) {
      toast(`Sorry, incorrect email or password!`);
    } else if (res.error) {
      toast(`${res.message}`);
      setState(initialState);
    } else {
      const { accessToken } = res;
      const userId = res.user.id;
      const userData = await ApiService.getUserData(userId);
      console.log({ userData });
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("userId", JSON.stringify(res.user.id));
      // we should call here the setIsAuthenticated action
      window.location.replace("http://localhost:3000/home");
    }
  };

  return (
    <Box width="medium">
      <Form onSubmit={handleSubmit}>
        <FormField
          name="email"
          label={
            <Box direction="row">
              <Text>Email</Text>
              <Text color="status-critical"> *</Text>
            </Box>
          }
          required
        >
          <MaskedInput
            name="email"
            mask={[
              { regexp: /^[\w\-_.]+$/, placeholder: "example" },
              { fixed: "@" },
              { regexp: /^[\w]+$/, placeholder: "my" },
              { fixed: "." },
              { regexp: /^[\w]+$/, placeholder: "com" },
            ]}
            value={state.email}
            onChange={handleChange}
          />
        </FormField>
        <FormField
          name="password"
          label={
            <Box direction="row">
              <Text>Password</Text>
              <Text color="status-critical"> *</Text>
            </Box>
          }
          required
        >
          <TextInput
            plain
            name="password"
            type={revealPassword ? "text" : "password"}
            value={state.password}
            onChange={handleChange}
          />
          <Button
            icon={
              revealPassword ? <View size="medium" /> : <Hide size="medium" />
            }
            onClick={() => setRevealPassword(!revealPassword)}
          />
        </FormField>
        <br />
        <Text margin={{ left: "small" }} size="small" color="status-critical">
          * Required Field
        </Text>
        <br></br>
        <Box direction="row" justify="between" margin={{ top: "medium" }}>
          {/* <Button label="Cancel" /> */}
          <Button type="submit" label="Submit" primary />
        </Box>
      </Form>
    </Box>
  );
};

// const mapDispatchToProps = (dispatch: any) => {
//   return {
//     setUserData: (
//       id: number,
//       name: string,
//       lastname: string,
//       username: string,
//       email: string,
//       birthdate: string,
//       gender: string,
//       address: string,
//       boolean: boolean
//     ) =>
//       dispatch({
//         type: "SET_USER_DATA",
//         payload: {
//           id,
//           name,
//           lastname,
//           username,
//           email,
//           birthdate,
//           gender,
//           address,
//           boolean,
//         },
//       }),
//   };
// };

export default LoginForm;
