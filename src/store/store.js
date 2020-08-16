import Vue from 'vue'
import Vuex from 'vuex'
import currentWeather from './modules/current-weather'
import currentNews from './modules/current-news'
import currency from './modules/currency';

Vue.use(Vuex)
Vue.config.debug = true

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    currentNews,
    currentWeather,
    currency
  }
})