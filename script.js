
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-analytics.js";
import { getDatabase, ref, set, push } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-database.js";
const firebaseConfig = {
    apiKey: "AIzaSyCkOGhawIMr9D9uBy3JrFMv9UoCWtxH4LQ",
    authDomain: "fir-e8290.firebaseapp.com",
    databaseURL: "https://fir-e8290-default-rtdb.firebaseio.com",
    projectId: "fir-e8290",
    storageBucket: "fir-e8290.firebasestorage.app",
    messagingSenderId: "978002675122",
    appId: "1:978002675122:web:5773e485fc326aeae090ab",
    measurementId: "G-V77YYRJ1KH"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);



const urlInput = new URLSearchParams(window.location.search);
const urlIdData = [
    {
        "id": "Cnr86tLMyW84bE3O0a",
        "url": "https://google.com"
    }
]
if ((urlInput.get("url")) && (urlInput.get("url") != "")) {
    window.location.replace(urlInput.get("url"));
} else if ((urlInput.get("id")) && (urlInput.get("id") != "")) {
    for (let i = 0; i < urlIdData.length; i = i + 1) {
        if (urlInput.get("id") == urlIdData[i].id) {
            window.location.replace(urlIdData[i].url)
        }
    }
}
/*
push(ref(database, "URLShortener/data/"), {
    "id": "erovgneogv",
    "LongURL": "https://google.com"
})
*/
