import React from "react";
import { Box, Menu } from "grommet";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { RootState } from "../models/rootstate";
import { toast } from "react-toastify";
import renderUserIcon from "../helpers/renderUserIcon";

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
          {renderUserIcon(id, "medium")}
        </Box>
      }
      dropBackground={{ color: "offwhite", opacity: "medium" }}
      items={[
        {
          label: "My Gallery",
          onClick: () => {
            window.location.assign(`http://localhost:3000/usergallery/${id}`);
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
<<<<<<< HEAD
              pathname: `/purchase_history`,
            });
          },
        },
        {
          label: "Sales History",
          onClick: () => {
            history.push({
=======
>>>>>>> 04059edfbd80ec752d957a6f9a90ac82a039fe6a
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
