const mix = require('laravel-mix');
let LiveReloadPlugin = require('webpack-livereload-plugin')

mix.sass('sass/main.scss', 'css/')
    .sourceMaps()
    .disableNotifications()
    .options({processCssUrls: false })
    .webpackConfig({
    plugins: [
        new LiveReloadPlugin()
    ]
});
