const mix = require('laravel-mix');

// Set public path
mix.setPublicPath('./');

// Disable notifications
mix.disableNotifications();

// Vue 2
mix.vue({ version: 2 });

// Remove watch options
mix.override((config) => {
  delete config.watchOptions;
});

// Setup and configure JS
mix.js(
  'resources/assets/src/recurring-dates.js',
  'resources/assets/dist/recurring-dates.js',
).sass(
  'resources/assets/src/recurring-dates.scss',
  'resources/assets/dist/recurring-dates.css',
);

// Use build-in version of Vue
mix.webpackConfig({
  externals: {
    vue: 'Vue',
  },
});

// Always allow versioning of assets
mix.version();
