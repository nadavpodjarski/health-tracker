import React, { FC, useState } from "react";
import SpringModal from "../../components/spring-modal";

/**
 * @returns [ handleOpen, Modal ]
 */
export const useModal = () => {
  const [open, setOpen] = useState(false);

  /**
   *  @description  modal open / close handler
   */
  const modalToggler = () => {
    setOpen((prevState) => !prevState);
  };

  /**
   *  @description  modal
   */
  const Modal: FC<{ width: number | string }> = ({ children, width }) => (
    <SpringModal {...{ open, modalToggler, width }}>{children}</SpringModal>
  );

  return [modalToggler, Modal] as const;
};
