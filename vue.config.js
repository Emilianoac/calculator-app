module.exports = {
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