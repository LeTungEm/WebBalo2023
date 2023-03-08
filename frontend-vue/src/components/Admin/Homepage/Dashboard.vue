<template>
    <div class="flex">
        <!-- Sidebar -->
        <Sidebar :isSidebarVisible="isSidebarVisible" />
        <div class="w-full h-screen overflow-scroll">
            <!-- Header -->
            <Header :isSidebarVisible="isSidebarVisible" @toggleSidebar="toggleSidebar" />
            <!-- Main content -->
            <main>
                <div class="px-4 mb-12">
                    <div class="my-5">
                        <router-link to="/admin">
                            <div class="flex">
                                <span aria-hidden="true">
                                    <svg class="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6">
                                        </path>
                                    </svg>
                                </span>
                            </div>
                        </router-link>
                    </div>
                    <div class="lg:flex">
                        <div class="w-full mr-6">
                            <div class="flex items-center justify-between shadow-lg p-4 rounded-lg border mb-10">
                                <div class=" w-full">
                                    <h1 class="text-purple-500">Congratulations {{ name }}</h1>
                                    <p class="text-sm text-gray-600">“Do or do not, there is no try.”</p>
                                </div>
                                <img style="height:140px"
                                    src="https://demos.themeselection.com/sneat-bootstrap-html-admin-template-free/assets/img/illustrations/man-with-laptop-light.png"
                                    alt="">
                            </div>
                        </div>
                        <div class="grid grid-cols-1 lg:grid-cols-2 w-full gap-5">
                            <CartCPNVue v-for="card in cards" :key="card" :data="card" />
                            <!-- 
                 

                            <div
                                class="flex justify-between items-center p-4 shadow-lg border hover:-translate-y-2 duration-700">
                                <div class="">
                                    <h1 class="text-lg mb-3">Users</h1>
                                    <p class="font-bold text-2xl mb-2">28.05k</p>
                                    <p class="text-sm text-gray-600"><span class="text-green-500"><i class="fa fa-arrow-up"
                                                aria-hidden="true"></i>18 %</span>vs. previous month</p>
                                </div>
                                <div class="p-3 rounded-full text-white bg-green-500">
                                    <span class="avatar-title bg-success rounded-circle fs-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round" class="feather feather-external-link">
                                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                            <polyline points="15 3 21 3 21 9"></polyline>
                                            <line x1="10" y1="14" x2="21" y2="3"></line>
                                        </svg>
                                    </span>
                                </div>
                            </div> -->
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
</template>
  
<script>
import Sidebar from '@/components/Admin/Layout/Sidebar.vue'
import Header from '@/components/Admin/Layout/Header.vue'
import CartCPNVue from './CartCPN.vue'
export default {
    name: 'ContactPage',

    data() {
        return {
            account: false,
            isSidebarVisible: true,
            cards: [
                {
                    background_Color: "bg-purple-500",
                    name: "Users",
                    sales: "28",
                    percent: "28",
                    icon: '<span class="avatar-title bg-primary rounded-circle fs-2"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-users"> <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path> <circle cx="9" cy="7" r="4"></circle> <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path> <path d="M16 3.13a4 4 0 0 1 0 7.75"></path> </svg> </span>'
                },
                {
                    background_Color: "bg-orange-500",
                    name: "Users",
                    sales: "28",
                    percent: "28",
                    icon: '<span class="avatar-title bg-danger rounded-circle fs-2">  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"   stroke-linejoin="round" class="feather feather-activity">    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline> </svg> </span>'
                },
                {
                    background_Color: "bg-yellow-500",
                    name: "Users",
                    sales: "28",
                    percent: "28",
                    icon: ' <span class="avatar-title bg-warning rounded-circle fs-2">   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"      stroke-linejoin="round" class="feather feather-clock">       <circle cx="12" cy="12" r="10"></circle>       <polyline points="12 6 12 12 16 14"></polyline>   </svg> </span>'
                },
                {
                    background_Color: "bg-green-500",
                    name: "Users",
                    sales: "28",
                    percent: "28",
                    icon: '<span class="avatar-title bg-success rounded-circle fs-2"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link"> <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path> <polyline points="15 3 21 3 21 9"></polyline> <line x1="10" y1="14" x2="21" y2="3"></line> </svg> </span>'
                },
            ]
        }
    },
    methods: {
        toggleSidebar() {
            this.isSidebarVisible = !this.isSidebarVisible;
        }
    },
    components: {
        Sidebar,
        Header,
        CartCPNVue
    }
}
</script>
  