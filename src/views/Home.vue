<template>
  <div class="home">
    <h2>Rachio Sprinkler Mashup with DarkSky Weather Actuals</h2>
    <GrachioDisplay :grachio="grachio"/>
  </div>
</template>

<script>
import axios from "axios";
import GrachioDisplay from "../components/GrachioDisplay";

export default {
  name: "home",
  components: { GrachioDisplay },
  data() {
    return {
      grachio: null
    };
  },
  mounted() {
    axios
      .get(
        "https://btmejwfs80.execute-api.us-east-1.amazonaws.com/default/grachio"
      )
      .then(result => {
        this.grachio = result.data;
      })
      .catch(e => {
        console.error("error fetching from grachio", e);
      });
  }
};
</script>
