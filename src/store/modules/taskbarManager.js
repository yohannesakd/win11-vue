export default {
    state() {
        return {
            startMenu: false,
            actionCenter: false,
        };
    },
    getters: {
        startMenu(state) {
            return state.startMenu;
        },
        actionCenter(state) {
            return state.actionCenter;
        },
        activeTaskbarActions(state) {
            return state.activeTaskbarActions;
        },
    },
    mutations: {
        toggleStartMenu(state) {
            state.startMenu = !state.startMenu;
        },
        toggleActionCenter(state) {
            state.actionCenter = !state.actionCenter;
        },
    },
    actions: {},
};
