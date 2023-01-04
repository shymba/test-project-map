<template>
  <div class="map-container">
    <div class="map-wrapper">
      <div id="map"></div>
    </div>
  </div>
</template>

<script>
import leaflet from 'leaflet';
import {onMounted} from "vue";

export default {
  name: 'MapView',
  setup() {
    let map;
    onMounted(() => {

      map = leaflet.map('map').setView([48.379433, 31.1655799], 5.5)
      leaflet.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }).addTo(map);

      let marker = leaflet.marker([48.379433, 31.1655799]).addTo(map);
      let circle = leaflet.circle([48.379433, 31.1655799], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 11500
      }).addTo(map);
    })
  },
}
</script>

<style lang="scss">

.map-container {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;

  .map-wrapper {
    width: 85%;
    height: 70%;
  }
}

#map {
  height: 100%;
  width: 100%;
  max-width: 100%;
  border-radius: 5px;
}

</style>