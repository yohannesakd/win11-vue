import { createStore } from "vuex";
import appManager from "@/store/modules/appManager";
import taskbarManager from "@/store/modules/taskbarManager";

const store = createStore({
    modules: {
        appManager,
        taskbarManager,
    },
    state() {
        return {};
    },
});

export default store;
