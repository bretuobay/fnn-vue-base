<template>
  <div class="container">
    <div class="row">
      <main class="posts-listing col-lg-8">
        <div class="container">
          <news-by-source v-bind:source="science"></news-by-source>
        </div>
      </main>
    </div>
  </div>
</template>
<script>
import NewsBySource from "../widgets/NewsBySource";
export default {
  name: "SciencePage",
  data() {
    return {
      msg: "Welcome to Science Page"
    };
  },
  components: {
    "news-by-source": NewsBySource
  }
};
</script>

<style scoped></style>
