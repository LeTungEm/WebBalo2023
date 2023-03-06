<template>
    <div class="flex">
        <!-- Sidebar -->
        <Sidebar :isSidebarVisible="isSidebarVisible" />
        <div class="w-full h-screen overflow-scroll">
            <!-- Header -->
            <Header :isSidebarVisible="isSidebarVisible" @toggleSidebar="toggleSidebar" />
            <!-- Main content -->
            <Table />
        </div>
    </div>
</template>
  
<script>
import Sidebar from '@/components/Admin/Layout/Sidebar.vue'
import Header from '@/components/Admin/Layout/Header.vue'
import Table from '@/components/Admin/Table/Table.vue'

export default {
    name: 'AboutPage',

    data() {
        return {
            account: false,
            isSidebarVisible: true
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
        Table
    }
}
</script>
  