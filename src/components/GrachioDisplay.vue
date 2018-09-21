<template>
  <div v-if="!grachio">Loading...</div>
  <div v-else>
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
        <GrachioRow v-for="row in grachio.rachioData" :key="row.date" :row="row"/>
      </tbody>
    </table>
  </div>
</template>

<script>
import GrachioRow from "./GrachioRow";
export default {
  name: "GrachioDisplay",
  components: { GrachioRow },
  props: {
    grachio: {
      type: Object,
      default: () => null
    }
  }
};
</script>

<style scoped lang="less">
table {
  margin: 0 auto;
  thead {
    background-color: lighten(#42b983, 30%);
    th {
      text-align: center;
    }
  }
  tbody {
    tr:nth-child(odd) {
      background-color: lighten(#42b983, 45%);
    }
  }
}
</style>
