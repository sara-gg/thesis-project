import React from "react";
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

function RegistrationForm() {
  const [name, setName] = React.useState("");
  const [surname, setSurname] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [revealPassword, setRevealPassword] = React.useState(false);
  const [birthdate, setBirthdate] = React.useState("");
  const [gender, setGender] = React.useState("");

  return (
    <Box width="medium">
      <Form
        onChange={(value) => console.log("Change", value)}
        onReset={() => {
          setName("");
          setSurname("");
          setUsername("");
          setEmail("");
          setPassword("");
          setBirthdate("");
          setGender("");
        }}
        onSubmit={(event: any) =>
          console.log("Submit", event.value, event.touched)
        }
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
          <TextInput
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
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
            value={surname}
            onChange={(event) => setSurname(event.target.value)}
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
            value={username}
            onChange={(event) => setUsername(event.target.value)}
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
            onChange={(event) => setEmail(event.target.value)}
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
            value={password}
            onChange={(event) => setPassword(event.target.value)}
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
            value={gender}
            onChange={(event) => setGender(event.option)}
          />
        </FormField>
        <br></br>
        <Text margin={{ left: "small" }} size="small" color="status-critical">
          * Required Field
        </Text>
        <br></br>
        <Box direction="row" justify="between" margin={{ top: "medium" }}>
          <Button label="Cancel" />
          <Button type="reset" label="Reset" />
          <Button type="submit" label="Submit" primary />
        </Box>
      </Form>
    </Box>
  );
}
export default RegistrationForm;
