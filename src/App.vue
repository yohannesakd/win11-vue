<template>
    <section id="the-computer" ref="theComputer" class="h-full">
        <div ref="desktopContainer" id="desktop-container" class="h-full">
            <section id="screen" ref="screen" class="w-full">
                <div
                    id="desktop-icon-container"
                    class="flex flex-col w-fit flex-wrap h-full gap-y-1.5 p-1.5 text-white"
                >
                    <div
                        v-for="item in icons"
                        :key="item"
                        id="desktop-icon"
                        class="h-[84px] w-[82px] flex flex-col items-center rounded text-sm hover:bg-blue-100 hover:bg-opacity-25"
                    >
                        <img src="folder.png" class="w-14" />
                        <span class="text-center">some text here</span>
                    </div>
                </div>
            </section>
            <the-taskbar :height="taskbarHeight"></the-taskbar>
            <section id="start-menu"></section>
        </div>
    </section>
</template>

<script>
import TheTaskbar from "./components/main/TheTaskbar.vue";
export default {
    components: {
        TheTaskbar,
    },
    data() {
        return {
            taskbarHeight: 48,
        };
    },
    computed: {
        icons() {
            return Array.from(Array(53).keys());
        },
    },
    methods: {
        setScreenContainerHeight() {
            let desktopHeight = window.innerHeight;
            this.$refs.screen.style.height =
                desktopHeight - this.taskbarHeight + "px";
        },
    },
    created() {
        window.addEventListener("resize", this.setScreenContainerHeight);
    },
    mounted() {
        this.setScreenContainerHeight();
    },
};
</script>

<style scoped>
#desktop-icon-container {
    grid-template-rows: repeat(auto-fill, 64px);
}
#desktop-container {
    /* dynamic */
    background-image: url(./wallpaper1.jpg);
    @apply bg-cover bg-center bg-no-repeat;
}
</style>

<!-- Global Styles -->
<style>
html,
body,
#app {
    height: 100%;
}
</style>
