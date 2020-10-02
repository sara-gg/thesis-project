import React, { useState } from "react";
import {
  Box,
  Button,
  CheckBox,
  Form,
  FormField,
  MaskedInput,
  Select,
  Text,
  TextArea,
  TextInput,
} from "grommet";
import { Hide, View } from "grommet-icons";
import { connect } from "react-redux";
import { User } from "../models/user";
import {
  setIsAuthenticated,
  setRegisterDetails,
  submitRegisterDetails,
} from "../actions";
import { useHistory } from "react-router-dom";
import { Redirect } from "react-router-dom";
import "../styles/heading-title.scss";

type Props = {
  isAuthenticated: boolean;
  setIsAuthenticated: (b: boolean) => void;
  setRegisterDetails: ({ name, value }: { [name: string]: string }) => void;
  submitRegisterDetails: (user: User) => any;
  name: string;
  lastname: string;
  username: string;
  description: string;
  email: string;
  password: string;
  birthdate: string;
  gender: string;
  address: string;
  telephone: string;
};

const RegistrationForm = ({
  isAuthenticated,
  setRegisterDetails,
  submitRegisterDetails,
  name,
  lastname,
  username,
  description,
  email,
  password,
  birthdate,
  gender,
  address,
  telephone,
}: Props): JSX.Element => {
  const [revealPassword, setRevealPassword] = useState(false);
  const [checked, setChecked] = useState(false);
  let history = useHistory();

  const daysInMonth = (month: any) => new Date(2019, month, 0).getDate();

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setRegisterDetails({ name, value });
  };

  const handleSelectChange = (e: any) => {
    const { name } = e.target;
    const { option } = e;
    setRegisterDetails({ name, option });
  };

  const isPasswordAllowed = (pwd: string): boolean => {
    return pwd.length > 7 && /\d/.test(pwd) && /\D/.test(pwd);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (isPasswordAllowed(password) && checked === true) {
      const user = {
        name,
        lastname,
        username,
        description,
        email,
        password,
        birthdate,
        gender,
        address,
        telephone,
      };
      submitRegisterDetails(user).then(
        (accessToken: string, userId: number | string) => {
          const strUserId = "" + userId;
          localStorage.setItem("accessToken", accessToken);
          localStorage.setItem("userId", strUserId);
          history.push("/home");
        }
      );
    } else if (!isPasswordAllowed(password)) {
      alert("You must enter a valid password");
    } else if (checked === false) {
      alert("You must confirm you accept Furniss' terms and conditions");
    }
  };

  if (!isAuthenticated) {
    return (
      <Box
        width="medium"
        pad="medium"
        background={{ color: "white", opacity: "strong" }}
        round="small"
        margin={{ top: "medium", bottom: "large" }}
      >
        <Box direction="row" align="center" justify="center">
          <Text
            size="xlarge"
            color="blue"
            margin={{ top: "medium" }}
            weight="bold"
            alignSelf="center"
          >
            <span className="heading-title">register</span>
          </Text>
        </Box>
        <Box
          width="medium"
          border="bottom"
          alignSelf="center"
          margin={{ bottom: "medium", top: "small" }}
        ></Box>
        <Form onSubmit={handleSubmit}>
          <FormField
            name="name"
            label={
              <Box direction="row">
                <Text>Name</Text>
                <Text color="status-critical"> *</Text>
              </Box>
            }
            value={name}
            onChange={handleChange}
            required
          ></FormField>
          <FormField
            name="lastname"
            label={
              <Box direction="row">
                <Text>Last Name</Text>
                <Text color="status-critical"> *</Text>
              </Box>
            }
            value={lastname}
            onChange={handleChange}
            required
          ></FormField>
          <FormField
            name="username"
            label={
              <Box direction="row">
                <Text>Username</Text>
                <Text color="status-critical"> *</Text>
              </Box>
            }
            required
            value={username}
            onChange={handleChange}
          ></FormField>
          <FormField
            name="userDescription"
            label={
              <Box direction="row">
                <Text>Description</Text>
                <Text color="status-critical">*</Text>
              </Box>
            }
            required
          >
            <TextArea
              placeholder="Type here your gallery description"
              name="userDescription"
              value={description}
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
              value={email}
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
                value={password}
                onChange={handleChange}
              />
              <Button
                icon={
                  revealPassword ? (
                    <View size="medium" />
                  ) : (
                    <Hide size="medium" />
                  )
                }
                onClick={() => setRevealPassword(!revealPassword)}
              />
            </Box>
          </FormField>
          <Text size="xsmall" color="slategrey">
            Must contain at least eight characters, one letter and one number{" "}
          </Text>
          <FormField
            name="telephone"
            label={
              <Box direction="row">
                <Text>Telephone</Text>
              </Box>
            }
          >
            <TextInput
              name="telephone"
              value={telephone}
              onChange={handleChange}
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
            <TextInput name="address" value={address} onChange={handleChange} />
          </FormField>
          <Box>
            <Box
              direction="row"
              margin={{ horizontal: "small", vertical: "small" }}
            >
              <Text>Date of birth</Text>
              <Text color="status-critical"> *</Text>
            </Box>
            <Box margin={{ vertical: "small" }} width="medium">
              <MaskedInput
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
                          parseInt(birthdate.split("/")[0], 10)
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
                value={birthdate}
                onChange={handleChange}
              />
            </Box>
          </Box>
          <FormField
            label={
              <Box direction="row">
                <Text>Gender</Text>
                <Text color="status-critical"> *</Text>
              </Box>
            }
            name="gender"
            margin={{ bottom: "small" }}
            required
          >
            <Select
              name="gender"
              options={["Female", "Male", "Prefer not to say"]}
              value={gender}
              onChange={handleSelectChange}
            />
          </FormField>
          <CheckBox
            checked={checked}
            label={`I confirm I accept Furniss' terms and conditions.`}
            onChange={(event) => setChecked(event.target.checked)}
          />
          <Box
            direction="column"
            alignSelf="center"
            align="center"
            justify="center"
            margin={{ vertical: "large" }}
          >
            <Button
              type="submit"
              alignSelf="center"
              label="Create account"
              primary
            />
          </Box>
        </Form>
        <Box margin={{ vertical: "large" }} align="center">
          <Text size="xlarge" margin="small">
            {" "}
            · · ·{" "}
          </Text>
          <Text weight="bold">Do you already have an account?</Text>
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
    );
  } else {
    return <Redirect to={{ pathname: "/home" }} />;
  }
};

const mapStateToProps = (state: any) => {
  return {
    name: state.name,
    lastname: state.lastname,
    username: state.username,
    email: state.email,
    password: state.password,
    birthdate: state.birthdate,
    gender: state.gender,
    address: state.address,
    telephone: state.telephone,
    description: state.userDescription,
    isAuthenticated: state.isAuthenticated,
  };
};

export default connect(mapStateToProps, {
  setIsAuthenticated,
  setRegisterDetails,
  submitRegisterDetails,
})(RegistrationForm);
