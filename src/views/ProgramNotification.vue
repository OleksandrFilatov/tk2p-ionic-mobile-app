<template>
  <ion-page>
    <ion-header>
      <ion-toolbar :style="menuStyle">
        <ion-title> Program Notifications </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true" :style="contentStyle">
        <ion-list>
          <ion-item>
            <ion-label><div class="notification-item"> <p>Program 1<br/>Coach for Program 1</p><ion-toggle></ion-toggle><button class="button">Unsubscribe</button></div></ion-label>
          </ion-item>
          <ion-item>
            <ion-label><div class="notification-item"> <p>Program 2<br/>Coach for Program 2</p><ion-toggle></ion-toggle><button class="button">Unsubscribe</button></div></ion-label>
          </ion-item>
          <ion-item>
            <ion-label><div class="notification-item"> <p>[TK2P Default Program]<br/>Turn Knowledge to Profit</p> <ion-toggle></ion-toggle><button class="button">Unsubscribe</button></div></ion-label>
          </ion-item>    
        </ion-list>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { useStore} from 'vuex';
import { IonPage, IonContent, IonList, IonItem, IonLabel, IonToggle, IonHeader, IonToolbar, IonTitle } from '@ionic/vue';

export default  {
  name: 'Tab3',
  components: { IonContent, IonPage,  IonList, IonItem, IonLabel, IonToggle, IonHeader, IonToolbar, IonTitle },
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
<style scope>
.notification-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.notification-item button {
  background-color: #D25D5D;
}
.notification-item p {
  min-width: 150px;
}
</style>