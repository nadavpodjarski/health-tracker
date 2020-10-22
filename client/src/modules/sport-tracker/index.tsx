import React from "react";

import MainHeader from "../../common/components/tracker-main-header";

import { useModal } from "../../common/hooks/useModal";

const FoodTracker = () => {
  const [OpenModalButton, handleOpen, AddSportModal] = useModal();

  const moduleTitle = "Sport Track";
  const modalButtonText = "Add Activity";

  return (
    <div>
      {/*Header*/}
      <MainHeader title={moduleTitle} />
      {/*Body*/}

      {/*Add Sport Modal*/}
      <OpenModalButton style={{ background: "red", color: "white" }}>
        {modalButtonText}
      </OpenModalButton>
      <AddSportModal width={1200}>
        <div>
          <h1>Add Sport</h1>
        </div>
      </AddSportModal>
    </div>
  );
};

export default FoodTracker;
