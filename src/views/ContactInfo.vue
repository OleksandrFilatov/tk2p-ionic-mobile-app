<template>
  <ion-page>
    <ion-header>
      <ion-toolbar :style="menuStyle">
        <ion-title> Getting Started </ion-title>
      </ion-toolbar> 
    </ion-header>     
    <ion-content :style="contentStyle">
        <p class="ion-text-center">Let us know who you are:</p>
        <ion-item>
          <ion-label class="label">First Name*:</ion-label>
          <ion-input></ion-input>
        </ion-item>
        <ion-item>
          <ion-label class="label">Last Name*:</ion-label>
          <ion-input></ion-input>
        </ion-item>
        <ion-item>
          <ion-label class="label">eMail Address*:</ion-label>
          <ion-input></ion-input>
        </ion-item>
        <p class="require-text">*Required field</p> 
        <router-link to="/verify-device">
          <button class="button ion-float-right">Save</button>     
        </router-link>   
    </ion-content>    
  </ion-page>
</template>

<script lang="ts">
import { useStore} from 'vuex';
import { IonPage, IonContent, IonItem, IonLabel, IonInput, IonHeader, IonToolbar, IonTitle } from '@ionic/vue';
export default {
  name: 'Start',
  components: { IonPage, IonContent, IonItem, IonLabel, IonInput, IonHeader, IonToolbar, IonTitle},  
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
.label {
  min-width: 100px;
  text-align: right;
  font-size: 14px;
}
.require-text {
  text-align: right;
  font-size: 14px;
  margin: 145px 0px 38px;
}
</style>