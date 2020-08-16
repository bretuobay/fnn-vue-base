import * as appConstant from "../../constants/appConstants";
import * as types from "../../constants/mutation-types";

const state = {
  exchangeRates: {},
  exchangeRatesError: {}
};

const actions = {
  async getExchangeRatesList({ commit }, exchangeRates) {
    try {
      const response = await fetch(
        appConstant.CURRENCY_API_URL_ENDPOINT + exchangeRates
      );

      if (!response.ok) {
        throw Error(response.statusText);
      }
      commit(types.GET_CURRENCY_DATA_SUCCESS, {
        data: await response.json()
      });
    } catch (error) {
      commit(types.GET_CURRENCY_DATA_FAILURE, error);
    }
  }
};

const getters = {
  getExchangeRates: state => {
    return state.exchangeRates;
  }
};

const mutations = {
  [types.GET_CURRENCY_DATA](state) {
    state.exchangeRates;
  },

  [types.GET_CURRENCY_DATA_FAILURE](state, error) {
    state.newsError = error;
  },

  [types.GET_CURRENCY_DATA_SUCCESS](state, { data }) {
    state.exchangeRates = data;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
