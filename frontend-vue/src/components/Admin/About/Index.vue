<template>
    <div class="flex">
        <!-- Sidebar -->
        <Sidebar :isSidebarVisible="isSidebarVisible" />
        <div class="w-full h-screen overflow-scroll">
            <!-- Header -->
            <Header :isSidebarVisible="isSidebarVisible" @toggleSidebar="toggleSidebar" />
            <router-link to="/createAbout" class="m-5 inline-block border px-8 py-3 shadown-lg rounded-md my-5 uppercase hover:bg-gray-100">Create</router-link>

            <h1>{{removeID}}</h1>
            <!-- Main content -->
            <Table @removeID="changeRemoveID" :data="listAbout"/>
        </div>
    </div>
</template>
  
<script>
import Sidebar from '@/components/Admin/Layout/Sidebar.vue'
import Header from '@/components/Admin/Layout/Header.vue'
import Table from '@/components/Admin/Table/Table.vue'
import AboutService from '@/service/AboutService'

export default {
    name: 'AboutPage',

    data() {
        return {
            account: false,
            isSidebarVisible: true,
            listAbout: [],
            removeID:"",
        }
    },
    methods: {
        toggleSidebar() {
            this.isSidebarVisible = !this.isSidebarVisible;
        },
        
        getAllAbout(){
            AboutService.getAll().then(res =>{
                res.data.map(data =>{
                    this.listAbout.push(
                        {
                            id: data.aboutId,
                            header: data.title, 
                            title: '', 
                            description: data.description.substr(0, 80)+"...",
                            image: (data.image)?"about/"+data.image:'default.jpg'
                        }
                    )
                })
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
        this.getAllAbout();
    },

}
</script>
  