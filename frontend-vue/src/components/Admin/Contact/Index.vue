<template>
    <div class="flex">
        <!-- Sidebar -->
        <Sidebar :isSidebarVisible="isSidebarVisible" />
        <div class="w-full h-screen overflow-scroll">
            <h1>{{removeID}}</h1>
            <!-- Header -->
            <Header :isSidebarVisible="isSidebarVisible" @toggleSidebar="toggleSidebar" />
            <!-- Main content -->
            <Table @removeID="changeRemoveID" :data="listContact"/>
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
            removeID: "",
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
                            id: data.contactId,
                            header: data.contactName, 
                            title: data.email, 
                            description: data.author,
                            image: 'default.jpg'
                        }
                    )
                });
            })
        },
        changeRemoveID(value){
            this.removeID = value;
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
  