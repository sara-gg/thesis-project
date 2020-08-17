import React, { useState } from "react";
import {
  Box,
  Button,
  Form,
  FormField,
  MaskedInput,
  Select,
  Text,
  TextInput,
} from "grommet";
import { Hide, View } from "grommet-icons";
import { connect } from "react-redux";
import ApiService from "../ApiService/ApiService";

type Props = {
  isAuthenticated: boolean;
  setIsAuthenticated: (b: boolean) => void;
};

const initialState = {
  name: "",
  surname: "",
  username: "",
  email: "",
  password: "",
  birthdate: "",
  gender: "",
};

const RegistrationForm = ({
  isAuthenticated,
  setIsAuthenticated,
}: Props): JSX.Element => {
  const [revealPassword, setRevealPassword] = useState(false);
  const [state, setState] = useState(initialState);
  // const [name, setName] = useState("");
  // const [surname, setSurname] = useState("");
  // const [username, setUsername] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [birthdate, setBirthdate] = useState("");
  // const [gender, setGender] = useState("");

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const {
      name,
      surname,
      username,
      email,
      password,
      birthdate,
      gender,
    } = state;
    const user = {
      name,
      surname,
      username,
      email,
      password,
      birthdate,
      gender,
    };
    const res = await ApiService.registerUser(user);

    if (res.error) {
      alert(`${res.message}`);
      setState(initialState);
    } else {
      const accessToken = res.token;
      localStorage.setItem("accessToken", accessToken);
      setIsAuthenticated(true);
      window.location.replace("http://localhost:3000/home");
    }
  };

  return (
    <Box width="medium">
      <Form
        onChange={(value) => console.log("Change", value)}
        onSubmit={handleSubmit}
      >
        <FormField
          name="name"
          label={
            <Box direction="row">
              <Text>Name</Text>
              <Text color="status-critical"> *</Text>
            </Box>
          }
          required
        >
          <TextInput name="name" value={state.name} onChange={handleChange} />
        </FormField>
        <FormField
          name="surname"
          label={
            <Box direction="row">
              <Text>Surname</Text>
              <Text color="status-critical"> *</Text>
            </Box>
          }
          required
        >
          <TextInput
            name="surname"
            value={state.surname}
            onChange={handleChange}
          />
        </FormField>
        <FormField
          name="username"
          label={
            <Box direction="row">
              <Text>Username</Text>
              <Text color="status-critical"> *</Text>
            </Box>
          }
          required
        >
          <TextInput
            name="username"
            value={state.username}
            onChange={handleChange}
          />
        </FormField>
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
        {/* <Box fill align="center" justify="start" pad="large">
                <Box width="medium" gap="medium">
                  <DateInput
                    format="dd/mm/yyyy"
                    value={birthdate}
                    onChange={(event: any) => setBirthdate(event)}
                  />
                </Box>
              </Box> */}
        <FormField label="Gender" name="gender">
          <Select
            name="gender"
            options={["Female", "Male", "Prefer not to say"]}
            value={state.gender}
            onChange={handleChange}
          />
        </FormField>
        <br></br>
        <Text margin={{ left: "small" }} size="small" color="status-critical">
          * Required Field
        </Text>
        <br></br>
        <Box direction="row" justify="between" margin={{ top: "medium" }}>
          <Button label="Cancel" />
          <Button type="submit" label="Submit" primary />
        </Box>
      </Form>
    </Box>
  );
};

const mapStateToProps = (state: any) => {
  return {
    isAuthenticated: state.isAuthenticated,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    setIsAuthenticated: (boolean: boolean) =>
      dispatch({ type: "AUTHENTICATED", payload: boolean }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);
