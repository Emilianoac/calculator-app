module.exports = {
    //github-pages deploy option
    publicPath: '/calculator-app',

    pwa: {
        name: 'Calculator App',
        themeColor: '#ffffff',
        msTileColor: '#ffffff',
        appleMobileWebAppCapable: 'yes',
        appleMobileWebAppStatusBarStyle: 'black',
        workboxPluginMode: 'GenerateSW',
        workboxOptions: {
          skipWaiting: true,
        }
    }
}