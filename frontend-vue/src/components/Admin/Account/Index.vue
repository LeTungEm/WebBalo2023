<template>
    <div class="flex">
        <!-- Sidebar -->
        <Sidebar :isSidebarVisible="isSidebarVisible" />
        <div class="w-full h-screen overflow-scroll">
            <!-- Header -->
            
            <Header :isSidebarVisible="isSidebarVisible" @toggleSidebar="toggleSidebar" />
            <router-link to="/createAccount/0" class="m-5 inline-block border px-8 py-3 shadown-lg rounded-md my-5 uppercase hover:bg-gray-100">Create</router-link>
            <h1 v-if="message" class="text-center bg-blue-300 text-white text-lg py-3">{{message}}</h1>
            <!-- Main content -->
            <Table 
                @removeID="changeRemoveID" 
                @deleteItem="deleteAccount"
                :data="listAccount"
                :from-type="'/createAccount/'"/>
        </div>
    </div>
</template>
  
<script>
import Sidebar from '@/components/Admin/Layout/Sidebar.vue'
import Header from '@/components/Admin/Layout/Header.vue'
import Table from '@/components/Admin/Table/Table.vue'
import AccountService from '@/service/AccountService'
import UploadImageService from '@/service/UploadImageService'

export default {
    name: 'AuthenticationAccount',

    data() {
        return {
            account: false,
            isSidebarVisible: true,
            listAccount: [],
            removeID: "",
            message: "",
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
                            id: data.accountId,
                            header: data.last_name+" "+data.first_name, 
                            title: data.email, 
                            description: data.phone,
                            image: (data.avatar)?"user/"+data.avatar:'default.jpg'
                        }
                    );
                })
            });
        },

        changeRemoveID(value){
            this.removeID = value;
        },

        deleteAccount(){
            AccountService.deleteAccount(this.removeID).then(res =>{
                if(res.data){
                    // Tìm item đã xóa
                    this.message = "Đã xóa "+this.listAccount.find(account => {
                        if(account.id == this.removeID){
                            // Xóa ảnh khỏi api
                            this.deleteImage(account);
                            return account;
                        }
                    }).header;

                    // Xoá item khỏi danh sách local
                    this.listAccount = this.listAccount.filter(account =>{
                        if(account.id != this.removeID){
                            return account;
                        }
                    })
                }else{
                    this.message = "Xóa không thành công";
                }
            })
        },

        deleteImage(account){
            let formData = new FormData();
            formData.append("action", "delete");
            formData.append("path", "../images/"+account.image);

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
        Table
    },
    created(){
        this.getAllAccount();
    }
}
</script>
  