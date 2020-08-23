import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;
Vue.prototype.$imgBaseUrl =
  "https://juhee100bucket.s3.ap-northeast-2.amazonaws.com/marks/";
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
