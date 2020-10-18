import { v4 as uuidv4 } from "uuid";

export const collections = {
  food: "food",
  sport: "sport",
  symptoms: "symptoms",
  mental: "mental",
};

export const makeAuthor = (currentUser: any) => {
  return {
    uid: currentUser.uid,
    displayName: currentUser.displayName,
  };
};

export const verifyOwnership = (currentUser: any, doc: any) => {
  return currentUser.uid === doc.author.uid;
};

export const uuid = () => {
  return uuidv4();
};
