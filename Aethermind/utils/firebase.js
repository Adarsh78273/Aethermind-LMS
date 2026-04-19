const firebaseConfig = {
  apiKey: "AIzaSyAbJcJ6lpIqyPbcRdfrNeCDcEeieq20OGo",               // ← apni real value
  authDomain: "projexa-cacc1.firebaseapp.com",
  projectId: "projexa-cacc1",
  storageBucket: "projexa-cacc1.appspot.com",
  messagingSenderId: "462320636585",        // ← apni real value
  appId: "1:462320636585:web:1bfae0c7425f3765e48fb8"                     // ← apni real value
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

console.log("🔥 firebase.js file loaded successfully!");
console.log("✅ Firebase initialized successfully!");

window.StorageDB = {
  saveUser: async (userData) => {
    try {
      const docRef = await db.collection("users").add(userData);
      console.log("✅ User saved! ID:", docRef.id);
      return { id: docRef.id, ...userData };
    } catch (error) {
      console.error("❌ Error saving user:", error);
      throw error;
    }
  },

  getUserByEmail: async (email) => {
    try {
      const snap = await db.collection("users")
                           .where("email", "==", email)
                           .get();
      if (snap.empty) return null;
      return snap.docs[0].data();
    } catch (error) {
      console.error("❌ Error finding user:", error);
      throw error;
    }
  }
};