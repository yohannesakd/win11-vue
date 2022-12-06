<template>
    <div
        id="action-center"
        class="bg-neutral-800 bottom-[64px] right-3 absolute rounded-lg flex flex-col overflow-hidden text-white z-0"
        :class="actionCenterPosition"
    >
        <div id="action-center-main" class="p-6">
            <div id="action-center-grid" class="grid grid-cols-3 gap-4">
                <div
                    v-for="(item, key, index) in actionCenterItems"
                    :key="index"
                    class="flex flex-col items-center justify-center gap-2 mb-2"
                >
                    <button
                        class="w-full flex justify-center py-4 rounded bg-neutral-700"
                    >
                        <img
                            :src="'/icons/ui/' + item + '.png'"
                            alt=""
                            class="action-center-icon w-4"
                        />
                    </button>
                    <span class="text-xs tracking-tight">{{ key }}</span>
                </div>
            </div>
            <div id="action-center-sliders" class="flex flex-col gap-10 mt-10">
                <div class="slider-container flex items-center relative">
                    <input
                        type="range"
                        min="0"
                        max="100"
                        class="action-center-slider"
                        id="brightness-slider"
                        v-model="brightnessValue"
                        ref="brightnessSlider"
                        @input="
                            handleSliderChange($event, $refs.brightnessSlider)
                        "
                    />
                    <div
                        ref="brightnessValueDisplay"
                        class="absolute w-full text-end bottom-2"
                    >
                        <span class="inline-block">{{ brightnessValue }}</span>
                    </div>
                </div>
                <div class="slider-container flex items-center relative">
                    <input
                        type="range"
                        min="0"
                        max="100"
                        class="action-center-slider"
                        id="sound-slider"
                        v-model="volumeValue"
                        ref="volumeSlider"
                        @input="handleSliderChange($event, $refs.volumeSlider)"
                    />
                    <div
                        ref="volumeValueDisplay"
                        class="absolute w-full text-end bottom-2"
                    >
                        <span class="inline-block">{{ volumeValue }}</span>
                    </div>
                </div>
            </div>
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
    data() {
        return {
            brightnessValue: 100,
            volumeValue: 100,
        };
    },
    computed: {
        actionCenterItems() {
            return {
                WiFi: "wifi",
                Bluetooth: "bluetooth",
                "Airplane Mode": "airplane",
                "Battery Saver": "saver",
                Theme: "dark-mode",
                "Night Light": "nightlight",
            };
        },
        actionCenterStatus() {
            return this.$store.getters.actionCenter;
        },
        actionCenterPosition() {
            return this.actionCenterStatus
                ? `bottom-[${this.taskbarHeight + 16}px]`
                : "-bottom-full";
        },
    },
    methods: {
        handleSliderChange(e, ref) {
            const min = e.target.min;
            const max = e.target.max;
            const val = e.target.value;

            let slider = ((val - min) * 100) / (max - min);
            e.target.style.backgroundSize = slider + "% 100%";
            ref.nextSibling.style.width = slider + "%";
        },
    },
};
</script>
<style scoped>
#action-center {
    width: 360px;
    height: 390px;
    transition: 300ms;
}
.action-center-icon {
    filter: invert();
}
input[type="range"] {
    -webkit-appearance: none;
    width: 100%;
    height: 4px;
    background-color: rgba(201, 201, 201, 0.6);
    border-radius: 5px;
    background-image: linear-gradient(#4cc2ff, #4cc2ff);
    background-size: 100% 100%;
    background-repeat: no-repeat;
}

input[type="range"]::-webkit-slider-thumb {
    @apply border-4 border-neutral-800;
    -webkit-appearance: none;
    height: 12px;
    width: 12px;
    border-radius: 50%;
    background-color: #4cc2ff;
    box-shadow: 0 0 2px 0 #555;
    transition: all 0.3s ease-in-out;
}
input[type="range"]::-moz-range-thumb {
    @apply border-4 border-neutral-800;
    -webkit-appearance: none;
    height: 12px;
    width: 12px;
    border-radius: 50%;
    background-color: #4cc2ff;
    box-shadow: 0 0 2px 0 #555;
    transition: all 0.3s ease-in-out;
}
/* .slider-container div {
    width: calc(100% + 24px);
} */
</style>
