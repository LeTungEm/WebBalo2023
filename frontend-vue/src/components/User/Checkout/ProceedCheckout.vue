<template>
    <div>
        <Header :quant="getTotalQuantity()" />
        <Banner :bannerName="'categories'" :shopName="'PALDNE'" :menu="'Shop'" />
        <div class="my-24 w-8/12 mx-auto" v-if="showItems">
            <table class="w-full mb-12">
                <thead>
                    <tr>
                        <th
                            class="px-6 align-middle border border-solid py-5 uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-pink-800 text-pink-300 border-pink-700">
                            ID</th>
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
                            Remove</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(product, index) in products" :key="product.productID">
                        <td class="w-1/5 p-6 align-middle whitespace-nowrap border-b">
                            {{ index }}
                        </td>
                        <td class="w-1/5 p-6 align-middle whitespace-nowrap border-b">
                            <img class="" :src="product.image_1" alt="">
                        </td>
                        <td class="w-1/5 p-6 align-middle whitespace-nowrap border-b"> {{ product.productName }}</td>
                        <td class="w-1/5 p-6 align-middle whitespace-nowrap border-b">{{ product.price }}</td>
                        <td class="w-1/5 p-6 align-middle whitespace-nowrap border-b">
                            <button @click="removeItem(product.productID)" class="border p-4 hover:bg-gray-100 rouded-sm">
                                <i class="fa fa-times" aria-hidden="true"></i>
                            </button>
                        </td>
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
        <div class="w-full my-24" v-if="!showItems">
            <img src="https://mir-s3-cdn-cf.behance.net/projects/404/95974e121862329.Y3JvcCw5MjIsNzIxLDAsMTM5.png"
                class="mx-auto" alt="">
            <div class="flex justify-center">
                <router-link to="/"
                    class="bg-purple-900 mt-12 text-white hover:bg-blue-400 font-bold py-2 px-4 mt-3 rounded items-center">Go back to shop</router-link>
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
            cart: [],
            showItems: true
        };
    },

    components: {
        Header,
        Footer,
        Banner,
    },
    methods: {
        getTotalQuantity() {

            return 0;
        },

        getItemsFromLocalstorage() {
            if (localStorage.getItem('cart') != null) {
                this.showItems = true;
                this.listproducts = localStorage.getItem('cart').split(',');
                this.listproducts.forEach(element => {
                    ProductsService.getByID(element).then(res => {
                        this.products.push(res.data)
                    })
                });
            }
            else {
                this.showItems = !this.showItems;
            }
        },
        formatNumber(value) {
            return (new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value));
        },

        removeItem(productId) {
            const index = this.products.findIndex((element) => element.productID === productId);
            if (index !== -1) {
                this.products.splice(index, 1)
                localStorage.setItem('cart', this.products);
                if (this.products[index] == undefined) {
                    localStorage.removeItem('cart')
                    this.showItems = !this.showItems;
                }
            }
        },
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