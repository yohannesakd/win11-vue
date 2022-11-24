import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import store from "./store/index";
//Components
import ChevronIcon from "@/components/ChevronIcon.vue";

createApp(App).component("chevron-icon", ChevronIcon).use(store).mount("#app");
