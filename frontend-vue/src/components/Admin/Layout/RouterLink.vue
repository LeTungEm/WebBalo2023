<template>
    <div @click="this.$router.push(data.link_to)" 
        class="flex p-2 text-gray-500 transition-colors cursor-pointer rounded-md dark:text-light">
        <span aria-hidden="true">
            <svg class="w-5 h-5" v-html="data.icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
            </svg>
        </span>
        <span class="ml-2 text-sm"> {{ data.name }} </span>
    </div>
</template>
<script>
export default {
    name: "RouterLink",
    props: {
        data: Object,
    },
}
</script>

<style></style>
