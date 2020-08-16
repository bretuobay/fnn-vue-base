import Vue from "vue";
import Router from "vue-router";
import BusinessPage from "@/components/BusinessPage";
import CulturePage from "@/components/CulturePage";
import EntertainmentPage from "@/components/EntertainmentPage";
import HomePage from "@/components/HomePage";
import SciencePage from "@/components/SciencePage";
import TechnologyPage from "@/components/TechnologyPage";
import VideoPage from "@/components/VideoPage";


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomePage
    },
    {
      path: "/business",
      name: "Business",
      component: BusinessPage
    },
    {
      path: "/culture",
      name: "Culture",
      component: CulturePage
    },
    {
      path: "/entertainment",
      name: "Entertainment",
      component: EntertainmentPage
    },
    {
      path: "/science",
      name: "Science",
      component: SciencePage
    },
    {
      path: "/technology",
      name: "Technology",
      component: TechnologyPage
    },
    {
      path: "/videos",
      name: "Video",
      component: VideoPage
    }
  ]
});
