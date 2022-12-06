<template>
    <!-- h-[48px] -->
    <div
        id="taskbar"
        class="text-white w-full flex justify-between items-center px-4 relative"
        :class="taskbarHeight"
    >
        <div id="taskbar__left">
            <img
                src="/icons/widgets.png"
                class="taskbar__icon w-10"
                alt=""
                @click="handleTaskbarWidgets"
            />
        </div>
        <div
            id="taskbar__center"
            class="flex gap-1 absolute left-1/2 -translate-x-1/2"
        >
            <button
                id="start-btn"
                class="taskbar__icon w-11 transition duration-200 relative active: bg-opacity-10"
                alt=""
                @click="handleStartBtn"
            >
                <img
                    src="/icons/start.png"
                    alt=""
                    class="py-2 px-2.5 active:scale-75 transition duration-200 ease-out absolute w-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                />
            </button>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-2 -1 26 26"
                class="taskbar__icon w-11 p-2"
                @click="handleTaskbarSearchBtn"
            >
                <circle cx="13" cy="11" r="8" fill="#ffffff24"></circle>
                <g
                    fill="none"
                    stroke="currentColor"
                    stroke-linejoin="round"
                    stroke-width="2"
                >
                    <circle cx="13" cy="11" r="8"></circle>
                    <path d="M3 21l4-4" stroke-linecap="round"></path>
                </g>
            </svg>
            <img src="/icons/settings.png" class="taskbar__icon w-11" alt="" />
            <img src="/icons/explorer.png" class="taskbar__icon w-11" alt="" />
            <img src="/icons/edge.png" class="taskbar__icon w-11" alt="" />
            <img src="/icons/settings.png" class="taskbar__icon w-11" alt="" />
            <img src="/icons/explorer.png" class="taskbar__icon w-11" alt="" />
        </div>
        <div id="taskbar__right" class="h-full flex gap-1">
            <div
                id="taskbar-hidden-icons"
                class="h-full px-1.5 hover:bg-gray-500 hover:bg-opacity-30 flex justify-center transition"
                @click="handleTaskbarHiddenIcons"
            >
                <chevron-icon direction="up" class="w-3"></chevron-icon>
            </div>
            <div
                id="taskbar-action-center"
                class="flex items-center justify-center gap-2 transition hover:bg-gray-500 hover:bg-opacity-30 my-1 px-2 rounded-md"
                @click="handleActionCenter"
            >
                <div>
                    <img
                        src="/icons/ui/wifi.png"
                        alt=""
                        class="taskbar-action-icon w-4"
                    />
                </div>
                <div>
                    <img
                        src="/icons/ui/audio3.png"
                        alt=""
                        class="taskbar-action-icon w-4"
                    />
                </div>
                <div>
                    <span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="taskbar-action-icon battery-indicator w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fill="#000"
                                d="M17 6a3 3 0 0 1 3 3v1h1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-1v1a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h12Zm-.002 1.5H5a1.5 1.5 0 0 0-1.494 1.356L3.5 9v6a1.5 1.5 0 0 0 1.355 1.493L5 16.5h11.998a1.5 1.5 0 0 0 1.493-1.355l.007-.145V9a1.5 1.5 0 0 0-1.355-1.493l-.145-.007ZM6 9h10a1 1 0 0 1 .993.883L17 10v4a1 1 0 0 1-.883.993L16 15H6a1 1 0 0 1-.993-.883L5 14v-4a1 1 0 0 1 .883-.993L6 9h10H6Z"
                            ></path>
                        </svg>
                    </span>
                </div>
            </div>
            <div
                id="taskbar-date"
                class="flex flex-col justify-center text-xs transition hover:bg-gray-500 hover:bg-opacity-30 my-1 pl-2 pr-1 rounded-md"
                @click="handleTaskbarDateAndTime"
            >
                <span class="text-right tracking-wider">
                    {{ hours }}:{{ minutes }} {{ ampm }}</span
                >
                <span>{{ currentDate }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        height: {
            type: Number,
        },
    },
    data() {
        return {
            //time
            hours: "",
            minutes: "",
            ampm: "",
        };
    },
    computed: {
        currentDate() {
            return new Date().toLocaleDateString("en-US");
        },
        taskbarHeight() {
            return `h-[${this.height}px]`;
        },
    },
    methods: {
        setCurrentTime() {
            const date = new Date();
            let hours = date.getHours();
            let minutes = date.getMinutes();
            hours = hours <= 9 ? `${hours}`.padStart(2, 0) : hours;
            minutes = minutes <= 9 ? `${minutes}`.padStart(2, 0) : minutes;

            this.ampm = hours > 12 ? "PM" : "AM";
            this.hours = hours > 12 ? hours % 12 : hours;
            this.minutes = minutes;
        },
        handleStartBtn() {
            this.$store.commit("toggleStartMenu");
        },
        handleActionCenter() {
            this.$store.commit("toggleActionCenter");
        },
    },
    mounted() {
        setInterval(() => this.setCurrentTime(), 1000);
    },
};
</script>
<style scoped>
#taskbar {
    background-color: rgba(32, 32, 32, 0.75);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: saturate(3) blur(20px);
    -webkit-backdrop-filter: saturate(3) blur(20px);
}
.taskbar__icon {
    @apply py-2 px-2.5 rounded transition;
}
.taskbar__icon:hover {
    background-color: rgba(128, 128, 128, 0.3);
}
.taskbar__icon:active {
    background-color: rgba(96, 96, 96, 0.3);
}
.taskbar-action-icon {
    filter: invert();
}
</style>
