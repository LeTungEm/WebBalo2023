<template>
  <div>

    <!-- User -->
    <router-view />

  </div>
</template>
<script>
import AOS from 'aos';

export default {
  name: 'HomeView',

  mounted() {
    AOS.init()
  }
}
</script>
<style></style>
