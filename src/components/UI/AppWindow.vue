<template>
    <div id="app-window" class="text-white">
        <div id="title-bar" class="flex justify-between bg-gray-500">
            <div id="app-icon">
                <img src="" alt="" />
            </div>
            <div id="window-actions" class="flex">
                <button class="text-center px-2 py-1">-</button>
                <button class="text-center px-2 py-1">0</button>
                <button
                    class="text-center px-2 py-1"
                    @click="$emit('closeApp')"
                >
                    x
                </button>
            </div>
        </div>
        <slot></slot>
    </div>
</template>

<script></script>
