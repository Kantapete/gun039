// firebase.config.js
const firebaseConfig = {
     apiKey: "AIzaSyDR_5CFlRt8ai6aAcKmQMBQDHOpD9ou2ps",
  authDomain: "snoopking.firebaseapp.com",
  projectId: "snoopking",
  storageBucket: "snoopking.firebasestorage.app",
  messagingSenderId: "620060298076",
  appId: "1:620060298076:web:e546cac7978029aaa74f99",
  measurementId: "G-P3NJ04X8TR"
};

// For service worker (firebase-messaging-sw.js)
// This ensures the config is available in both module and non-module contexts
if (typeof self !== 'undefined') {
    self.firebaseConfig = firebaseConfig;
}