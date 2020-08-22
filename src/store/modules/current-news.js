import * as appConstant from "../../constants/appConstants";
import * as types from "../../constants/mutation-types";

export const HOME = "home";
export const BUSINESS = "business";
export const CULTURE = "culture";
export const ENTERTAINMENT = "entertainment";
export const SCIENCE = "science";
export const TECHNOLOGY = "technology";
export const SPORTS = "sports";

const newsDataState = {
  newsArticles: {
    home: [],
    sports: [],
    business: [],
    culture: [],
    entertainment: [],
    technology: [],
    science: [],
    video: []
  },
  newsError: {}
};

const actions = {
  async getNewsByCategory({ commit }, payload) {
    try {
      const response = await fetch(
        appConstant.NEWS_API_URL_ENDPOINT + `${payload}`
      );

      if (!response.ok) {
        throw Error(response.statusText);
      }
      commit(types.GET_NEWS_DATA_SUCCESS, {
        data: { articles: await response.json(), category: payload }
      });
    } catch (error) {
      commit(types.GET_NEWS_DATA_FAILURE, error);
    }
  }
};

const getters = {
  getArticlesBySource: () => category => {
    return newsDataState.newsArticles[category];
  }
};

const mutations = {
  [types.GET_NEWS_DATA_FAILURE](_, error) {
    newsDataState.newsError = error;
  },

  [types.GET_NEWS_DATA_SUCCESS](_, { data }) {
    newsDataState.newsArticles[data.category] = data.articles;
  }
};

export default {
  state: newsDataState,
  getters,
  actions,
  mutations
};
