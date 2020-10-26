import React, { FC, CSSProperties, useState } from "react";
import { Button } from "@material-ui/core";
import SpringModal from "../../components/spring-modal";

/**
 * @returns [ handleOpen, Modal ]
 */
export const useModal = () => {
  const [open, setOpen] = useState(false);

  /**
   *  @description  modal open / close handler
   */
  const handleOpen = () => {
    setOpen((prevState) => !prevState);
  };

  /**
   *  @description  modal
   */
  const Modal: FC<{ width: number | string }> = ({ children, width }) => (
    <SpringModal {...{ open, handleOpen, width }}>{children}</SpringModal>
  );

  return [handleOpen, Modal] as const;
};
