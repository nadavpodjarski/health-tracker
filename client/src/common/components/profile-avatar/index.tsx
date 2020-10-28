import React from "react";
import { useSelector } from "react-redux";
import { Avatar } from "@material-ui/core";

const ProfileAvatar = () => {
  const { currentUser } = useSelector((state: any) => state.auth);

  return <Avatar src={currentUser.picture} />;
};

export default ProfileAvatar;
