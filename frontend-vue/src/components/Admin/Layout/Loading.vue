<template>
  <div v-bind:class="{'hidden':!status}" class="fixed flex align-middle z-50 top-0 left-0 bg-black bg-opacity-50 w-full h-full">
    <div class="m-auto">
        <div class="text-lg text-center font-bold text-white mb-5">ĐỢI XÍ NHEN...</div>
    <div class="animate-spin w-20 h-20 border-8 border-t-blue-600 rounded-full m-auto"></div>
    </div>
  </div>
</template>

<script>
export default {
    name: "LoadingCPN",
    props:{
        status: Boolean,
    }
}
</script>

<style>

</style>