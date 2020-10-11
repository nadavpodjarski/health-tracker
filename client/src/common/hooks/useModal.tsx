import React, { FC, CSSProperties, useState } from "react";
import { Button } from "@material-ui/core";
import SpringModal from "../components/spring-modal";


/**
 * @returns [ Open modal button , Modal ]
 */
export const useModal = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen((prevState) => !prevState);
  };


  /**
   *  @description  open modal button
   */
  const OpenModalButton: FC<{ style?: CSSProperties }> = ({ children, style }) => (
    <Button style={style} type="button" onClick={handleOpen}>
      {children}
    </Button>
  );

  /**
   *  @description  modal
   */  
  const Modal: FC = ({ children }) => (
    <SpringModal {...{ open, handleOpen }}>{children}</SpringModal>
  );

  return [ OpenModalButton, Modal ] as const
};
