<template>
  <div class="row">
    <div v-bind:key="article.title" v-for="article in newsArticles" class="post col-xl-6">
      <div class="post-thumbnail">
        <a :href="article.url" class="animsition-link">
          <img :src="article.urlToImage" alt="..." class="img-fluid" />
        </a>
      </div>
      <div class="post-details">
        <div class="date meta-last">{{ formatDate(article.publishedAt) }}</div>
      </div>
      <a :href="article.url" class="animsition-link">
        <h3 class="h4 w-100">{{ article.title }}</h3>
      </a>
      <p class="text-muted">{{ article.description }}</p>
      <footer class="post-footer d-flex align-items-center">
        <a href="#" class="author d-flex align-items-center flex-wrap">
          <div class="title">{{ article.author }}</div>
        </a>
      </footer>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { getFormattedDateTime } from "../helpers/date-helper";

export default {
  name: "NewsBySource",
  props: ["category"],
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
    };
  },
  created() {
    this.getNewsByCategory(this.$props.category);
  },
  computed: {
    ...mapState({
      newsArticles: function ({ currentNews }) {
        return currentNews.newsArticles[this.$props.category];
      },
    }),
  },
  methods: {
    ...mapActions(["getNewsByCategory"]),
    formatDate: getFormattedDateTime,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
