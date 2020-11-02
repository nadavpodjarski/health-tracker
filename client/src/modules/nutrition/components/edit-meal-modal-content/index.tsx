import React, { FC } from "react";

const EditModalContent: FC<{
  onCancelEdit: () => void;
  mealToBeUpdated: any;
}> = ({ onCancelEdit, mealToBeUpdated }) => {
  console.log(mealToBeUpdated);
  return <div></div>;
};

export default EditModalContent;
