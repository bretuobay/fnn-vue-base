import * as appConstant from "../../constants/appConstants";
import * as types from "../../constants/mutation-types";

const weatherDataState = {
  currentWeather: {},
  weatherError: {}
};

const actions = {
  async getWeatherData({ commit }, city) {
    try {
      const response = await fetch(appConstant.WEATHER_API_URL_ENDPOINT + city);

      if (!response.ok) {
        throw Error(response.statusText);
      }
      commit(types.GET_WEATHER_SUCCESS, {
        data: await response.json()
      });
    } catch (error) {
      commit(types.GET_WEATHER_FAILURE, error);
    }
  }
};

const mutations = {
  [types.GET_WEATHER_FAILURE](_, error) {
    weatherDataState.weatherError = error;
  },

  [types.GET_WEATHER_SUCCESS](state, { data }) {
    weatherDataState.currentWeather = { ...state, ...data };
  }
};

const getters = {
  getWeatherState: () => () => {
    return weatherDataState.currentWeather;
  }
};

export default {
  state: weatherDataState,
  actions,
  getters,
  mutations
};
