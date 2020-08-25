import React from "react";
import { NavLink } from "react-router-dom";
import { Avatar, Box, Button, Image, Menu } from "grommet";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { RootState } from "../models/rootstate";
import { toast } from "react-toastify";

type Props = {
  isAuthenticated: boolean;
  name: string;
  id: number;
};

const UserOptionsMenu = ({ isAuthenticated, id, name }: Props): JSX.Element => {
  const history = useHistory();
  if (isAuthenticated) {
  }
  return (
    <Menu
      color="charcoal"
      label={name}
      icon={
        <Box direction="row" gap="small">
          <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSv3L0Siqqs2axv5HtEUKg1uiBt0QyJZxsHLQ&usqp=CAU" />
        </Box>
      }
      dropBackground={{ color: "offwhite", opacity: "medium" }}
      items={[
        {
          label: "My Gallery",
          onClick: () => {
            history.push({
              pathname: "/usergallery",
              search: `?id=${id}`,
            });
          },
        },
        {
          label: "Purchase History",
          onClick: () => {
            toast("You are being redirected to your Purchase history!");
          },
        },
        {
          label: "Edit Profile",
          onClick: () => {
            toast("You are being redirected to your Profile!");
          },
        },
        {
          label: "Settings",
          onClick: () => {
            toast("You are being redirected to your Settings!");
          },
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
export default connect(mapStateToProps, {})(UserOptionsMenu);
