<template>
  <div class="map-container">
    <div class="map-wrapper">
      <div id="map"></div>
    </div>
  </div>
  <div>
    <MyModal
        @closeModal="closeModalWindow"
        v-if="showModal"
        :coordsInfo="coordsInfo"
    />
  </div>
</template>

<script>
import leaflet from 'leaflet';
import {onMounted, ref} from "vue";
import MyModal from "@/components/MyModal";

export default {
  name: 'MapView',
  components: {MyModal},
  setup() {
    let map;
    const localStorageMarkers = JSON.parse(localStorage.getItem('markers'));
    let markers = localStorage.getItem('markers') !== null ? localStorageMarkers : [];

    const coordsInfo = ref(null)
    const showModal = ref(null)
    const nameInput = ref(null)

    const closeModalWindow = (el) => {
      showModal.value = null;
      nameInput.value = el;
    }

    onMounted(() => {

      map = leaflet.map('map').setView([48.379433, 31.1655799], 5.5)
      leaflet.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }).addTo(map);

      let popup = leaflet.popup();
      let marker;

      function onMapClick(e) {
        const markerGeo = {
          lat: e.latlng.lat,
          lng: e.latlng.lng,
        }

        marker = leaflet.marker([e.latlng.lat, e.latlng.lng], {title: e.latlng})
                        .addTo(map);

        marker.on('mouseover', () => {
          marker.openPopup();
        });

        markers.push(markerGeo)
        popup
            .setLatLng(e.latlng)
            .setContent("You clicked the map at " + e.latlng.toString())
            .openOn(map);
        coordsInfo.value = markerGeo;
        updateLocalStorage();
        showModal.value = true;
      }

      //update local storage
      function updateLocalStorage() {
        localStorage.setItem('markers', JSON.stringify(markers))
      }
      //add markers from local storage
      function addMarkers(m) {
        m.forEach((el) => {
          leaflet.marker([el.lat, el.lng]).addTo(map)
        })
      }

      addMarkers(markers)

      map.on('click', onMapClick);
    })

    return {showModal, coordsInfo, closeModalWindow };
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