import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vselect from 'vue-select'

Vue.config.productionTip = false;

Vue.component('v-select', Vselect);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
