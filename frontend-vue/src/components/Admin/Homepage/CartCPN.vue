<template>
    <div class="flex justify-between items-center p-4 shadow-lg border hover:-translate-y-2 duration-700">
        <div class="">
            <h1 class="text-lg mb-3">{{ data.name }}</h1>
            <p class="font-bold text-2xl mb-2">{{data.sales}}%</p>
            <p class="text-sm text-gray-600"><span class="text-green-500 mr-2"><i class="fa fa-arrow-up mr-1"
                        aria-hidden="true"></i>{{ data.percent }}%</span> vs. previous month</p>
        </div>
        <div class="p-3 rounded-full text-white" :class="data.background_Color">
            <span  v-html="data.icon">

            </span>
        </div>
    </div>
</template>

<script>
export default {
    name: "CartComponent",
    props: {
        data: Object
    }
}
</script>

<style></style>