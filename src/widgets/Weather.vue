<template>
  <div class="widget search">
    <header>
      <h3 class="h6">Search weather</h3>
    </header>
    <form action="#" class="search-form">
      <div class="form-group">
        <input
          type="search"
          placeholder="Search for City"
          v-model="currentCity"
          @change="debounceSearchInput"
        />
        <button type="submit" class="submit">
          <i class="icon-search"></i>
        </button>
      </div>
    </form>
    <div class="pt-5">
      <div class="h6">Currently displaying</div>
      <br />
      <div class="h6 alert alert-warning">City : {{ weatherProps.name }}</div>
      <br />
      <div class="h6 alert alert-success">
        Temperature : {{ convertedTemp(weatherProps) }}
      </div>
      <br />
      <div class="h6 alert alert-info">
        Humidity :{{ getHumidity(weatherProps) }}
      </div>
      <div class="pt-5">
        <gmap-map
          :center="getCenter(weatherProps)"
          :zoom="getZoom()"
          style="width:100%;  height: 400px;"
        ></gmap-map>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
import { Map as GMap } from "vue-googlemaps";
import { get, debounce } from "lodash";
import { roundN } from "../helpers/weather-helper";
export default {
  name: "Weather",
  data() {
    return {
      currentCity: "Kumasi"
    };
  },
  created() {
    this.getWeatherData(this.currentCity);
  },
  computed: {
    ...mapState({
      // TODO : Find a better naming to avoid this convuluted destructuring
      weatherProps: ({ currentWeather: { currentWeather: _currentWeather } }) =>
        _currentWeather
    })
  },
  methods: {
    ...mapActions(["getWeatherData"]),

    convertedTemp: weatherProps =>
      (roundN(get(weatherProps, "temp", 0), 2) - 273.15).toFixed(2),

    getHumidity: weatherProps => get(weatherProps, "humidity", null),

    getCenter: weatherProps => ({
      lat: get(weatherProps, "coord.lat", 0),
      lng: get(weatherProps, "coord.lon", 0)
    }),

    getZoom: () => 7,

    debounceSearchInput: debounce(function(event) {
      this.currentCity = event.target.value;
      this.$store.dispatch("getWeatherData", this.currentCity);
    }, 500)
  },

  components: {
    "gmap-map": GMap
  }
};
</script>

<style scoped>
.list-group-item {
  font-weight: "bold";
  border: 0;
}
</style>
