import { useDatabase } from "../../main/firebase/useDatabase";
import * as utils from "../../utilities/api";

const { db } = useDatabase();

const usersCollection = utils.collections.users;

export const addUser = (currentUser: any) => {
  db.collection(usersCollection).doc().set({
    displayName: currentUser.displayName,
    uid: currentUser.uid,
    email: currentUser.email
  });
};
