<template>
    <div class="flex">
        <!-- Sidebar -->
        <Sidebar :isSidebarVisible="isSidebarVisible" />
        <div class="w-full h-screen overflow-scroll">
            <!-- Header -->
            <Header :isSidebarVisible="isSidebarVisible" @toggleSidebar="toggleSidebar" />
            <!-- Main content -->
            <Table :data="listContact"/>
        </div>
    </div>
  </template>
  
  <script>
  import Sidebar from '@/components/Admin/Layout/Sidebar.vue'
  import Header from '@/components/Admin/Layout/Header.vue'
  import Table from '@/components/Admin/Table/Table.vue'
  import ContactService from '@/service/ContactService'
  
  export default {
    name: 'ContactPage',
    
    data() {
        return {
            account: false,
            isSidebarVisible: true,
            listContact:[],
        }
    },
    methods: {
        toggleSidebar() {
            this.isSidebarVisible = !this.isSidebarVisible;
        },
        getAllContact(){
            ContactService.getAll().then(res =>{
                res.data.map(data => {
                    this.listContact.push(
                        {
                            header: data.contactName, 
                            title: data.email, 
                            description: data.author,
                            image: 'default.jpg'
                        }
                    )
                });
                console.log(res.data);
            })
        }
    },
    components: {
        Sidebar,
        Header,
        Table
    },
    created(){
        this.getAllContact();
    }
  }
  </script>
  