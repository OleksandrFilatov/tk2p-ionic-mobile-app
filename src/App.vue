<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { defineComponent } from 'vue';
import { mapActions} from 'vuex';
import './index.css'

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet
  },
  methods: {
    ...mapActions(['axGetCoach'])
  },
  mounted(){
    this.axGetCoach();
    
    
  }
});
</script>