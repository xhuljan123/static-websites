const mix = require('laravel-mix');

mix.sass('scss/style.scss', 'css/')
    .sourceMaps()
    .disableNotifications()
    .options({processCssUrls: false });
//     .webpackConfig({
//     plugins: [
//         new LiveReloadPlugin()
//     ]
// });
