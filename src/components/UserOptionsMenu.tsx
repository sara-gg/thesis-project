import React from "react";
import { Box, Menu } from "grommet";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { RootState } from "../models/rootstate";
import { toast } from "react-toastify";
import renderUserIcon from "../helpers/renderUserIcon";


const URL = process.env.URL || "http://localhost:3000"

type Props = {
  isAuthenticated: boolean;
  name: string;
  id: number;
  setUserData: (
    i: number,
    n: string,
    l: string,
    u: string,
    e: string,
    bd: string,
    g: string,
    a: string,
    b: boolean
  ) => void;
};
const UserOptionsMenu = ({
  isAuthenticated,
  id,
  name,
  setUserData,
}: Props): JSX.Element => {
  const history = useHistory();

  const handleLogoutClick = () => {
    toast.dark("You are being logged out");
    setTimeout(() => {
      removeToken();
      handleAuth();
    }, 3000);
  };

  const removeToken = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userId");
  };

  const handleAuth = () => {
    setUserData(0, "", "", "", "", "", "", "", false);
    window.location.assign(`${URL}/home`);
  };

  if (isAuthenticated) {
  }
  return (
    <Menu
      color="charcoal"
      label={name}
      icon={
        <Box direction="row" gap="small">
          {renderUserIcon(id, "medium")}
        </Box>
      }
      dropBackground={{ color: "offwhite", opacity: "medium" }}
      items={[
        {
          label: "My Gallery",
          onClick: () => {
            window.location.assign(`${URL}/usergallery/${id}`);
          },
        },
        {
          label: "Purchase History",
          onClick: () => {
            history.push({
              pathname: `/purchase_history`,
            });
          },
        },
        {
          label: "Sales History",
          onClick: () => {
            history.push({
              pathname: `/sales_history`,
            });
          },
        },
        {
          label: "Edit Profile",
          onClick: () => {
            toast.dark("You are being redirected to your Profile!");
          },
        },
        {
          label: "Settings",
          onClick: () => {
            toast.dark("You are being redirected to your Settings!");
          },
        },
        {
          label: "Logout",
          onClick: () => handleLogoutClick(),
        },
      ]}
    />
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    isAuthenticated: state.isAuthenticated,
    name: state.name,
    id: state.id,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    setUserData: (
      id: number,
      name: string,
      lastname: string,
      username: string,
      email: string,
      birthdate: string,
      gender: string,
      address: string,
      boolean: boolean
    ) =>
      dispatch({
        type: "SET_USER_DATA",
        payload: {
          id,
          name,
          lastname,
          username,
          email,
          birthdate,
          gender,
          address,
          boolean,
        },
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserOptionsMenu);
