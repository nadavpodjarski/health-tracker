import React from "react";

import StickeyHeader from "../../common/components/sticky-header";
import MainHeader from "../../common/components/tracker-main-header";
import Modal from "../../common/components/spring-modal";

import { useModal } from "../../common/hooks/useModal";
import { langs } from "../../main/languages/app-dictionary";

import { useSelector } from "react-redux";

const FoodTracker = () => {
  const { chosenLanguage } = useSelector((state: any) => state?.languages);
  const [OpenModalButton, AddSportModal] = useModal();

  const direction = chosenLanguage?.direction;
  const moduleTitle = langs.sportTracker.mainHeader[chosenLanguage?.const];
  const modalButtonText = langs.sportTracker.modalButton[chosenLanguage?.const];

  return (
    <div>
      {/*Header*/}
      <MainHeader title={moduleTitle} direction={direction} />
      {/*Body*/}

      {/*Add Sport Modal*/}
      <OpenModalButton style={{ background: "red", color: "white" }}>
        {modalButtonText}
      </OpenModalButton>
      <AddSportModal>
        <div>
          <h1>Add Sport</h1>
        </div>
      </AddSportModal>
    </div>
  );
};

export default FoodTracker;
