<template>
    <div class="flex">
        <!-- Sidebar -->
        <Sidebar :isSidebarVisible="isSidebarVisible" />
        <div class="w-full h-screen overflow-scroll">
            <!-- Header -->
            <Header :isSidebarVisible="isSidebarVisible" @toggleSidebar="toggleSidebar" />
            <!-- Main content -->
            <Table :data="listBlog"/>
        </div>
    </div>
</template>
  
<script>
import Sidebar from '@/components/Admin/Layout/Sidebar.vue'
import Header from '@/components/Admin/Layout/Header.vue'
import Table from '@/components/Admin/Table/Table.vue'
import PagesService from '../../../service/PagesService'

export default {
    name: 'BlogPage',

    data() {
        return {
            account: false,
            isSidebarVisible: true,
            listBlog: [],
        }
    },
    methods: {
        toggleSidebar() {
            this.isSidebarVisible = !this.isSidebarVisible;
        },

        getAllBlog(){
            PagesService.getAll().then(res => {
                res.data.map(data => {
                    this.listBlog.push(
                        {
                            header: data.blogName, 
                            title: data.createDate, 
                            description: data.content.substr(0,80),
                            image: (data.image)?"blog/"+data.image:'default.jpg'
                        }
                    );
                })
            })
        }
    },
    components: {
        Sidebar,
        Header,
        Table,
    },
    created(){
        this.getAllBlog();
    }
}
</script>
  