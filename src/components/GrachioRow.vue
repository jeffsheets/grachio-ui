<template>
  <tr>
    <td>{{new Date(row.date).toLocaleString()}}</td>
    <td>{{row.waterMinutes}}</td>
    <td>{{row.weather.apparentTemperatureHigh}}</td>
    <td>{{row.weather.temperatureHigh}}</td>
    <td>{{row.weather.temperatureLow}}</td>
    <td class="weather-icon-cell"><img :src="require(`@/assets/weather/${icon}.svg`)" :alt="row.weather.icon" class="weather-icon"/></td>
    <td>{{row.weather.summary}}</td>
  </tr>
</template>

<script>
const iconMapping = {
  "partly-cloudy-day": "Cloud-Sun",
  "partly-cloudy-night": "Cloud-Moon",
  rain: "Cloud-Rain",
  "clear-day": "Sun",
  wind: "Wind",
  cloudy: "Cloud",
  default: "Thermometer"
};

export default {
  name: "GrachioRow",
  props: {
    row: {
      type: Object,
      required: true
    }
  },
  computed: {
    icon() {
      return iconMapping[this.row.weather.icon] || iconMapping.default;
    }
  }
};
</script>

<style scoped lang="less">
td.weather-icon-cell {
  padding: 0 !important;
  img.weather-icon {
    margin: 0;
  }
}
</style>
