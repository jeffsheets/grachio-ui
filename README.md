# grachio-ui

http://grachio.s3-website-us-east-1.amazonaws.com/

## overview
Groovy <a href="https://www.rachio.com/">Rachio</a> sprinkler watering data

Mashed up with weather actuals from the <a href="https://darksky.net/dev">Dark Sky API</a>

## presentation
Built for a tech-talk presentation, with slides on github
<a href="https://jeffsheets.github.io/aws-vue/">https://jeffsheets.github.io/aws-vue/</a>

## Tech Stack
<a href="http://micronaut.io/">Micronaut</a> on <a href="https://aws.amazon.com/lambda/">AWS Lambda</a> backend
<a href="https://github.com/jeffsheets/grachio/">https://github.com/jeffsheets/grachio/</a>

<a href="https://vuejs.org/">Vue.js</a> on AWS S3 frontend
<a href="https://github.com/jeffsheets/grachio-ui">https://github.com/jeffsheets/grachio-ui</a>

Pulling data from a <a href="https://developers.google.com/sheets/api/">Google Sheets API</a>

That is filled with Rachio data from an <a href="https://ifttt.com/discover">IFTTT</a> recipe

## Author
by Jeff Sheets <a href="https://twitter.com/sheetsj">@sheetsj</a>

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Run your unit tests
```
yarn test:unit
```

### Deploy to S3
```yarn deploy```