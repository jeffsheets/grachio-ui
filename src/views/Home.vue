<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div>
      {{grachio}}
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "home",
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
