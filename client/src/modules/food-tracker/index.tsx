import React from "react";
import { data } from "./fakeData";

import StickeyHeader from "../../common/components/sticky-header";
import MainHeader from "../../common/components/tracker-main-header";

import { useModal } from "../../common/hooks/useModal";
import { langs } from "../../main/languages/app-dictionary";

import AddDishModalContent from "./AddDishModalContent";

import { useSelector } from "react-redux";

const FoodTracker = () => {
  const { chosenLanguage } = useSelector((state: any) => state?.languages);
  const [OpenModalButton, AddDishModal] = useModal();

  const direction = chosenLanguage?.direction;
  const moduleTitle = langs.foodTracker.mainHeader[chosenLanguage?.const];
  const modalButtonText = langs.foodTracker.modalButton[chosenLanguage?.const];

  return (
    <>
      <div>
        {/*Header*/}
        <MainHeader title={moduleTitle} direction={direction} />
        {/*Body*/}

        <OpenModalButton style={{ background: "blue", color: "white" }}>
          {modalButtonText}
        </OpenModalButton>
      </div>

      {/*Add Dish Modal*/}
      <AddDishModal>
        <AddDishModalContent direction={direction} />
      </AddDishModal>

    </>
  );
};

export default FoodTracker;
