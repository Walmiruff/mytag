// Initialize Firebase
// For instruction, please go to https://ionic-pwa-template.firebaseapp.com/getstarted

export const firebaseConfig = {
    apiKey: 'AIzaSyArygCZLfWdKPhCAcOmXj7v-78ILzTaVoM',
    authDomain: 'mytag-app.firebaseapp.com',
    databaseURL: 'https://mytag-app.firebaseio.com',
    projectId: 'mytag-app',
    storageBucket: 'mytag-app.appspot.com',
    messagingSenderId: '384174015951',
}; 

// News Feed from NewsApi.org
// Please sign-up and get your apiKey from 
// https://newsapi.org/docs/get-started
export const newsConfig = {
    apiKey  : "YOUR API KEY",
    newsURL : 'https://newsapi.org/v2/top-headlines'
};

// Google API to retrieve Google Map
// Please sign-up and get your apiKey from 
// https://developers.google.com/maps/documentation/javascript/get-api-key

export const googleConfig = {
    apiKey    : "YOUR API KEY",
    mapURL    : 'https://maps.googleapis.com/maps/api/geocode/json',
    nearbyURL : 'https://maps.googleapis.com/maps/api/place/nearbysearch/json',

};

