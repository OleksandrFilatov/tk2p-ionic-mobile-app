<template>
  <ion-page>
    <ion-header>
      <ion-toolbar :style="menuStyle">
        <ion-title> share </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true" :style="contentStyle">
        <div class="content share-image" >
          <img src="../assets/images/share.png"/>
        </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { useStore} from 'vuex';
import { IonPage, IonContent, IonHeader, IonToolbar, IonTitle } from '@ionic/vue';

export default  {
  name: 'Tab2',
  components: { IonContent, IonPage, IonHeader, IonToolbar, IonTitle },
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
  .share-image {
    display: flex;
    justify-content: center;
  }
</style>