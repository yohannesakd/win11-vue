<template>
    <div
        id="action-center"
        class="bg-gray-700 bottom-[64px] right-4 absolute rounded-lg flex flex-col overflow-hidden text-white z-0"
    >
        <div id="action-center-main">
            
        </div>
    </div>
</template>
<script>
export default {
    props: {
        taskbarHeight: {
            type: Number,
        },
    },
};
</script>
<style scoped>
#action-center {
    width: 350px;
    height: 330px;
}
</style>
