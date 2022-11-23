<template>
    <section id="the-computer" class="h-full">
        <div
            ref="desktopContainer"
            id="desktop-container"
            class="h-full bg-cover bg-center bg-no-repeat"
        >
            <section id="screen" ref="screen" class="w-full">
                <div
                    id="icon-container"
                    class="flex flex-col w-fit flex-wrap h-full gap-y-1.5 p-2 text-white"
                >
                    <div
                        v-for="item in icons"
                        :key="item"
                        class="h-[86px] w-[84px] flex flex-col items-center rounded-md text-sm hover:bg-blue-100 hover:bg-opacity-25"
                    >
                        <img src="folder.png" class="w-14" />
                        <span>item</span>
                    </div>
                </div>
            </section>
            <div
                id="taskbar"
                ref="taskbar"
                class="bg-gray-900 opacity-90 h-12 w-full relative overflow-hidden bg-inherit backdrop-blur-3xl"
            >
                <!-- <div class="absolute inset-0 bg-gray-900"></div> -->
            </div>
        </div>
    </section>
</template>

<style>
html,
body,
#app {
    height: 100%;
}
</style>

<script>
export default {
    data() {
        return {};
    },
    computed: {
        icons() {
            return Array.from(Array(53).keys());
        },
    },
    methods: {
        setScreenContainerHeight() {
            let desktopHeight =
                0 ||
                this.$refs.desktopContainer?.getBoundingClientRect().height;
            let taskbarHeight =
                this.$refs.taskbar.getBoundingClientRect().height;
            this.$refs.screen.style.height =
                desktopHeight - taskbarHeight + "px";
        },
    },
    created() {
        window.addEventListener("resize", this.setScreenContainerHeight);
    },
    mounted() {
        console.log(this.$refs);
        this.$refs.screen.style.height =
            window.innerHeight -
            this.$refs.taskbar.getBoundingClientRect().height +
            "px";
    },
};
</script>

<style scoped>
#icon-container {
    grid-template-rows: repeat(auto-fill, 64px);
}
#desktop-container {
    background-image: url(./default-background.jpg);
}
#taskbar {
    background: rgba(0, 0, 0, 0.95);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(30px);
    -webkit-backdrop-filter: blur(30px);
}
</style>
