import Vue from "vue";

import One from "./1.vue";
import Two from "./2.vue";

export const registerComponents = () => {
  Vue.component(One.name, One);
  Vue.component(Two.name, Two);
};
