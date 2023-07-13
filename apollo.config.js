// apollo.config.js
module.exports = {
    client: {
      service: {
        name: 'my-app',
        // URL to the GraphQL API
        url: 'https://dev.api.tk2p.com',
      },
      // Files processed by the extension
      includes: [
        'src/**/*.vue',
        'src/**/*.js',
      ],
    },
  }