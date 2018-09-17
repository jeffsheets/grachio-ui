module.exports = {
  pluginOptions: {
    s3Deploy: {
      region: "us-east-1",
      bucket: "grachio",
      assetPath: "dist",
      deployPath: "/",
      pwa: false,
      enableCloudfront: false,
      uploadConcurrency: 5
    }
  }
};
