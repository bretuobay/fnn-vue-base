<template>
  <div class="container">
    <div class="row">
      <main class="posts-listing col-lg-8">
        <div class="container">
          <news-by-source v-bind:category="'business'"></news-by-source>
        </div>
      </main>
    </div>
  </div>
</template>
<script>
import NewsBySource from "../widgets/NewsBySource";
export default {
  name: "BusinessPage",
  data() {
    return {
      msg: "Welcome to Business Page",
    };
  },
  components: {
    "news-by-source": NewsBySource,
  },
};
</script>

<style scoped></style>
