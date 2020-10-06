import React from "react";
import { data } from "./fakeData";
import StickeyHeader from "../../common/components/tracker/sticky-header";
import MainHeader from "../../common/components/tracker/main-header";

const FoodTracker = () => {
  return (
    <div>
      {/*Header*/}
      <MainHeader title="מעקב אחרי האוכל" />
      {/*Body*/}
    </div>
  );
};

export default FoodTracker;
