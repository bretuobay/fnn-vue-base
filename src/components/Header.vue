<template>
  <div class="nav-scroller py-1 mb-2">
    <nav class="navbar navbar-expand-lg fixed-top">
      <div class="container">
        <a class="navbar-brand" href="#">{{ siteName }}</a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExample07"
          aria-controls="navbarsExample07"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarsExample07">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <router-link to="/" class="nav-link" activeStyle="{activeStyle}"
                >HOME</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                to="/culture"
                class="nav-link"
                activeStyle="{activeStyle}"
                >CULTURE & POLITICS</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                to="/entertainment"
                class="nav-link"
                activeStyle="{activeStyle}"
                >ENTERTAINMENT</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                to="/technology"
                class="nav-link"
                activeStyle="{activeStyle}"
                >TECH
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                to="/science"
                class="nav-link"
                activeStyle="{activeStyle}"
                >SCIENCE</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                to="/business"
                class="nav-link"
                activeStyle="{activeStyle}"
                >BUSINESS</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                to="/videos"
                class="nav-link"
                activeStyle="{activeStyle}"
                >VIDEOS & MOVIES
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "SiteHeader",
  data() {
    return {
      siteName: "Vue Mashable Clone"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
