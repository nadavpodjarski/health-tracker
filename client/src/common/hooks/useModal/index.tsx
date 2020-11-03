import React, { FC, useState } from "react";
import SpringModal from "../../components/spring-modal";

export const useModal = () => {
  const [open, setOpen] = useState(false);

  const modalToggler = () => {
    setOpen((prevState) => !prevState);
  };

  const Modal: FC<{ width?: number | string }> = ({ children, width }) => (
    <SpringModal {...{ open, modalToggler, width }}>{children}</SpringModal>
  );

  return [modalToggler, Modal] as const;
};
