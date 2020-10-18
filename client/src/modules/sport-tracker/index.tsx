import React from "react";

import MainHeader from "../../common/components/tracker-main-header";

import { useModal } from "../../common/hooks/useModal";
import { dictionary } from "../../main/languages/app-dictionary";

import { useSelector } from "react-redux";

const FoodTracker = () => {
  const { chosenLanguage } = useSelector((state: any) => state?.languages);
  const [OpenModalButton, handleOpen, AddSportModal] = useModal();

  const direction = chosenLanguage?.direction;
  const moduleTitle = dictionary.sportTracker.mainHeader[chosenLanguage?.const];
  const modalButtonText = dictionary.sportTracker.modalButton[chosenLanguage?.const];

  return (
    <div>
      {/*Header*/}
      <MainHeader title={moduleTitle} direction={direction} />
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
