<template>
    <div class="relative w-full py-8 px-12 bg-yellow-900 z-0">
        <div class="relative z-10 text-center py-24 md:py-48">
            <h1 class="text-white text-center text-4xl mb-4">
                {{ bannerName }}</h1>
            <router-link to="/" class="text-white text-center text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold mb-6">
                {{ shopName }}</router-link>
            <p class="text-3xl text-white">
                <router-link to="/">
                    <i class="fa fa-home" aria-hidden="true"></i>
                </router-link>
                <span class="mx-3">/</span>
                <router-link to="" class="underline">{{ menu }}</router-link>
            </p>
        </div>
        <img src="https://images.unsplash.com/photo-1490129375591-2658b3e2ee50?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=2244&amp;q=80"
            class="w-full h-full absolute inset-0 object-cover opacity-70">
    </div>
</template>

<script>
export default {
    name: 'BannerCpn',
    props:{
        bannerName: String,
        shopName: String,
        menu: String,
    }

}
</script>



<style>

</style>