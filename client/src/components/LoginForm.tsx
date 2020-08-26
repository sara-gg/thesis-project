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
import ApiService from "../ApiService/ApiService";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

const initialState = {
  email: "",
  password: "",
};

const LoginForm = (): JSX.Element => {
  const [revealPassword, setRevealPassword] = useState(false);
  const [state, setState] = useState(initialState);
  const history = useHistory();

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
      toast.dark(`Sorry, incorrect email or password!`);
    } else if (res.error) {
      toast.dark(`${res.message}`);
      setState(initialState);
    } else {
      const { accessToken } = res;
      const userId = res.user.id;
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("userId", JSON.stringify(userId));
      // we should call here the setIsAuthenticated action
      window.location.replace("http://localhost:3000/home");
    }
  };

  return (
    <Box
      width="medium"
      pad="medium"
      background={{ color: "white", opacity: "strong" }}
      round="small"
      margin={{ top: "medium", bottom: "large" }}
    >
      <Text
        size="xlarge"
        color="blue"
        margin={{ top: "medium" }}
        weight="bold"
        alignSelf="center"
      >
        Login
      </Text>
      <Text size="xlarge" alignSelf="center" margin="small">
        {" "}
        · · ·{" "}
      </Text>
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
          <Box direction="row">
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
          </Box>
        </FormField>
        <Text
          margin={{ left: "small", vertical: "medium" }}
          size="small"
          color="status-critical"
        >
          * Required Field
        </Text>
        <Box
          direction="column"
          alignSelf="center"
          align="center"
          justify="center"
          margin={{ vertical: "large" }}
        >
          <Button type="submit" alignSelf="center" label="Login" primary />
        </Box>
      </Form>
      <Box
        margin={{ vertical: "small" }}
        align="center"
        justify="center"
        pad="small"
        gap="small"
      >
        <Text size="xlarge"> · · · </Text>
        <Text weight="bold" alignSelf="center" margin="small">
          You don't have an account with us yet? Join Furniss here:{" "}
        </Text>
        <Button
          margin="small"
          label="Register"
          onClick={() => {
            history.push("/register");
          }}
          primary
        />
      </Box>
    </Box>
  );
};

export default LoginForm;
