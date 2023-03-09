<template>
    <div class="h-full shadow-md pb-5 bg-gray-50">
        <router-link to="/blog">
            <img
                :src="require('@/assets/images/blog/'+blogData.image)"
                class="w-full h-52 md:h-64 lg:h-96 xl:h-64 object-cover" />
        </router-link>
        <div class="p-8 h-full">
            <div class="text-xs text-gray-600 uppercase font-semibold">
                {{blogData.createDate}}
            </div>
            <h2 class="mt-3 text-3xl mb-6 text-black leading-tight max-w-sm">
                {{blogData.blogName}}
            </h2>
            <p class="mt-4 max-w-md">
                {{blogData.content.substr(0, 150)}}...
            </p>
            <router-link to="/blog"
                class="flex items-center mt-6 uppercase text-sm text-black font-semibold">Read article
                <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9 5l7 7-7 7"></path>
                </svg>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: "BlogItem",
    props:{
        blogData: Object,
    }

}
</script>

<style>

</style>