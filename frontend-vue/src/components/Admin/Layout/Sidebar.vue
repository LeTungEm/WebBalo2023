<template>
  <aside class="w-72 border-r whitespace-nowrap" v-show="isSidebarVisible">
    <div class="flex flex-col h-full">
      <nav  class="flex-1 px-2 py-4 space-y-2 overflow-y-hidden hover:overflow-y-auto">
        <router-link to="/admin">
          <img class="object-fill h-16 mx-auto" src="https://data.webbalo.online/images/logo/logo.jpg" alt="" />
        </router-link>
        <RouterLinkCPN v-for="link in router_links" :key="link" :data="link"/>
      </nav>
    </div>
  </aside>
</template>

<script>
import RouterLinkCPN from './RouterLink.vue';

export default {
  name: "SidebarPage",
  data() {
    return {
      isopenPage: true,
      isOpenProduct: true,
      isAuthentication: true,
      router_links: [
        {
          link_to: '/admin',
          icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"> </path>',
          name: 'Dashboards',
        },
        {
          link_to: '/adminAbout',
          icon: '<path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"> </path>',
          name: 'About Managerment',
        },
        {
          link_to: '/adminContact',
          icon: ' <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"> </path> <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"> </path>',
          name: 'Contact Managerment',
        },
        {
          link_to: '/adminProduct',
          icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"> </path>',
          name: 'Product Managerment',
        },
        {
          link_to: '/adminBlog',
          icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"> </path>',
          name: 'Page Managerment',
        },
        {
          link_to: '/adminAccount',
          icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>',
          name: 'Account Managerment',
        },
      ],
    };
  },
  components: {
    RouterLinkCPN
  },
  props: {
    isSidebarVisible: Boolean
  }
};
</script>

<style></style>
