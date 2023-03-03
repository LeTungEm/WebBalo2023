<template>
    <div class="">
        <Header/>
        <div>
            <Banner 
            :bannerName="'categories'" 
            :shopName="'SHION HOUSE'" 
            :menu="'About US'"/>
            <div class="md:flex px-4 lg:px-8 xl:px-36 my-24 wrap max-w-max mx-auto">
                <div class="">
                    <img src="https://themewagon.github.io/minishop/images/about.jpg" alt="" />
                </div>
                <div class="px-8 text-md leading-8 my-6">
                    <h1 class="text-2xl pb-6 font-bold">Stablished Sinced 1975</h1>
                    <p class="mb-2">
                        But nothing the copy said could convince her and so it didn’t take
                        long until a few insidious Copy Writers ambushed her, made her drunk
                        with Longe and Parole and dragged her into their agency, where they
                        abused her for their.
                    </p>
                    <p>
                        But nothing the copy said could convince her and so it didn’t take
                        long until a few insidious Copy Writers ambushed her.
                    </p>
                </div>
            </div>
            <div class="md:flex px-4 lg:px-8 xl:px-36 my-24 wrap max-w-max mx-auto">
                <div class="">
                    <img src="https://themewagon.github.io/minishop/images/about.jpg" alt="" />
                </div>
                <div class="px-8 text-md leading-8 my-6">
                    <h1 class="text-2xl pb-6 font-bold">Stablished Sinced 1975</h1>
                    <p class="mb-2">
                        But nothing the copy said could convince her and so it didn’t take
                        long until a few insidious Copy Writers ambushed her, made her drunk
                        with Longe and Parole and dragged her into their agency, where they
                        abused her for their.
                    </p>
                    <p>
                        But nothing the copy said could convince her and so it didn’t take
                        long until a few insidious Copy Writers ambushed her.
                    </p>
                    <router-link class="link" to="/Shop">
                        <p
                            class="mt-12 w-fit text-center text-xl border px-8 mx-auto cursor-pointer duration-300 bg-red-500 text-white py-3 hover:bg-red-600 uppercase rounded-full">
                            Shop now
                        </p>
                    </router-link>
                </div>
            </div>
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
        <Footer/>
    </div>
</template>

<script>
import Header from '../Layout/Header.vue'
import Footer from '../Layout/Footer.vue'
import Banner from '../Layout/Banner.vue';

export default {
    name: "AboutUs",
    components: {
        Header,
        Footer,
        Banner,
    },
}
</script>

<style></style>