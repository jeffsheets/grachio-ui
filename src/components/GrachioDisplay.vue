<template>
  <div v-if="!grachio">Loading...</div>
  <div v-else>
    <h1>Grachio Data</h1>
    <table class="pure-table pure-table-horizontal">
      <thead>
        <tr>
          <th>Date</th>
          <th>Water Minutes</th>
          <th>High Feels Like</th>
          <th>High Temp</th>
          <th>Low Temp</th>
          <th>Icon</th>
          <th>Summary</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in grachio.rachioData" :key="row.date">
          <td>{{new Date(row.date).toLocaleString()}}</td>
          <td>{{row.waterMinutes}}</td>
          <td>{{row.weather.apparentTemperatureHigh}}</td>
          <td>{{row.weather.temperatureHigh}}</td>
          <td>{{row.weather.temperatureLow}}</td>
          <td>{{row.weather.icon}}</td>
          <td>{{row.weather.summary}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "GrachioDisplay",
  props: {
    grachio: Array,
    default: () => null
  }
};
</script>

<style scoped lang="less">
table {
  margin: 0 auto;
  thead {
    background-color: lighten(#42b983, 30%);
  }
  tbody {
    tr:nth-child(odd) {
      background-color: lighten(#42b983, 45%);
    }
  }
}
</style>
