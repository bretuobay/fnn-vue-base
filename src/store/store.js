import Vue from "vue";
import Vuex from "vuex";
import currentWeather from "./modules/current-weather";
import currentNews from "./modules/current-news";
import currency from "./modules/currency";

Vue.use(Vuex);
Vue.config.debug = true;

export default new Vuex.Store({
  modules: {
    currentNews,
    currentWeather,
    currency
  }
});
