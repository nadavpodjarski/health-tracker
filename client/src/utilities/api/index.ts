import { v4 as uuidv4 } from "uuid";

export const collections = {
  food: "food",
  sport: "sport",
  symptoms: "symptoms",
  mental: "mental",
  users: "users"
};

export const makeAuthor = (currentUser: any) => {
  return {
    uid: currentUser.uid,
    displayName: currentUser.displayName
  };
};

export const makeDoc = (doc: any) => ({ id: doc.id, data: doc.data() });

export const uuid = () => {
  return uuidv4();
};
