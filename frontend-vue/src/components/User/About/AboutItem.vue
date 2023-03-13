<template>
    <div class="grid grid-cols-5 px-4 lg:px-8 xl:px-36 my-24 wrap max-w-max mx-auto"  data-aos="fade-down" data-aos-duration="1500" data-aos-delay='500'>
        <div class="col-span-5 md:col-span-2 w-full">
            <img 
                class="w-fit mx-auto h-full object-cover" 
                :src="require('@/assets//images/about/'+ about.image)" />
        </div>
        <div class="col-span-5 md:col-span-3 px-8 text-md leading-8 my-6">
            <h1 class="text-2xl pb-6 font-bold">{{about.title}}</h1>
            <p>
                {{about.description}}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AboutItem',
    props:{
        about: Object,
    }

}
</script>

<style>

</style>