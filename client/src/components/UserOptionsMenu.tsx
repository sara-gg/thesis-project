import React from "react";
import { NavLink } from "react-router-dom";
import { Avatar, Box, Button, Image, Menu } from "grommet";
import { useHistory } from "react-router-dom";

const UserOptionsMenu = () => {
  const history = useHistory();
  const name = "Lady Gaga";
  const iddd = 1;
  return (
    <NavLink exact to="/usergallery">
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
                pathname: "/productdetails",
                search: `?id=${iddd}`,
              });
            },
          },
          { label: "Purchase History", onClick: () => {} },
          { label: "Edit Profile", onClick: () => {} },
          { label: "Settings", onClick: () => {} },
        ]}
      />
    </NavLink>
  );
};

export default UserOptionsMenu;
