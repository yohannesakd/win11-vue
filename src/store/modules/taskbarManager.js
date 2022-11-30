export default {
    state() {
        return {
            startMenu: false,
        };
    },
    getters: {
        startMenu(state) {
            return state.startMenu;
        },
        activeTaskbarActions(state) {
            return state.activeTaskbarActions;
        },
    },
    mutations: {
        toggleStartMenu(state) {
            state.startMenu = !state.startMenu;
        },
    },
    actions:{

    }
};
