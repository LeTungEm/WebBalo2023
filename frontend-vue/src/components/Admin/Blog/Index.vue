<template>
    <div class="flex">
        <!-- Sidebar -->
        <Sidebar :isSidebarVisible="isSidebarVisible" />
        <div class="w-full h-screen overflow-scroll">
            <h1>{{ removeID }}</h1>
            <!-- Header -->
            <Header :isSidebarVisible="isSidebarVisible" @toggleSidebar="toggleSidebar" />
            <router-link to="/createPage/0"
                class="m-5 inline-block border px-8 py-3 shadown-lg rounded-md my-5 uppercase hover:bg-gray-100">Create</router-link>
            <!-- Main content -->
            <Table 
                @removeID="changeRemoveID" 
                @deleteItem="deleteBlog"
                :data="listBlog" 
                :from-type="'/createPage/'"/>
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
            removeID: "",
        }
    },
    methods: {
        toggleSidebar() {
            this.isSidebarVisible = !this.isSidebarVisible;
        },

        getAllBlog() {
            PagesService.getAll().then(res => {
                res.data.map(data => {
                    this.listBlog.push(
                        {
                            id: data.blogId,
                            header: data.blogName,
                            title: data.createDate,
                            description: data.content.substr(0, 80),
                            image: (data.image) ? "blog/" + data.image : 'default.jpg'
                        }
                    );
                })
            })
        },
        changeRemoveID(value) {
            this.removeID = value;
        }
    },
    components: {
        Sidebar,
        Header,
        Table,
    },
    created() {
        this.getAllBlog();
    }
}
</script>
  