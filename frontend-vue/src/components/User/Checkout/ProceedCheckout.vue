<template>
    <div>
        <Header :quant="getTotalQuantity()" />
        <Banner :bannerName="'categories'" :shopName="'PALDNE'" :menu="'Shop'" />
        <div class="my-24 w-8/12 mx-auto">
            <table class="w-full mb-12">
                <thead>
                    <tr>
                        <th
                            class="px-6 align-middle border border-solid py-5 uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-pink-800 text-pink-300 border-pink-700">
                            Images</th>
                        <th
                            class="px-6 align-middle border border-solid py-5 uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-pink-800 text-pink-300 border-pink-700">
                            Product Name</th>
                        <th
                            class="px-6 align-middle border border-solid py-5 uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-pink-800 text-pink-300 border-pink-700">
                            Price</th>
                        <th
                            class="px-6 align-middle border border-solid py-5 uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-pink-800 text-pink-300 border-pink-700">
                            Quantity</th>
                        <th
                            class="px-6 align-middle border border-solid py-5 uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-pink-800 text-pink-300 border-pink-700">
                            Total</th>
                        <th
                            class="px-6 align-middle border border-solid py-5 uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-pink-800 text-pink-300 border-pink-700">
                            Remove</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="product in products" :key="product.productID">
                        <td class="w-1/5 p-6 align-middle whitespace-nowrap border-b">
                            <img class="" :src=product.image_1 alt="">
                        </td>
                        <td class="w-1/5 p-6 align-middle whitespace-nowrap border-b"> {{ product.productName }}</td>
                        <td class="w-1/5 p-6 align-middle whitespace-nowrap border-b">{{ product.price }}</td>
                        <td class="w-1/5 p-6 align-middle whitespace-nowrap border-b"><input type="number" min="1"
                                v-model="quantity"></td>
                        <td class="w-1/5 p-6 align-middle whitespace-nowrap border-b">{{ total() }}</td>
                        <td class="w-1/5 p-6 align-middle whitespace-nowrap border-b"><button
                                class="border p-4 hover:bg-gray-100 rouded-sm"><i class="fa fa-times"
                                    aria-hidden="true"></i></button></td>
                    </tr>
                </tbody>
            </table>
            <div class="flex justify-between">
                <div class=""></div>
                <div class="w-1/3">
                    <table class="w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th class="text-3xl font-bold pb-5">Order summary</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="border-b text-gray-800 pb-5">
                                <td class=" py-5">Grand Total</td>
                                <td class="font-bold text-2xl">$ 388</td>
                            </tr>
                            <tr class="border-b text-gray-800 pb-5">
                                <td class=""></td>
                                <td class="py-5 text-right"><button
                                        class="text-white px-5 py-3 bg-green-600 hover:bg-green-500 rounded-md">Checkout</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import Header from '../Layout/Header.vue';
import Footer from '../Layout/Footer.vue';
import Banner from '../Layout/Banner.vue';
import ProductsService from '@/service/ProductsService';

export default {
    name: "ProoceedCheckout",
    data() {
        return {
            sideBar: false,
            products: [],
            listproducts: [],
            quantity: 1,
            cart: [],
        };
    },

    components: {
        Header,
        Footer,
        Banner,
    },
    methods: {
        getTotalQuantity() {
            if (localStorage.getItem('quantity') != null) {
                return localStorage.getItem('quantity')
            }
            return 0;
        },

        getItemsFromLocalstorage() {
            if (localStorage.getItem('cart') != null) {
                this.listproducts = localStorage.getItem('cart').split(',');
                this.listproducts.forEach(element => {
                    ProductsService.getByID(element).then(res => {
                        this.products.push(res.data)
                    })
                });
            }
        },

        total() {
      
        }
    },

    computed: {
        isModalVisible() {
            return this.sideBar;
        },
    },
    created() {
        this.getItemsFromLocalstorage()
    }
};
</script>

<style></style>