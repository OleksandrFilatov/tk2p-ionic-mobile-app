import { createApp, provide, h } from 'vue'
import App from './App.vue'
import router from './router';
import { IonicVue } from '@ionic/vue';
import { DefaultApolloClient } from '@vue/apollo-composable'
/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';

import store from './store'

import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'

// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: 'http://localhost:4003/graphql',
})

// Cache implementation
const cache = new InMemoryCache()

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
})
const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient)
  },

  render: () => h(App),
})
  //const app = createApp(App)
  .use(store)
  .use(IonicVue)
  .use(router);

router.isReady().then(() => {
  app.mount('#app');
});