<template>
  <div
    v-bind:class="{ hidden: !status }"
    class="fixed w-full z-50 top-2">
    <div class="absolute bg-white w-4/5 md:w-1/3 border-2 p-2">
      <div class="inline-block w-full text-center text-yellow-500 border-b font-bold text-2xl">Notification</div>
      <div class="py-5 ml-5">        
            Do you want to delete this?    
      </div>
      <div class="float-right" @click="$emit('modelToggle', true)">
        <button
            class="inline-block text-white font-bold bg-gray-700 px-5 py-2">
            close
        </button>
        <button 
            @click="$emit('deleteItem')"
            class="inline-block px-5 py-2 border">
            delete
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OptionNotification",
  props: {
    status: Boolean,
  },
};
</script>

<style>
</style>