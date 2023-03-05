<template>
    <div class="md:flex px-4 lg:px-8 xl:px-36 my-24 wrap max-w-max mx-auto">
        <div class="">
            <img :src="require('../../../assets/images/balo/'+ imageLink)" alt="" />
        </div>
        <div class="px-8 text-md leading-8 my-6">
            <h1 class="text-2xl pb-6 font-bold">{{title}}</h1>
            <p class="mb-2">
                {{content}}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AboutItem',
    props:{
        imageLink: String,
        title: String,
        content: String,
    }

}
</script>

<style>

</style>