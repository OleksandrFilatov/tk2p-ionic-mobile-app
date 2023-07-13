<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar  v-bind:style="menuStyle" slot="bottom">
        <ion-tab-button tab="tab1" href="/home">
          <ion-icon :icon="homeOutline" />
          <ion-label>Home</ion-label>
        </ion-tab-button>
          
        <ion-tab-button tab="tab2" href="/share">
          <ion-icon :icon="shareSocialOutline" />
          <ion-label>Share</ion-label>
        </ion-tab-button>
        
        <ion-tab-button tab="tab3" href="/coach">
          <ion-icon :icon="personOutline" />
          <ion-label>[Coach]</ion-label>
        </ion-tab-button>
        
        <ion-tab-button tab="tab4" href="/about">
          <ion-icon :icon="alertCircleOutline" />
          <ion-label>About</ion-label>
        </ion-tab-button>
        
        <ion-tab-button tab="tab5" href="/manage">
          <ion-icon :icon="settingsOutline" />
          <ion-label>Manage</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { settingsOutline,alertCircleOutline, personOutline, shareSocialOutline, homeOutline } from 'ionicons/icons';
import { useStore} from 'vuex';

export default {
  name: 'Tabs',
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage, IonRouterOutlet },
  setup() {
    const store = useStore();
    const contentStyle = store.state.content
    const menuStyle = store.state.menu
    return {
      settingsOutline,
      alertCircleOutline, 
      personOutline, 
      shareSocialOutline,
      homeOutline,
      contentStyle, menuStyle
    }
  }
}
</script>