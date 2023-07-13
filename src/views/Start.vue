<template>
  <ion-page>
    <ion-header>
      <ion-toolbar :style="menuStyle">
        <ion-title> Getting Started </ion-title>
      </ion-toolbar>
    </ion-header>    
    <ion-content :style="contentStyle">
        <p class="px-8 pt-32">Are you working with a coach? If so, enter your Coach’s program code here:</p>
        <ion-input class = "flex  input1 border border-black"></ion-input> 
        <div class="check-box"> agree to the app terms and conditions. &nbsp;&nbsp;<ion-checkbox></ion-checkbox></div>
        <p class="clearfix"><button class="button ion-float-right ">Activate</button></p>
        <p style="margin-top: 55px">If not, no worries. You will receive great content from Turn Knowledge to Profit, and you can add a coach at any time.</p>
        <div class="check-box"> agree to the app terms and conditions. &nbsp;&nbsp;<ion-checkbox></ion-checkbox></div>
        <router-link to="/register">
          <button class="button ion-float-right clearfix">Continue</button>   
        </router-link>  
    </ion-content>    
  </ion-page>
</template>

<script lang="ts">
import { useStore} from 'vuex';
import { IonPage, IonContent, IonCheckbox, IonInput, IonHeader, IonToolbar, IonTitle } from '@ionic/vue';

export default {
  name: 'Start',
  components: {IonContent, IonPage, IonCheckbox, IonInput, IonHeader, IonToolbar, IonTitle},    
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
 .check-box {
   display: flex;
   font-size: 14px;
   justify-content: flex-end;
   margin-bottom: 22px;
   align-items: center;
 }
</style>