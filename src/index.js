import Vue from 'vue';
import Vuetify from 'vuetify';
import L from 'leaflet';

Vue.use(Vuetify);

import '../node_modules/vuetify/dist/vuetify.min.css';
import '../node_modules/leaflet/dist/leaflet.css';

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  data: {
    clipped: false,
    drawer: true,
    fixed: false,
    miniVariant: false,
    title: 'Simple map interface',
    layerActive: true,
    points: '',
    map: '',
    cities: {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": { "name": "Cotonou" },
          "geometry": {
            "type": "Point",
            "coordinates": [
              2.433333,
              6.366667
            ]
          }
        },
        {
          "type": "Feature",
          "properties": { "name": "Lima" },
          "geometry": {
            "type": "Point",
            "coordinates": [
              -77.028333,
              -12.043333
            ]
          }
        },
        {
          "type": "Feature",
          "properties": { "name": "Noumea" },
          "geometry": {
            "type": "Point",
            "coordinates": [
              166.458,
              -22.2758
            ]
          }
        },
        {
          "type": "Feature",
          "properties": { "name": "Abu Dhabi" },
          "geometry": {
            "type": "Point",
            "coordinates": [
              54.366667,
              24.466667
            ]
          }
        }
      ]
    }
  },
  watch: {
    layerActive: function () {
      if (this.layerActive) {
        this.map.addLayer(this.points);
      } else {
        this.map.removeLayer(this.points);
      }
    }
  },
  mounted: function () {
    this.map = L.map('map').setView([7, 40], 3);
    L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>',
      maxZoom: 18
    }).addTo(this.map);

    // I need to create a default Icon. If not, there is an error when displaying the image marker.
    const defaultIcon = L.icon({
      iconUrl: 'marker-icon.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [0, -41]

    });

    this.points = L.geoJSON(this.cities, {
      pointToLayer: function (feature, latlng) {
        return L.marker(latlng, { icon: defaultIcon });
      }
    }).bindPopup(function (layer) {
      return layer.feature.properties.name;
    }).addTo(this.map);
  }
})
