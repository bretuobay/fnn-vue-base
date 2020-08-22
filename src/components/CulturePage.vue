<template>
  <div class="container">
    <div class="row">
      <main class="posts-listing col-lg-8">
        <div class="container">
          <news-by-source v-bind:category="'culture'"></news-by-source>
        </div>
      </main>
    </div>
  </div>
</template>
<script>
import NewsBySource from "../widgets/NewsBySource";
export default {
  name: "CulturePage",
  data() {
    return {
      msg: "Welcome to Culture Page",
    };
  },
  components: {
    "news-by-source": NewsBySource,
  },
};
</script>

<style scoped></style>
