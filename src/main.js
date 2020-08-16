import Vue from "vue";
import { sync } from "vuex-router-sync";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "vue-googlemaps/dist/vue-googlemaps.css";

import VueGoogleMaps from "vue-googlemaps";
import App from "./App";
import router from "./router";
import store from "./store/store";

// Custom css
import "./assets/custom.css";

sync(store, router);

Vue.config.productionTip = false;
Vue.use(VueGoogleMaps, {
  load: {
    apiKey: "AIzaSyBiq5XcFuuwbNet77mWhiM7oU7KK-yDU0Q",
    libraries: ["places"],
    useBetaRenderer: false
  }
});

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});
