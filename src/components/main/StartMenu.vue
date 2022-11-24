<template>
    <!-- bottom-[64px] -->
    <div
        id="start-menu"
        class="absolute left-1/2 -translate-x-1/2 bg-gray-700 rounded-lg flex flex-col overflow-hidden text-white z-0"
        :class="startMenuPosition"
    >
        <div id="start-menu-main" class="p-8 relative">
            <div id="start-menu-search">
                <input
                    type="text"
                    name="start-search-input"
                    id="start-search-input"
                    class="w-full rounded py-1.5 px-2 outline-none bg-gray-900"
                />
            </div>
            <div id="start-menu-pinned" class="mt-6">
                <span class="absolute right-14">All Apps</span>
                <p class="ml-6 text-sm font-semibold">Pinned</p>
                <div class="start-menu-pinned-list grid grid-cols-6 py-8">
                    <div class="start-menu-pinned-item"></div>
                    <div class="start-menu-pinned-item"></div>
                    <div class="start-menu-pinned-item"></div>
                    <div class="start-menu-pinned-item"></div>
                    <div class="start-menu-pinned-item"></div>
                    <div class="start-menu-pinned-item"></div>
                    <div class="start-menu-pinned-item"></div>
                    <div class="start-menu-pinned-item"></div>
                    <div class="start-menu-pinned-item"></div>
                    <div class="start-menu-pinned-item"></div>
                    <div class="start-menu-pinned-item"></div>
                    <div class="start-menu-pinned-item"></div>
                    <div class="start-menu-pinned-item"></div>
                    <div class="start-menu-pinned-item"></div>
                    <div class="start-menu-pinned-item"></div>
                    <div class="start-menu-pinned-item"></div>
                    <div class="start-menu-pinned-item"></div>
                    <div class="start-menu-pinned-item"></div>
                </div>
            </div>
            <div id="start-menu-recommended">
                <p class="ml-6 text-sm font-semibold">Recommended</p>
                <div
                    class="start-menu-recommended-list grid grid-cols-2 pt-4 px-4"
                >
                    <div class="start-menu-recommended-item"></div>
                    <div class="start-menu-recommended-item"></div>
                    <div class="start-menu-recommended-item"></div>
                    <div class="start-menu-recommended-item"></div>
                    <div class="start-menu-recommended-item"></div>
                    <div class="start-menu-recommended-item"></div>
                </div>
            </div>
        </div>
        <div id="start-menu-footer" class="h-full bg-gray-900"></div>
    </div>
</template>

<script>
export default {
    props: {
        taskbarHeight: {
            type: Number,
        },
    },
    computed: {
        startMenuStatus() {
            return this.$store.getters.startMenu;
        },
        startMenuPosition() {
            return this.startMenuStatus
                ? `bottom-[${this.taskbarHeight + 16}px]`
                : "-bottom-full";
        },
    },
};
</script>

<style scoped>
#start-menu {
    height: 720px;
    min-width: 640px;
    transition: 300ms;
}
.start-menu-pinned-item {
    @apply bg-slate-600 border border-gray-800 w-24 h-20;
}
.start-menu-recommended-item {
    @apply bg-slate-500 border border-gray-800 h-14 w-full;
}
</style>
