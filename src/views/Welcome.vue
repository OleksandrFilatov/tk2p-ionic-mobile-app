<template>
  <ion-page>
    <ion-content>
      <div class = "ion-text-center" @click="()=> router.push('/start')" :style="contentStyle">
        Welcome<br/> to<br/> {{appName}} 
      </div>
    </ion-content> 
  </ion-page>
</template>

<script lang="ts">
import { useRouter } from 'vue-router';
import { IonPage, IonContent } from '@ionic/vue';
import { useStore} from 'vuex';

export default {
  name: 'Welcome',
  components: {IonContent, IonPage},  
  setup() {
      const router = useRouter();  
      const store = useStore();

      return { 
        router,
        appName: "TK2P",
        contentStyle: store.state.branding
      };
  }
}
</script>