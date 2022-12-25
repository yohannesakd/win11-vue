<template>
    <app-window @close-app="handleCloseApp">
        <div id="app-container" class="border border-gray-500 text-white">
            <h1>File Explorer</h1>
        </div>
    </app-window>
</template>

<script>
export default {
    props: {
        appName: {
            type: String,
        },
    },
    methods: {
        handleCloseApp() {
            this.$store.commit("closeApp", this.appName);
        },
    },
};
</script>

<style>
#app-container {
    width: 500px;
    height: 500px;
}
</style>
