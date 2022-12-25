import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import store from "./store/index";
//Components
import ChevronIcon from "@/components/ChevronIcon.vue";
import BrowserApp from "@/components/main/apps/BrowserApp.vue";
import FileExplorer from "@/components/main/apps/FileExplorer.vue";
import AppWindow from "@/components/UI/AppWindow.vue";

createApp(App)
    .component("chevron-icon", ChevronIcon)
    .component("BrowserApp", BrowserApp)
    .component("FileExplorer", FileExplorer)
    .component("app-window", AppWindow)
    .use(store)
    .mount("#app");
