export default {
    state() {
        return {
            allApps: {
                browser: {
                    name: "Browser",
                    status: "closed",
                    icon: "test",
                },
            },
            desktopApps: [],
            startMenuApps: [],
        };
    },
    getters: {
        appList(state) {
            return state.allApps;
        },
    },
    mutations: {
        toggleAppState(state, payload) {
            let appStatus = state.allApps[payload].status;
            appStatus = !appStatus;
        },
        toggleStart() {},
    },
};
