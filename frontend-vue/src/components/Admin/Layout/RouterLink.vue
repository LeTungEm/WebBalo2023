<template>
    <rounter-link :to="link_name "
        class="flex p-2 text-gray-500 transition-colors rounded-md dark:text-light">
        <span aria-hidden="true">
            <svg class="w-5 h-5" v-html="routerIcon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
            </svg>
        </span>
        <span class="ml-2 text-sm"> {{ Router_link_Name }} </span>
    </rounter-link>
</template>
<script>
export default {
    name: "RouterLink",
    props: {
        link_name: String,
        routerIcon: HTMLBodyElement,
        Router_link_Name: String,
    },
}
</script>

<style></style>
