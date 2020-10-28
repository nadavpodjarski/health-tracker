import axios from "axios";
import * as apiUtils from "../../utilities/api";

export const addUser = async (token: string) => {
  apiUtils.setAuthToken(token);
  try {
    const res = await axios.post("/add-user", {
      data: ""
    });
    return res.data;
  } catch (err) {
    throw err;
  }
};
