export default {
    state() {
        return {
            allApps: {
                BrowserApp: {
                    name: "Browser",
                    status: "closed",
                    icon: "edge",
                },
                FileExplorer: {
                    name: "File Explorer",
                    status: "closed",
                    icon: "explorer",
                },
            },
            openApps: [],
            desktopApps: [],
            startMenuApps: [],
        };
    },
    getters: {
        appList(state) {
            return state.allApps;
        },
        openApps(state) {
            return state.openApps;
        },
    },
    mutations: {
        toggleAppState(state, appName) {
            let appStatus = state.allApps[appName].status;
            appStatus = !appStatus;
        },
        openApp(state, componentName) {
            if (!state.openApps.includes(componentName)) {
                state.openApps.push(componentName);
                state.allApps[componentName].status = "active";
            } else {
                console.log("app already open");
            }
        },
        closeApp(state, appName) {
            state.openApps = state.openApps.filter((app) => app != appName);
            state.allApps[appName].status = "closed";
        },
    },
};
