<template>
    <div class="">
        <Header :quant="getTotalQuantity()" />
        <div>
            <Banner :bannerName="'categories'" :shopName="'PALDNE'" :menu="'About US'" />
            <AboutItem v-for="item in listAbout" :key="item.aboutTitle" :about="item" />
            <router-link class="link" to="/Shop">
                <p
                    class="my-10 w-fit text-center text-xl border px-8 mx-auto cursor-pointer duration-300 bg-red-500 text-white py-3 hover:bg-red-600 uppercase rounded-full">
                    Shop now
                </p>
            </router-link>
            <div class="py-12 bg-slate-100">
                <div class="w-10/12 mx-auto">
                    <h1 class="text-6xl text-red-500 font-bold leading-none mb-7 text-center border-b pb-6">
                        Why Shop With Us
                    </h1>
                    <div class="grid grid-cols-4 gap-12">
                        <div>
                            <img src="https://themewagon.github.io/shionhouse/assets/img/icon/services1.svg" alt="" />
                            <h5 class="text-lg mb-3 mt-4 font-medium">Fast Free Delivery</h5>
                            <p>Free delivery on all orders</p>
                        </div>
                        <div>
                            <img src="https://themewagon.github.io/shionhouse/assets/img/icon/services2.svg" alt="" />
                            <h5 class="text-lg mb-3 mt-4 font-medium">Fast & Free Delivery</h5>
                            <p>Free delivery on all orders</p>
                        </div>
                        <div>
                            <img src="https://themewagon.github.io/shionhouse/assets/img/icon/services3.svg" alt="" />
                            <h5 class="text-lg mb-3 mt-4 font-medium">Fast & Free Delivery</h5>
                            <p>Free delivery on all orders</p>
                        </div>
                        <div>
                            <img src="https://themewagon.github.io/shionhouse/assets/img/icon/services4.svg" alt="" />
                            <h5 class="text-lg mb-3 mt-4 font-medium">Fast & Free Delivery</h5>
                            <p>Free delivery on all orders</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import Header from '../Layout/Header.vue'
import Footer from '../Layout/Footer.vue'
import Banner from '../Layout/Banner.vue';
import AboutItem from './AboutItem.vue';
import AboutService from '../../../service/AboutService';

export default {
    name: "AboutUs",
    data() {
        return {
            listAbout: [],
            cart: [],
        }
    },
    components: {
        Header,
        Footer,
        Banner,
        AboutItem,
    },
    methods: {
        getTotalQuantity() {
            if (localStorage.getItem('cart') != null) {
                return localStorage.getItem('cart').split(',').length
            }
            return 0;
        },
        getAllAboutSS() {
            AboutService.getAll().then(res => { this.listAbout = res.data });
        }
    },
    created() {
        this.getAllAboutSS();
    }

}
</script>

<style></style>