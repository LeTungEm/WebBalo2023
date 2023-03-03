<template>
    <div>
        <router-link to="/blog/this-is-latest-post/">
            <img
                :src="require('@/assets/images/blog/'+blogData.image)"
                class="w-full h-52 md:h-64 lg:h-96 xl:h-64 object-cover" />
        </router-link>
        <div class="bg-gray-50 p-8">
            <div class="text-xs text-gray-600 uppercase font-semibold">
                {{blogData.createDate}}
            </div>
            <h2 class="mt-3 text-3xl mb-6 font-display text-black leading-tight max-w-sm">
                {{blogData.blogName}}
            </h2>
            <p class="mt-4 max-w-md">
                {{blogData.content.substr(0, 150)}}...
            </p>
            <a href="/blog/this-is-latest-post/"
                class="flex items-center mt-6 uppercase text-sm text-black font-semibold">Read article
                <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9 5l7 7-7 7"></path>
                </svg></a>
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