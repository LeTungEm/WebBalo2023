<template>
    <div class="">
        <div class="" v-for="(product, index) in products" :key="index">
            <div class="flex justify-between items-center w-full mt-5">
                <div class="flex items-center">
                    <img :src="'https://webbalo.online/data/images/balo/'+product.image_1" class="object-cover w-24 h-24 mr-4" alt="" />
                    <div class="">
                        <p> {{ product.productName }}</p>
                        <p>
                            x <span class="font-bold text-lg">{{ formatNumber(product.price) }}</span>
                        </p>
                    </div>
                </div>
                <button @click="removeItem(product.productID)" class="cursor-pointer hover:text-gray-600"><i
                        class="fa fa-times" aria-hidden="true"></i></button>
            </div>
        </div>
        <img v-if="!showItems"
            src="https://mir-s3-cdn-cf.behance.net/projects/404/95974e121862329.Y3JvcCw5MjIsNzIxLDAsMTM5.png"
            class="mx-auto" alt="">
        <div class="border-b py-5 mb-5"></div>
        <div class="border-b pb-5">
            <div class="flex justify-between font-bold">
                <h1>Total:</h1>
                <p>
                    {{ formatNumber(total) }}
                </p>
            </div>
        </div>

        <div class="mt-5">
            <router-link to="/checkout"
                class="block text-center w-full border my-2 py-3 bg-green-500 hover:bg-green-600 text-white">
                proceed to checkout
            </router-link>
        </div>
    </div>
</template>

<script>
import ProductsService from '@/service/ProductsService';
export default {
    name: "ShoppingCart",
    data() {
        return {
            listproducts: [],
            products: [],
            showItems: true,
            total: 0

        }
    },
    methods: {
        getItemsFromLocalstorage() {
            if (localStorage.getItem('cart') != null) {
                this.showItems = true;
                this.listproducts = localStorage.getItem('cart').split(',');
                this.listproducts.forEach(element => {
                    ProductsService.getByID(element).then(res => {
                        this.products.push(res.data)
                        this.total += parseInt(res.data.price)
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
                this.products.splice(index, 1);
                var arrProductID = [];
                this.products.map(data => {
                    arrProductID.push(data.productID);
                })
                console.log(arrProductID);
                localStorage.setItem('cart', arrProductID);
                if (this.products[index] == undefined) {
                    localStorage.removeItem('cart')
                    this.showItems = !this.showItems;
                }
            }
            this.$emit("deleteFromCart");
        },

    },

    created() {
        this.getItemsFromLocalstorage();
    }
}
</script>

<style></style>