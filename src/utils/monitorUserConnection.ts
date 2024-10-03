import { auth } from "@/firebase/firebaseConfig";
import { getDatabase, onDisconnect, onValue, ref, serverTimestamp, set } from "firebase/database";

export const monitorUserConnection = () => {
  const dbRealtime = getDatabase();
  const user = auth.currentUser;

  if (user) {
    const userStatusDatabaseRef = ref(dbRealtime, `/status/${user.uid}`);

    const isOfflineForDatabase = {
      state: "offline",
      updatedAt: serverTimestamp(),
    };

    const isOnlineForDatabase = {
      state: "online",
      updatedAt: serverTimestamp(),
    };

    const connectedRef = ref(dbRealtime, ".info/connected");
    onValue(connectedRef, async (snapshot) => {
      try {
        if (snapshot.val() === true) {
          await set(userStatusDatabaseRef, isOnlineForDatabase);

          onDisconnect(userStatusDatabaseRef)
            .set(isOfflineForDatabase)
            .catch((error) => {
              console.error("Error setting onDisconnect:", error);
            });
        } else {
          await set(userStatusDatabaseRef, isOfflineForDatabase);
        }
      } catch (error) {
        console.error("Error updating user status:", error);
      }
    });
  }
};
