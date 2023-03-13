<template>
    <div class="flex">
        <!-- Sidebar -->
        <Sidebar :isSidebarVisible="isSidebarVisible" />
        <div class="w-full h-screen overflow-scroll">
            <!-- Header -->
            <Header :isSidebarVisible="isSidebarVisible" @toggleSidebar="toggleSidebar" />
            <router-link to="/createAbout/0" class="m-5 inline-block border px-8 py-3 shadown-lg rounded-md my-5 uppercase hover:bg-gray-100">Create</router-link>

            <h1 v-if="message" class="text-center bg-blue-300 text-white text-lg py-3">{{message}}</h1>
            <!-- Main content -->
            <Table 
                @removeID="changeRemoveID" 
                @deleteItem="deleteAbout"
                :data="listAbout"
                :from-type="'/createAbout/'"/>
        </div>
    </div>
</template>
  
<script>
import Sidebar from '@/components/Admin/Layout/Sidebar.vue'
import Header from '@/components/Admin/Layout/Header.vue'
import Table from '@/components/Admin/Table/Table.vue'
import AboutService from '@/service/AboutService'
import UploadImageService from '@/service/UploadImageService'

export default {
    name: 'AboutPage',

    data() {
        return {
            account: false,
            isSidebarVisible: true,
            listAbout: [],
            removeID:"",
            message: "",
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
                            description: data.description,
                            image: (data.image)?"about/"+data.image:'default.jpg'
                        }
                    )
                })
            })
        },

        changeRemoveID(value){
            this.removeID = value;
            this.message = "";
        },

        deleteAbout(){
            AboutService.deleteAbout(this.removeID).then(res =>{
                if(res.data){
                    // Tìm item đã xóa
                    this.message = "Đã xóa "+this.listAbout.find(about => {
                        if(about.id == this.removeID){
                            // Xóa ảnh khỏi api
                            this.deleteImage(about);
                            return about;
                        }
                    }).header;

                    // Xoá item khỏi danh sách local
                    this.listAbout = this.listAbout.filter(about =>{
                        if(about.id != this.removeID){
                            return about;
                        }
                    })
                }else{
                    this.message = "Xóa không thành công";
                }
            })
        },

        deleteImage(about){
            let formData = new FormData();
            formData.append("action", "delete");
            formData.append("path", "../images/"+about.image);

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
    created(){
        this.getAllAbout();
    },

}
</script>
  