import React, { FC, CSSProperties, useState } from "react";
import { Button } from "@material-ui/core";
import SpringModal from "../../components/spring-modal";

/**
 * @returns [ Open modal button ,handleOpen, Modal ]
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
   *  @description  open modal button
   */
  const OpenModalButton: FC<{ style?: CSSProperties; className?: string }> = ({
    children,
    style,
    className
  }) => (
    <Button
      style={style}
      type="button"
      className={className}
      onClick={handleOpen}
    >
      {children}
    </Button>
  );

  /**
   *  @description  modal
   */
  const Modal: FC<{ width: number | string }> = ({ children, width }) => (
    <SpringModal {...{ open, handleOpen, width }}>{children}</SpringModal>
  );

  return [OpenModalButton, handleOpen, Modal] as const;
};
