<template>
  <div class="container">
    <div class="row">
      <main class="posts-listing col-lg-8">
        <div class="container">
          <news-by-source v-bind:source="video"></news-by-source>
        </div>
      </main>
    </div>
  </div>
</template>
<script>
import { VideoSources } from "../helpers/news-sources";
import NewsBySource from "../widgets/NewsBySource";
export default {
  name: "VideoPage",
  data() {
    return {
      videoSources: VideoSources,
      msg: "Welcome to Science Page"
    };
  },
  components: {
    "news-by-source": NewsBySource
  }
};
</script>

<style scoped></style>
