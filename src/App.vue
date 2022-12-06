<template>
    <section
        id="the-computer"
        ref="theComputer"
        class="h-full overflow-hidden relative z-0"
    >
        <div
            id="desktop-container"
            ref="desktopContainer"
            class="h-full overflow-hidden relative z-0"
        >
            <section id="screen" ref="screen" class="w-full relative z-0">
                <div
                    id="desktop-icon-container"
                    class="flex flex-col w-fit flex-wrap h-full gap-y-1.5 p-2 text-white"
                >
                    <div
                        v-for="(_, index) in icons"
                        :key="index"
                        id="desktop-icon"
                        class="h-[84px] w-[82px] flex flex-col items-center rounded text-[13px] hover:bg-blue-100 hover:bg-opacity-25"
                    >
                        <img src="/icons/folderIcon.png" class="w-14" />
                        <span class="text-center">some text here</span>
                    </div>
                </div>
                <div class="absolute inset-0">
                    <!-- <component v-for="" :is=""></component> -->
                    <!-- 
                        let apps = [a,b,c]
                        let names = ["abda", "adaiugai", "adiaugia"]

                     -->
                </div>
            </section>
            <the-taskbar class="z-10" :height="taskbarHeight"></the-taskbar>
            <start-menu :taskbarHeight="taskbarHeight"></start-menu>
            <action-center :taskbarHeight="taskbarHeight"></action-center>
        </div>
    </section>
</template>

<script>
import TheTaskbar from "@/components/taskbar/TheTaskbar.vue";
import StartMenu from "@/components/taskbar/StartMenu.vue";
import ActionCenter from "@/components/taskbar/ActionCenter.vue";
export default {
    components: {
        TheTaskbar,
        StartMenu,
        ActionCenter,
    },
    data() {
        return {
            taskbarHeight: 48,
        };
    },
    computed: {
        icons() {
            return Array.from(Array(23).keys());
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
    @apply font-openSans;
}
</style>
