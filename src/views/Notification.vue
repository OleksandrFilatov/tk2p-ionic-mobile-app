
<template> 
  <ion-page>
    <ion-header>
      <ion-toolbar :style="menuStyle">
        <ion-title> Notifications </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :style="contentStyle">
      <div class="content notification">
        <div><ion-toggle></ion-toggle></div>  
         <p style="font-size: 24px">Get Important Updates</p>
         <p style="font-size: 18px">To get the full benefit from [app name], you will want to be notified when new content is delivered. You can turn this notification on/off whenever you like through the Manage page. </p>
         <ion-button class=" mt-4" color="primary" expand="full">Yes, verify me</ion-button>
         <ion-button class=" mt-4 mb-8" color="light" expand="full">Maybe later</ion-button> 
      </div>
    </ion-content>    
  </ion-page>
</template>

<script lang="ts">
import { useStore} from 'vuex';
import { IonPage, IonContent, IonButton, IonToggle, IonHeader, IonToolbar, IonTitle } from '@ionic/vue';
export default {
  name: 'Start',
  components: { IonPage, IonContent, IonButton, IonToggle, IonHeader, IonToolbar, IonTitle },
  
  setup() {
      const store = useStore();
      const contentStyle = store.state.content
      const menuStyle = store.state.menu
      return {
        contentStyle, menuStyle
      }
  }
}
</script>
<style scoped>
.notification {
  padding: 80px 24px;
  text-align: center;
}
</style>
