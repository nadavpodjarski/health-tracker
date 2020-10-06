import React from "react";
import { data } from "./fakeData";

import StickeyHeader from "../../common/trackers/components/sticky-header";
import MainHeader from "../../common/trackers/components/main-header";

import { langs } from "../../main/languages/trackers/index.";

import { useSelector } from "react-redux";

const FoodTracker = () => {
  const { chosenLanguage } = useSelector((state: any) => state?.languages);

  const direction = chosenLanguage?.direction;
  const moduleTitle = langs.foodTracker.mainHeader[chosenLanguage?.const];

  return (
    <div>
      {/*Header*/}
      <MainHeader title={moduleTitle} direction={direction} />
      {/*Body*/}
    </div>
  );
};

export default FoodTracker;
