<template>
  <div v-if="!grachio">Loading...</div>
  <div v-else>
    <h1>Grachio Data</h1>
    <table class="pure-table pure-table-horizontal">
      <thead>
        <tr>
          <th>Date</th>
          <th>Water Minutes</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in grachio.rachioData" :key="row.date">
          <td>{{row.prettyDate}}</td>
          <td>{{row.waterMinutes}}</td>
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
