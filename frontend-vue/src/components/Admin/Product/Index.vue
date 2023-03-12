<template>
    <div class="flex">
        <!-- Sidebar -->
        <Sidebar :isSidebarVisible="isSidebarVisible" />
        <div class="w-full h-screen overflow-scroll">
            <h1>{{removeID}}</h1>
            <!-- Header -->
            <Header :isSidebarVisible="isSidebarVisible" @toggleSidebar="toggleSidebar" />
            <!-- Main content -->
            <Table @removeID="changeRemoveID" :data="listProduct"/>
        </div>
    </div>
</template>
  
<script>
import Sidebar from '@/components/Admin/Layout/Sidebar.vue'
import Header from '@/components/Admin/Layout/Header.vue'
import Table from '@/components/Admin/Table/Table.vue'
import ProductsService from '@/service/ProductsService'

export default {
    name: 'ProductAdmin',

    data() {
        return {
            account: false,
            isSidebarVisible: true,
            listProduct: [],
            removeID: "",
        }
    },
    methods: {
        toggleSidebar() {
            this.isSidebarVisible = !this.isSidebarVisible;
        },
        getAllProduct(){
            ProductsService.getAll().then(res => {
                res.data.map(data => {
                    this.listProduct.push(
                        {
                            id: data.productID,
                            header: data.productName, 
                            title: data.createDate, 
                            description: data.amount,
                            image: (data.image_1)?"balo/"+data.image_1:'default.jpg'
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
        this.getAllProduct();
    }
}
</script>
  