<template>
  <div class="about">
    <h1>
      <img alt="Vue logo" src="../assets/logo.png" class="logo">
      About Grachio
    </h1>
    <p>
      Groovy <a href="https://www.rachio.com/">Rachio</a> sprinkler watering data
    </p>
    <p>
      Mashed up with weather actuals from the <a href="https://darksky.net/dev">Dark Sky API</a>
    </p>
    <h3>Presentation</h3>
    <p>
      Built for a tech-talk presentation, with slides on github
      <a href="https://jeffsheets.github.io/aws-vue/">https://jeffsheets.github.io/aws-vue/</a>
    </p>
    <h3>Tech Stack</h3>
    <p>
      <a href="http://micronaut.io/">Micronaut</a> on <a href="https://aws.amazon.com/lambda/">AWS Lambda</a> backend
      <a href="https://github.com/jeffsheets/grachio/">https://github.com/jeffsheets/grachio/</a>
    </p>
    <p>
      <a href="https://vuejs.org/">Vue.js</a> on AWS S3 frontend
      <a href="https://github.com/jeffsheets/grachio-ui">https://github.com/jeffsheets/grachio-ui</a>
    </p>
    <p>
      Pulling data from a <a href="https://developers.google.com/sheets/api/">Google Sheets API</a>
    </p>
    <p>
      That is filled with Rachio data from an <a href="https://ifttt.com/discover">IFTTT</a> recipe
    </p>
    <h3>Author</h3>
    <p>
      by Jeff Sheets <a href="https://twitter.com/sheetsj">@sheetsj</a>
    </p>
  </div>
</template>

<style scoped lang="less">
.logo {
  width: 60px;
  vertical-align: middle;
}
</style>
