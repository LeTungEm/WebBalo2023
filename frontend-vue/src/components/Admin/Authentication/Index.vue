<template>
    <div class="flex">
        <!-- Sidebar -->
        <Sidebar :isSidebarVisible="isSidebarVisible" />
        <div class="w-full h-screen overflow-scroll">
            <!-- Header -->
            <Header :isSidebarVisible="isSidebarVisible" @toggleSidebar="toggleSidebar" />
            <!-- Main content -->
            <Table :data="listAccount"/>
        </div>
    </div>
</template>
  
<script>
import Sidebar from '@/components/Admin/Layout/Sidebar.vue'
import Header from '@/components/Admin/Layout/Header.vue'
import Table from '@/components/Admin/Table/Table.vue'
import AccountService from '@/service/AccountService'

export default {
    name: 'AuthenticationAccount',

    data() {
        return {
            account: false,
            isSidebarVisible: true,
            listAccount: [],
        }
    },
    methods: {
        toggleSidebar() {
            this.isSidebarVisible = !this.isSidebarVisible;
        },
        getAllAccount(){
            AccountService.getAll().then(res => {
                res.data.map(data => {
                    this.listAccount.push(
                        {
                            header: data.last_name+" "+data.first_name, 
                            title: data.email, 
                            description: data.phone,
                            image: (data.avatar)?"user/"+data.avatar:'default.jpg'
                        }
                    );
                })
            });
        }
    },
    components: {
        Sidebar,
        Header,
        Table
    },
    created(){
        this.getAllAccount();
    }
}
</script>
  