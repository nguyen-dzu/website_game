import { addDoc } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-firestore.js";
import { collectionDbUser } from "../../main.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";
import { auth } from "../../main.js";

export class Authentication {
  constructor() {}
  async Register(age, fullName, email, password) {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email.value,
        password.value
      );
      if (userCredential) {
        await addDoc(collectionDbUser, {
          age: age.value,
          fullName: fullName.value,
          email: email.value,
          id: userCredential.user.uid,
        });
      }
      return userCredential;
    } catch (error) {
      return error;
    }
  }

  getUserToDb() {}
  async Login(email, password) {
    try {
      const userLogin = await signInWithEmailAndPassword(
        auth,
        email.value,
        password.value
      );
      if (userLogin) {
        window.location.href = "../../../HomePage.html";
        const { user } = userLogin;
        localStorage.setItem("token", user.accessToken);
      }
    } catch (error) {}
  }
}
