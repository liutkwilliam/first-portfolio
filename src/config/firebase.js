import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD96zFItTxOc6w7475zgTRs1LgkeyTKN8w",
  authDomain: "first-portfolio-63d5c.firebaseapp.com",
  projectId: "first-portfolio-63d5c",
  storageBucket: "first-portfolio-63d5c.firebasestorage.app",
  messagingSenderId: "802282577555",
  appId: "1:802282577555:web:1401f7b3a5388cd925f766"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
// export const storage = getStorage(app);

// export const getFirebaseDebugInfo = () => ({
//   projectId: app.options.projectId,
//   authDomain: app.options.authDomain,
//   storageBucket: app.options.storageBucket,
//   storageHost: storage.host,
//   currentUser: auth.currentUser
//     ? {
//         uid: auth.currentUser.uid,
//         email: auth.currentUser.email,
//       }
//     : null,
// });

export const waitForAuthenticatedUser = () => {
  if (auth.currentUser) {
    return auth.currentUser.getIdToken(true).then(() => auth.currentUser);
  }

  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      unsubscribe();

      if (!user) {
        reject(new Error("You must be signed in before using Firebase Storage."));
        return;
      }

      try {
        await user.getIdToken(true);
        resolve(user);
      } catch (error) {
        reject(error);
      }
    });
  });
};
