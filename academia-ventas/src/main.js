import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import BootstrapVue from "bootstrap-vue";
Vue.use(BootstrapVue);
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import firebase from 'firebase';
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIfANdRWylEpxwpjy1pPv0C672oHwi89g",
  authDomain: "academia-ventas.firebaseapp.com",
  projectId: "academia-ventas",
  storageBucket: "academia-ventas.appspot.com",
  messagingSenderId: "93649719007",
  appId: "1:93649719007:web:04bbd3d742c6e4ec9a236a"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
