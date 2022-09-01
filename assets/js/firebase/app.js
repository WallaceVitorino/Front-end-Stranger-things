  // Import the functions you need from the SDKs you need
    import {initializeApp} from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
    import {getAnalytics} from "https://www.gstatic.com/firebasejs/9.9.3/firebase-analytics.js";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
        apiKey: "AIzaSyAd-yaFFWXGTo7hrmZGQEDs_alA8pQ-QFk",
    authDomain: "projeto-mundo-invertido-eb94c.firebaseapp.com",
    projectId: "projeto-mundo-invertido-eb94c",
    storageBucket: "projeto-mundo-invertido-eb94c.appspot.com",
    messagingSenderId: "807904957869",
    appId: "1:807904957869:web:040d968906309fb02d3d24",
    measurementId: "G-L0H7HNVT0D"
  };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);

export default app;
