<template>
    <div class="">
        <Header />
        <Banner :bannerName="'categories'" :shopName="'PALDNE'" :menu="'Product'" />
        <div class="lg:w-8/12 mx-auto my-16">
            <div class="pb-24 border-b">
                <div class="lg:flex justify-between">
                    <div class="mx-8 lg:w-1/2">
                        <swiper :spaceBetween="10" :navigation="true" :thumbs="{ swiper: thumbsSwiper }" class="mb-12">
                            <swiper-slide><img
                                    :src="'https://webbalo2023.000webhostapp.com/images/balo/' + product.image_1" /></swiper-slide>
                            <swiper-slide><img
                                    :src="'https://webbalo2023.000webhostapp.com/images/balo/' + product.image_2" /></swiper-slide>
                            <swiper-slide><img
                                    :src="'https://webbalo2023.000webhostapp.com/images/balo/' + product.image_3" /></swiper-slide>
                            <swiper-slide><img
                                    :src="'https://webbalo2023.000webhostapp.com/images/balo/' + product.image_4" /></swiper-slide>
                        </swiper>
                        <swiper @swiper="setThumbsSwiper" :spaceBetween="10" :slidesPerView="4" :freeMode="true"
                            :watchSlidesVisibility="true" :watchSlidesProgress="true" class="mySwiper">
                            <swiper-slide><img
                                    :src="'https://webbalo2023.000webhostapp.com/images/balo/' + product.image_1" /></swiper-slide>
                            <swiper-slide><img
                                    :src="'https://webbalo2023.000webhostapp.com/images/balo/' + product.image_2" /></swiper-slide>
                            <swiper-slide><img
                                    :src="'https://webbalo2023.000webhostapp.com/images/balo/' + product.image_3" /></swiper-slide>
                            <swiper-slide><img
                                    :src="'https://webbalo2023.000webhostapp.com/images/balo/' + product.image_4" /></swiper-slide>
                        </swiper>
                    </div>
                    <div class="mt-12 lg:mt-0 mx-8 leading-loose">
                        <h1 class="text-3xl font-bold">{{ product.productName }}</h1>
                        <p class="text-red-500 my-3">{{ formatNumber(product.price) }}</p>
                        <p class="mb-3">Availability: <span class="text-red-500">{{ product.amount }}</span></p>
                        <p class="text-gray-600 mb-6 text-justify">{{ product.description }}</p>
                        <div class="flex justify-between mt-12">
                            <div class="flex w-full">
                                <button class="border-b border-t border-l px-3 py-1 border-gray-500 hover:bg-gray-200"
                                    @click="changeCounter('-1')" type="button" name="button">
                                    -
                                </button>
                                <input class="text-center border border-gray-500 w-full" type="text" name="name"
                                    :value="counter">
                                <button class="border-r border-b border-t px-3 py-1 border-gray-500 hover:bg-gray-200"
                                    @click="changeCounter('1')" type="button" name="button">
                                    +
                                </button>
                            </div>
                            <button
                                class="fixed z-10 lg:relative bottom-0 left-0 py-2 z-0 uppercase text-white bg-gray-500 w-full border lg:mx-2 hover:bg-gray-600">Add
                                to
                                cart</button>
                        </div>
                        <button class="w-full py-2 bg-gray-200 hover:bg-gray-300 mt-12">buy it now</button>
                        <p class="text-lg my-6">Guaranteed safe checkout</p>
                        <div class="border-b pb-4 mb-4">
                            <ul class="flex">
                                <li class="mr-2"><a href=""><img
                                            src="https://aglobal.vn/upload/images/amazon_logo_500500.png"
                                            class="w-8 h-8 border rounded-md" alt=""></a></li>
                                <li class="mx-2"><a href=""><img
                                            src="https://upload.wikimedia.org/wikipedia/vi/f/fe/MoMo_Logo.png"
                                            class="w-8 h-8 border rounded-md" alt=""></a></li>
                            </ul>
                        </div>
                        <div>
                            <ul class="flex">
                                <li class="mr-2"><a href=""><img
                                            src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/facebook_circle_color-512.png"
                                            class="w-8 h-8 rounded-full" alt=""></a></li>
                                <li class="mx-2"><a href=""><img
                                            src="https://play-lh.googleusercontent.com/x3XxTcEYG6hYRZwnWAUfMavRfNNBl8OZweUgZDf2jUJ3qjg2p91Y8MudeXumaQLily0"
                                            class="w-8 h-8 rounded-full" alt=""></a></li>
                                <li class="mx-2"><a href=""><img
                                            src="https://i.pinimg.com/originals/61/6a/d8/616ad83e3cf5ef66fbcc43acb2b7499a.png"
                                            class="w-8 h-8 rounded-full" alt=""></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-wrap ">
                <div class="w-full">
                    <ul class="inline-flex pt-2 px-1 w-full border-b justify-center">
                        <li>
                            <a class="text-xs font-bold uppercase px-5 py-3 rounded -mb-px bg-white cursor-pointer block leading-normal"
                                v-on:click="toggleTabs(1)" v-bind:class="{
                                    'border-none': openTab !== 1,
                                    'border-l border-r border-t': openTab === 1,
                                }">
                                Description
                            </a>
                        </li>
                        <li>
                            <a class="text-xs font-bold uppercase px-5 py-3 rounded -mb-px bg-white cursor-pointer block leading-normal"
                                v-on:click="toggleTabs(2)" v-bind:class="{
                                    'border-none': openTab !== 2,
                                    'border-l border-r border-t': openTab === 2,
                                }">
                                Infomation
                            </a>
                        </li>
                    </ul>
                    <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 rounded">
                        <div class="px-4 py-5 flex-auto">
                            <div class="tab-content tab-space">
                                <div v-bind:class="{
                                    hidden: openTab !== 1,
                                    block: openTab === 1,
                                }">
                                    <h1 class="my-8 text-3xl font-bold">Product Description</h1>
                                    <p>{{ product.shortDescription }}</p>
                                </div>
                                <div v-bind:class="{
                                    hidden: openTab !== 2,
                                    block: openTab === 2,
                                }">
                                    <h1 class="my-8 text-3xl font-bold">
                                        Additional Information
                                    </h1>

                                    <p>
                                        Not bringing convenience and satisfaction to customers, we have appropriate policies
                                        when customers need to exchange / return products. We hope that the products
                                        customers have chosen are the most satisfactory products.

                                        Change/return products with specific conditions, please refer to the details below:
                                        <b>1. Cases of exchange/return</b> <br>

                                        1.1 - Goods delivered with technical defects: <br>
                                        1.2 - Delivered goods are broken, wrong content or missing:<br>

                                        The product is only considered a technical defect when it is confirmed by the
                                        Technical Center or the Warranty Center of the product.
                                        <br> <b>2. List of free exchange/return (products do not apply for exchange)</b>
                                        <br>

                                        Promotional products (with a discount of 10% or more compared to the original
                                        price), goods of the same price.
                                        Returned products are not due to technical errors
                                        Accessory
                                        <br> <b> 3. Conditions of exchange</b> <br>
                                        Please read carefully the provisions outlined in our Return Policy to ensure that
                                        the product/goods requested for exchange/return meets all of the following
                                        conditions:

                                        Products to be returned must be ordered online or purchased at the store system
                                        Still in original packaging and undamaged.
                                        Stamps/warranty cards, brand stamps, technical instructions and accompanying gifts
                                        (if any) etc. must be complete and intact.
                                        There is no data in the product with a storage device.
                                        Must not be dirty, scratched, broken, damaged, have a strange smell or show signs of
                                        being washed or used.
                                        Goods can only be exchanged for a similar product (same model), another product
                                        (same brand) of equal or lower value.
                                        You are required to have a purchase receipt when exchanging goods. The company does
                                        not accept the exchange of goods without the above documents.
                                        Parts, details, accessories, user manuals, accompanying gifts (if any), etc. must be
                                        complete and have no signs of use.
                                        Each order can only be exchanged once.
                                        Returned products that do not meet the above conditions will be automatically
                                        returned to the address registered by you in the order.
                                        <br> <b>4. Time to return goods</b> <br>

                                        The time to apply for return and exchange of goods purchased at the store system of
                                        the store system is 3-7 days.
                                        For customers ordering at the website, the return time is 3-7 days from the date you
                                        receive the product.
                                        <br> <b> 5. Cost of returning goods</b> <br>

                                        For products exchanged due to technical defects, customers will be free of charge
                                        for exchange and free delivery to the location indicated on the return request form.
                                        For products exchanged due to the subjective opinion of the customer, you will pay
                                        the 2-way shipping fee.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="a" class="mt-12">
                <div class="mb-24 text-center">
                    <h3 class="text-2xl font-bold text-green-500 mb-4">YOU CAN BE LOVE IT</h3>
                    <h1 class="text-4xl font-bold">RELATED PRODUCTS</h1>
                </div>
                <swiper class="relative grid overflow-hidden w-full cursor-grab px-2" :navigation="true" :pagination="{
                    clickable: true,
                }" :autoplay="{
    delay: 1500,
    disableOnInteraction: false,
}" :loop="true" :scrollbar="false" :modules="modules" :slidesPerView="1" :spaceBetween="30" :breakpoints="{
    '640': {
        slidesPerView: 2,
        spaceBetween: 20,
    },
    '768': {
        slidesPerView: 3,
        spaceBetween: 40,
    },
    '1024': {
        slidesPerView: 4,
        spaceBetween: 30,
    },
}">
                    <swiper-slide @click="getProduct(changeProductID())" class="pb-5 h-full"
                        v-for="productItem in relatedProduct" :key="productItem.productId">
                        <ProductItem :productData="productItem" />
                    </swiper-slide>
                </swiper>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from 'swiper';
import SwiperCore, { Navigation, Thumbs } from 'swiper/core';
import ProductsService from "../../../service/ProductsService";
import Header from '../Layout/Header.vue';
import Footer from '../Layout/Footer.vue';
import Banner from '../Layout/Banner.vue';
import ProductItem from './productItem.vue';

// install Swiper modules
SwiperCore.use([Navigation, Thumbs]);
export default {
    name: "ProductDetail",
    components: {
        Swiper,
        SwiperSlide,
        Header,
        Footer,
        Banner,
        ProductItem,
    },
    computed: {
        productId() {
            return this.$route.params.id;
        },
    },
    data() {
        return {
            openTab: 1,
            thumbsSwiper: null,
            counter: 1,
            product: {},
            relatedProduct: [],
        };
    },
    methods: {
        setOption(option) {
            this.selectedOption = option;
            this.isOptionsExpanded = false;
        },
        toggleTabs: function (tabNumber) {
            this.openTab = tabNumber;
        },
        setThumbsSwiper(swiper) {
            this.thumbsSwiper = swiper;
        },
        changeCounter: function (num) {
            this.counter += +num
            !isNaN(this.counter) && this.counter > 0 ? this.counter : this.counter = 0;

        },
        getRalatedProduct(id) {
            ProductsService.getByCategoryID(id).then(res => { this.relatedProduct = res.data; });
        },
        getProduct(id) {
            ProductsService.getByID(id).then(res => {
                this.product = res.data;
                if (this.relatedProduct.length == 0) {
                    this.getRalatedProduct(this.product.catId);
                }
            }
            );
        },
        formatNumber(value) {
            return (new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value));
        },
        changeProductID() {
            return this.$route.params.id;
        }

    },
    setup() {
        return {
            modules: [Pagination],
        };
    },
    created() {
        this.getProduct(this.productId);
    },

}
</script>

<style></style>