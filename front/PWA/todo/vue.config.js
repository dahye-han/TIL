module.exports = {
  pwa: {
    //GenerateSW
    // workboxPluginMode: 'GenerateSW',
    // workboxOptions: {
    //   runtimeCaching: [{
        
    //   }]
    // }
    
    //InjectManifest
    // workboxPluginMode: 'InjectManifest',
    // workboxOptions: {
    //   swSrc: 'src/serviceworker.js',
    // }

    workboxOptions: {
      include: [/^index\.html$/, /\.css$/, /\.js$/, /^manifest\.json$/, /\.png$/],
      exclude: []
    }
  }
}
