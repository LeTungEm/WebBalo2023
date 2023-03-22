<template>
    <div class="" v-for="(product, index) in products" :key="product">
        {{ index }}
        <div class="flex justify-between items-center w-full mt-5">
            <div class="flex items-center">
                <!-- <img :src="index.image_1" class="object-cover w-24 h-24 mr-4" alt="" /> -->
                <div class="">
                    <!-- <p> {{ product }}</p> -->
                    <p>
                        <!-- {{ listproducts }} -->
                        <!-- x <span class="font-bold text-lg">{{ item.price }}</span> -->
                    </p>
                </div>
            </div>
            <button @click="removeItem" class="cursor-pointer hover:text-gray-600"><i class="fa fa-times"
                    aria-hidden="true"></i></button>
        </div>
    </div>
    <div class="border-b py-5 mb-5"></div>
    <div class="border-b pb-5">
        <div class="flex justify-between font-bold">
            <h1>Total:</h1>
            <p>
                <!-- {{ totalPrice() }} -->
            </p>
        </div>
    </div>
    <div class="mt-5">
        <router-link to="/checkout"
            class="block text-center w-full border my-2 py-3 bg-green-500 hover:bg-green-600 text-white">
            proceed to checkout
        </router-link>
        <button class="w-full border my-2 py-3 bg-gray-300 hover:bg-gray-400">
            view cart
        </button>
    </div>
</template>

<script>
import ProductsService from '@/service/ProductsService';
export default {
    name: "ShoppingCart",
    data() {
        return {
            listproducts: [],
            products: []
        }
    },
    components: {
    },

    computed: {
    },

    methods: {
        // totalPrice() {
        //     var total = 0;

        //     this.products = localStorage.getItem('cart').split(',')

        //     this.products.forEach(item => {
        //         ProductsService.getByID(item).then(
        //             res => {
        //                 this.products = res.data;
        //                 total += this.products.price
        //             }
        //         )
        //     });

        //     return total;
        // },

        getItemsFromLocalstorage() {
            if (localStorage.getItem('cart') != null) {
                this.listproducts = localStorage.getItem('cart').split(',');

                this.listproducts.forEach(element => {
                    ProductsService.getByID(element).then(res => {
                        this.products = res.data
                        console.log("Da luu vo products: ", res.data);
                    })
                });
            }
        },


        removeItem() {
            console.log("Remove");
        },

    },

    created() {
        this.getItemsFromLocalstorage();
        // this.getAllProducts();
    }
}
</script>

<style></style>