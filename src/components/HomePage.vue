<template>
  <div class="container">
    <div class="row">
      <main class="posts-listing col-lg-8">
        <div class="container">
          <news-by-source v-bind:source="'home'"></news-by-source>
        </div>
      </main>
      <aside class="col-lg-4">
        <weather></weather>
        <currency-rates></currency-rates>
      </aside>
    </div>
  </div>
</template>
<script>
import NewsBySource from "../widgets/NewsBySource";
import Weather from "../widgets/Weather";
import CurrencyRates from "../widgets/CurrencyRates";

export default {
  name: "HomePage",
  data() {
    return {
      msg: "Welcome to Home Page"
    };
  },
  components: {
    "news-by-source": NewsBySource,
    weather: Weather,
    "currency-rates": CurrencyRates
  }
};
</script>

<style scoped></style>
