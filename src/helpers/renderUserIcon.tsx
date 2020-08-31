import React from "react";
import { Avatar } from "grommet";
import iconGaga from "../assets/ladygagaicon.jpeg";
import iconLeo from "../assets/iconleo.jpeg";
import iconThor from "../assets/adminicon.jpeg";
import iconJane from "../assets/janedoeicon.jpeg";
import iconKitten from "../assets/kittenicon.jpeg";
import iconChick from "../assets/defaultavatar.jpeg";
import iconRaccoon from "../assets/raccoonicon.jpg";
import iconPuppy from "../assets/puppyicon.jpeg";
import iconHedge from "../assets/hedgeicon.jpeg";
import iconSalad from "../assets/saladicon.jpeg";

const renderUserIcon = (id: number, avatarSize: string) => {
  if (id === 9) {
    return (
      <Avatar
        size={avatarSize}
        background={{
          image: `url(${iconHedge})`,
        }}
      />
    );
  } else if (id === 8) {
    return (
      <Avatar
        size={avatarSize}
        background={{
          image: `url(${iconPuppy})`,
        }}
      />
    );
  } else if (id === 7) {
    return (
      <Avatar
        size={avatarSize}
        background={{
          opacity: "medium",
          image: `url(${iconRaccoon})`,
        }}
      />
    );
  } else if (id === 6) {
    return (
      <Avatar
        size={avatarSize}
        background={{
          image: `url(${iconChick})`,
        }}
      />
    );
  } else if (id === 5) {
    return (
      <Avatar
        size={avatarSize}
        background={{
          image: `url(${iconKitten})`,
        }}
      />
    );
  } else if (id === 4) {
    return (
      <Avatar
        size={avatarSize}
        background={{
          image: `url(${iconJane})`,
        }}
      />
    );
  } else if (id === 3) {
    return (
      <Avatar
        size={avatarSize}
        background={{
          image: `url(${iconGaga})`,
        }}
      />
    );
  } else if (id === 2) {
    return (
      <Avatar
        size={avatarSize}
        background={{
          image: `url(${iconLeo})`,
        }}
      />
    );
  } else if (id === 1) {
    return (
      <Avatar
        size={avatarSize}
        background={{
          image: `url(${iconThor})`,
        }}
      />
    );
  } else {
    return (
      <Avatar
        size={avatarSize}
        background={{
          image: `url(${iconSalad})`,
        }}
      />
    );
  }
};

export default renderUserIcon;
