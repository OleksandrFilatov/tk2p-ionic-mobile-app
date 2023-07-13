<template>
  <ion-page>
    <ion-header>
      <ion-toolbar :style="menuStyle">
        <ion-title> Manage </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true" class="ion-padding" :style="contentStyle">
      <ion-list  class="bg-transparent">
        <ion-item class="bg-transparent" href="/contact">
          <ion-label><div> Account Information </div></ion-label>
        </ion-item>
        <ion-item href="/program-notification">
          <ion-label><div> Manage Programs </div> </ion-label>
        </ion-item>
        <ion-item href="/term">
          <ion-label><div>Terms & Conditions </div> </ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { useStore} from 'vuex';
import { IonPage, IonContent, IonList, IonItem, IonLabel, IonHeader, IonToolbar, IonTitle } from '@ionic/vue';

export default  {
  name: 'Tab3',
  components: { IonContent, IonPage,  IonList, IonItem, IonLabel, IonHeader, IonToolbar, IonTitle },
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
.manage-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
ion-item{
  --background: rgba(233, 0, 0, 0.526);
}
</style>