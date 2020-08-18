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
  address: "",
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

  const daysInMonth = (month: any) => new Date(2019, month, 0).getDate();

  const handleChange = (e: any) => {
    console.log(e.target.value);
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
      address,
    } = state;
    const user = {
      name,
      surname,
      username,
      email,
      password,
      birthdate,
      gender,
      address,
    };
    console.log(user);
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
            name="password"
          />
          <Button
            icon={
              revealPassword ? <View size="medium" /> : <Hide size="medium" />
            }
            onClick={() => setRevealPassword(!revealPassword)}
          />
        </FormField>
        <FormField
          name="address"
          label={
            <Box direction="row">
              <Text>Location</Text>
              <Text color="status-critical"> *</Text>
            </Box>
          }
          required
        >
          <TextInput
            name="address"
            value={state.address}
            onChange={handleChange}
          />
        </FormField>
        <Box width="medium">
          <MaskedInput
          // mask={[
          //   { regexp: /^[\w\-_.]+$/, placeholder: "example" },
          //   { fixed: "@" },
          //   { regexp: /^[\w]+$/, placeholder: "my" },
          //   { fixed: "." },
          //   { regexp: /^[\w]+$/, placeholder: "com" },
          // ]}
            mask={[
              {
                length: [1, 2],
                options: Array.from({ length: 12 }, (v, k) => k + 1),
                regexp: /^1[0,1-2]$|^0?[1-9]$|^0$/,
                placeholder: "mm",
              },
              { fixed: "/" },
              {
                length: [1, 2],
                options: Array.from(
                  {
                    length: daysInMonth(
                      parseInt(state.birthdate.split("/")[0], 10)
                    ),
                  },
                  (v, k) => k + 1
                ),
                regexp: /^[1-2][0-9]$|^3[0-1]$|^0?[1-9]$|^0$/,
                placeholder: "dd",
              },
              { fixed: "/" },
              {
                length: 4,
                options: Array.from({ length: 100 }, (v, k) => 2019 - k),
                regexp: /^[1-2]$|^19$|^20$|^19[0-9]$|^20[0-9]$|^19[0-9][0-9]$|^20[0-9][0-9]$/,
                placeholder: "yyyy",
              },
            ]}
            name="birthdate"
            value={state.birthdate}
            onChange={handleChange}
          />
        </Box>
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
