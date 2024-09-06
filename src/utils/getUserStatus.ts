import { getDatabase, ref, onValue } from "firebase/database";

export const getUserStatus = (uid: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    const dbRealtime = getDatabase();
    const userStatusDatabaseRef = ref(dbRealtime, `/status/${uid}`);

    onValue(userStatusDatabaseRef, (snapshot) => {
      if (snapshot.exists()) {
        const userStatus = snapshot.val();
        resolve(userStatus.state);
      } else {
        reject(new Error(`${uid} status is not available`));
      }
    });
  });
};
