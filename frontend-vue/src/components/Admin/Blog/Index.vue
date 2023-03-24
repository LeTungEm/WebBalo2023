<template>
    <div class="flex">
        <!-- Sidebar -->
        <Sidebar :isSidebarVisible="isSidebarVisible" />
        <div class="w-full h-screen overflow-scroll">
            <!-- Header -->
            <Header :isSidebarVisible="isSidebarVisible" @toggleSidebar="toggleSidebar" />
            <router-link to="/createPage/0"
                class="m-5 inline-block border px-8 py-3 shadown-lg rounded-md my-5 uppercase hover:bg-gray-100">Create</router-link>
            <h1 v-if="message" class="text-center bg-blue-300 text-white text-lg py-3">{{message}}</h1>
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
import UploadImageService from '@/service/UploadImageService'

export default {
    name: 'BlogPage',

    data() {
        return {
            account: false,
            isSidebarVisible: true,
            listBlog: [],
            removeID: "",
            message: "",

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
            this.message = "";
        },
        deleteBlog(){
            PagesService.deletePage(this.removeID).then(res =>{
                alert(this.removeID);
                if(res.data){
                    // Tìm item đã xóa
                    this.message = "Đã xóa "+this.listBlog.find(blog => {
                        if(blog.id == this.removeID){
                            // Xóa ảnh khỏi api
                            this.deleteImage(blog);
                            return blog;
                        }
                    }).header;

                    // Xoá item khỏi danh sách local
                    this.listBlog = this.listBlog.filter(blog =>{
                        if(blog.id != this.removeID){
                            return blog;
                        }
                    })
                }else{
                    this.message = "Xóa không thành công";
                }
            })
        },

        deleteImage(blog){
            let formData = new FormData();
            formData.append("action", "delete");
            formData.append("path", "../images/"+blog.image);

            UploadImageService.uploadImage(formData)
                .then(function (data) {
                console.log("delete image: "+data.data);
                })

                .catch(function () {
                console.log("FAILURE!!");
                });
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
  