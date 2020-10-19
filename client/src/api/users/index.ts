import { useDatabase } from "../../main/firebase/useDatabase";
import * as utils from "../utils";

const { db } = useDatabase();

const usersCollection = utils.collections.users;

export const addUser = (currentUser: any) => {
  db.collection(usersCollection).doc(currentUser.uid).set({
    displayName: currentUser.displayName,
    uid: currentUser.uid,
    email: currentUser.email
  });
};
