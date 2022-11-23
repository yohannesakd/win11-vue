import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

//Components
import ChevronIcon from "@/components/ChevronIcon.vue";

createApp(App).component("chevron-icon", ChevronIcon).mount("#app");
