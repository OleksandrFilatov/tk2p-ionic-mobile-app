<template>
  <ion-page>
    <ion-content>
      <div id="contentBackground" class="flex justify-around">
        <!-- <div id="contentBody" :style="messageStyle">{{ message }}</div> -->
        <h2 id="contentBody" :style="messageStyle">{{ message }}</h2>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonContent } from "@ionic/vue";
import { useStore } from "vuex";

export default {
  name: "Home",
  components: { IonContent, IonPage },
  setup() {
    const store = useStore();
    // const messageStyle = store.state.coach.branding;
    // const message = "Ok";
    const message = "We are judged by what we finish, not by what we start";
    return {
      // messageStyle,
      message,
    };
  },
};
</script>

<style lang="css" scoped>
@font-face {
  font-family: "GreatVibes";
  src: url("../assets/fonts/GreatVibes-Regular.ttf");
}
.flex {
  display: flex;
  width: 100%;
  height: 100%;
}
#contentBody {
  text-align: center;
  padding: 40px;
  font-family: "GreatVibes";
  font-size: 64px;
  line-height: 84px;
  color: darkgreen;
}
#contentBackground {
  background-image: url("../assets/images/background.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
</style>