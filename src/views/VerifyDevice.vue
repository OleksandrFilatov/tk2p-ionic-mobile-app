<template>
  <ion-page>
    <ion-header>
      <ion-toolbar :style="menuStyle">
        <ion-title> Verify Device </ion-title>
      </ion-toolbar>
    </ion-header>    
    <ion-content :style="contentStyle">
        <p>We need to verify your device. Let us know if you would like to receive a code via email or text.</p>
        <div class="ion-text-center" style="margin-botton: 26px"><button class="button">Send via eMail</button></div>  
        <ion-item>
          <ion-label style="font-size: 14px">Phone Number:</ion-label>
          <ion-input></ion-input>
        </ion-item>
        <div class="ion-text-center" style="margin-top: 26px"><button class="button">Send via text</button></div>  
        <p style="margin: 60px 0px 15px">Enter verification code below:</p>
      <ion-input class = "input1"></ion-input>
    </ion-content>    
  </ion-page>
</template>

<script lang="ts">
import { useStore} from 'vuex';
import { IonPage, IonContent, IonItem, IonLabel, IonInput, IonHeader, IonToolbar, IonTitle } from '@ionic/vue';

export default {
  name: 'Start',
  components: {  IonPage, IonContent, IonItem, IonLabel, IonInput, IonHeader, IonToolbar, IonTitle },
  
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
 .input1 { 
   width: 176px;
   height: 43px;
   border: black solid 1px;
   margin:  18px auto;
 }
</style>
