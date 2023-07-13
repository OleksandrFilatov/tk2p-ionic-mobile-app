import { createStore } from 'vuex'

export default createStore({
  state: {
    coach: {
      name: "Coach -- Name",
      branding: {
        color: "black",
        fontSize: "70px",
        fontFamily: "Roboto",
        backgroundColor: "white",
        marginTop: "100px"
      },
    }
  },
  mutations: {
    setCoach(state, payload) {
      state.coach = payload;
    }
  },
  actions: {
    axGetCoach(context) {

      context.commit("setCoach", {
        name: "Lisa Sasevich",
        branding: {
          color: "black",
          fontSize: "70px",
          fontFamily: "Roboto",
          backgroundColor: "white",
          marginTop: "100px"
        }
      })
    }
  },
  modules: {
  }
})
