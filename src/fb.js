import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBKmNhP18Or0YvfVM2ZFiWz33188Zyysfs",
  authDomain: "fb-a55ff.firebaseapp.com",
  projectId: "fb-a55ff",
  storageBucket: "fb-a55ff.appspot.com",
  messagingSenderId: "250037226913",
  appId: "1:250037226913:web:b808c929315aa43e668fe0",
  measurementId: "G-XXSSK3NZ7V"
};


const app = initializeApp(firebaseConfig);


export async function uploadToFirebase(file) {
    try {
        const storage = getStorage(app);
        const fileNameRef = ref(storage, `image_${Date.now() * Math.random()}.${file.name.split('.')[file.name.split('.').length - 1]}`);

        let result = await uploadBytes(fileNameRef, file);
        let url  = await getDownloadURL(result.ref)
        return url
    }catch(err) {
        return false
    }
}