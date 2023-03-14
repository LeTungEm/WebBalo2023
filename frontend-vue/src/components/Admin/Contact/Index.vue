<template>
    <div class="flex">
        <!-- Sidebar -->
        <Sidebar :isSidebarVisible="isSidebarVisible" />
        <div class="w-full h-screen overflow-scroll">
            <h1>{{ removeID }}</h1>
            <!-- Header -->
            <Header :isSidebarVisible="isSidebarVisible" @toggleSidebar="toggleSidebar" />
            <router-link to="/createContact/0"
                class="m-5 inline-block border px-8 py-3 shadown-lg rounded-md my-5 uppercase hover:bg-gray-100">Create</router-link>
            <h1 v-if="message" class="text-center bg-blue-300 text-white text-lg py-3">{{message}}</h1>
                <!-- Main content -->
            <Table 
                @removeID="changeRemoveID" 
                @deleteItem="deleteContact"
                :data="listContact" 
                :from-type="'/createContact/'"/>
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
            listContact: [],
            removeID: "",
            message: "",
        }
    },
    methods: {
        toggleSidebar() {
            this.isSidebarVisible = !this.isSidebarVisible;
        },
        getAllContact() {
            ContactService.getAll().then(res => {
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
        changeRemoveID(value) {
            this.removeID = value;
            this.message = "";
        },
        deleteContact(){
            ContactService.deleteContact(this.removeID).then(res =>{
                if(res.data){
                    // Tìm item đã xóa
                    this.message = "Đã xóa "+this.listContact.find(contact => {
                        if(contact.id == this.removeID){
                            return contact;
                        }
                    }).header;

                    // Xoá item khỏi danh sách local
                    this.listContact = this.listContact.filter(contact =>{
                        if(contact.id != this.removeID){
                            return contact;
                        }
                    })
                }else{
                    this.message = "Xóa không thành công";
                }
            })
        },
    },
    components: {
        Sidebar,
        Header,
        Table
    },
    created() {
        this.getAllContact();
    }
}
</script>
  