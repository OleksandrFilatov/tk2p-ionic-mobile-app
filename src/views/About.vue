<template>
  <ion-page>
    <ion-header>
      <ion-toolbar :style="menuStyle">
        <ion-title>Turn Knowledge to Profit</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true" :style="contentStyle">
      <div class="content">
        <p>
          Coaches, speakers and authors hire Turn Knowledge to Profit to
          transform their knowledge into scalable, profitable products, services
          and programs so they can earn more, make a bigger impact on the world,
          and have the freedom to live the life of their dreams.
        </p>
        <p>
          Our newest product, Results Unleashed, gives coaches of all types the
          ability to create more meaningful connections with their clients and
          provide those clients with the tools and knowledge they need to get
          the results they want.
        </p>
        <p>
          The Turn Knowledge to Profit podcast provides entrepreneurs with the
          insights, ideas and tools they desire to rapidly grow their own
          businesses and reach a wider audience with their message. Join Michael
          and Johnell McCauley each week as they explore current business topics
          and have insightful conversations with today’s entrepreneurs.
        </p>
        <p>
          With more than three decades of experience creating products, services
          and programs that have earned more than $75 million in revenue for
          businesses of all sizes, we know the formula for turning your
          knowledge into profits.
        </p>
      </div>
      <ion-grid style="font-size: 14px">
        <ion-row>
          <ion-col class="col">
            <ion-icon :icon="globeOutline" class="icon" />&nbsp;&nbsp;
            <a href="www.TurnKnowledgeToProfit.com ">Our Website</a>
          </ion-col>
          <ion-col class="col">
            <ion-icon :icon="logoLinkedin" class="icon" />&nbsp;&nbsp;
            <a href="www.linkedin.com/company/turn-knowledge-to-profit"
              >Linkedin profile</a
            >
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col class="col">
            <ion-icon :icon="mailOutline" class="icon" />&nbsp;&nbsp;
            <a href="www.TurnKnowledgeToProfit.com/podcast">Podcast</a>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonPage,
  IonContent,
  IonIcon,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonRow,
  IonGrid,
  IonCol,
} from "@ionic/vue";
import {
  globeOutline,
  logoFacebook,
  mailOutline,
  logoLinkedin,
} from "ionicons/icons";
import { useStore } from "vuex";

export default {
  name: "Tab3",
  components: {
    IonContent,
    IonPage,
    IonIcon,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonRow,
    IonGrid,
    IonCol,
  },
  setup() {
    const store = useStore();
    const menuStyle = store.state.menu;
    const contentStyle = store.state.content;
    return {
      globeOutline,
      logoFacebook,
      mailOutline,
      logoLinkedin,
      contentStyle,
      menuStyle,
    };
  },
};
</script>