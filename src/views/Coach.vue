<template>
  <ion-page>
    <ion-header>
      <ion-toolbar :style="menuStyle">
        <ion-title>{{ coachInfo.name }} </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true" :style="contentStyle">
      <div class="content">
        <p>
          After helping corporate giants like Pfizer and Hewlett-Packard
          generate millions in sales and small personal development companies
          quickly grow their annual revenue from six to seven figures, I was
          fired from my dream job the night before Christmas Eve. With a husband
          in medical school and two toddlers at home, it was devastating.
        </p>
        <p>
          After some soul-searching, and taking on the title “Queen of Sales
          Conversion,” I decided it was time to parlay my talents into my own
          profits—and to help others do the same. I started a home-based
          business with nothing more than my phone, my laptop, and the stolen
          hours of the night after my kids were tucked into bed.
        </p>
        <p>
          A few short years and over $40 million in sales later, I have helped
          over 15,000 clients in 134 countries earn more by doing what they
          love, all without being pushy or sales-y. My company, The Invisible
          Close™, has been honored to be in the Inc. 500 and named one of Inc.
          magazine’s fastest-growing privately held companies two years in a
          row, (#20 in women-owned businesses).
        </p>
        <p>
          My Mission: To help people make the difference they know they were put
          here to make and to make great money doing it.
        </p>
      </div>
      <ion-grid style="font-size: 13px">
        <ion-row>
          <ion-col class="col">
            <ion-icon :icon="globeOutline" class="icon" />&nbsp;&nbsp;
            <a href="https://lisaseasevich.com ">My Website</a>
          </ion-col>
          <ion-col class="col">
            <ion-icon :icon="globeOutline" class="icon" />&nbsp;&nbsp;
            <a href="https://lisasasevich.com/contact">Contact Me</a>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";
import {
  IonPage,
  IonContent,
  IonIcon,
  IonGrid,
  IonCol,
  IonTitle,
  IonHeader,
  IonToolbar,
  IonRow,
} from "@ionic/vue";
import { globeOutline, logoFacebook, mailOutline } from "ionicons/icons";

export default {
  name: "Tab3",
  components: {
    IonContent,
    IonPage,
    IonIcon,
    IonGrid,
    IonCol,
    IonTitle,
    IonHeader,
    IonToolbar,
    IonRow,
  },
  setup() {
    const store = useStore();

    const contentStyle = store.state.content;
    const menuStyle = store.state.menu;
    return {
      globeOutline,
      logoFacebook,
      mailOutline,
      contentStyle,
      menuStyle,
      coachInfo: computed(() => store.state.coach),
    };
  },
};
</script>