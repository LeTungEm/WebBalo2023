<template>
    <div class="">
        <Header/>
        <Banner 
            :bannerName="'categories'" 
            :shopName="'PALDNE'" 
            :menu="'Your Shopping Cart'"/>
        <div class="w-8/12 mx-auto">
            <div class="text-left border-b-2 pb-8">
                <table class="w-full border">
                    <thead class="border-b">
                        <tr class="py-3">
                            <th
                                class="px-6 py-6 text-xs uppercase whitespace-nowrap font-semibold text-left">
                                product</th>
                            <th
                                class="px-6 py-6 text-xs uppercase whitespace-nowrap font-semibold text-left">
                                price</th>
                            <th
                                class="px-6 py-6 text-xs uppercase whitespace-nowrap font-semibold text-left">
                                quantity</th>
                            <th
                                class="px-6 py-6 text-xs uppercase whitespace-nowrap font-semibold text-left">
                                total</th>
                            <th
                                class="px-6 py-6 text-xs uppercase whitespace-nowrap font-semibold text-left">
                            </th>
                        </tr>
                    </thead>
                    <tbody class="text-left">
                        <tr class="border-b" v-for="index in 3" :key="index">
                            <td class="flex items-center p-3">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDxBClJiLKIN7S25p3gK_5aX_HSxGZ_kbnrA&usqp=CAU"
                                    alt="">
                                <div class="ml-5">
                                    <h1>Product</h1>
                                    <p>Type/Category/....</p>
                                </div>
                            </td>
                            <td>$92.00</td>
                            <td>
                                <div class="flex w-full border-b-2">
                                    <button class="px-3 py-3 text-lg" @click="changeCounter('-1')" type="button"
                                        name="button">
                                        -
                                    </button>
                                    <input class="text-center w-full" type="text" name="name" :value="counter">
                                    <button class="px-3 py-3 text-lg" @click="changeCounter('1')" type="button"
                                        name="button">
                                        +
                                    </button>
                                </div>
                            </td>
                            <td>$92.00</td>
                            <td><button class="px-3 py-2 text-gray-300 border border-gray-300"><i class="fa fa-times"
                                        aria-hidden="true"></i></button> </td>
                        </tr>
                    </tbody>
                </table>
                <div class="flex justify-between mt-12">
                    <div class=""></div>
                    <div class="flex">
                        <button class="bg-gray-500 hover:bg-gray-600 uppercase text-white mx-3 px-6 py-3">update
                            cart</button>
                        <button class="bg-gray-500 hover:bg-gray-600 uppercase text-white mx-3 px-6 py-3">continue
                            shopping</button>
                        <button class="bg-gray-500 hover:bg-gray-600 uppercase text-white ml-3 px-6 py-3">clear
                            cart</button>
                    </div>
                </div>
            </div>
            <div class="flex justify-between w-full mt-24">     
                <div class="w-1/2 mr-5">
                    <h1 class="font-bold text-3xl mb-4">Pick a delivery date and Time</h1>
                    <input type="date" class="rounded-md w-2/3 border shadown-lg px-5 py-3 my-2">
                    <input type="text" class="rounded-md w-2/3 border shadown-lg px-5 py-3 my-2">
                    <p class="text-gray-600">Pick delivery date and time as you choose. Delivery Time takes place between 12PM - 4PM MON-FRI AND 8AM-11AM SAT.</p>
                </div>
                <div class="bg-gray-200 p-5 w-1/2 ml-5 text-center">
                    <h1 class="my-4 text-3xl font-bold border-b pb-3 border-black">Cart Totals</h1>
                    <table class="w-full mb-5 border-b border-black pb-5">
                        <tbody class="uppercase">
                            <tr>
                                <td class="px-6 py-6 whitespace text-left">subtotal</td>
                                <td class="px-6 py-6 whitespace-nowrap font-semibold text-right">$92.00</td>
                            </tr>
                            <tr>
                                <td class="px-6 py-6 whitespace text-left">TOTAL</td>
                                <td class="px-6 py-6 whitespace-nowrap font-semibold text-right">$92.00</td>
                            </tr>
                        </tbody>
                    </table>
                    <div>
                        <button class="bg-red-400 hover:bg-red-500 px-8 py-4 text-white">Proceed to Checkout</button>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
</template>

<script>
import Header from '../Layout/Header.vue';
import Footer from '../Layout/Footer.vue';
import Banner from '../Layout/Banner.vue';

export default {
    name: "ShoppingCart",
    data() {
        return {
            counter: 1
        }
    },

    components: {
        Header,
        Footer,
        Banner,
    },

    methods: {
        changeCounter: function (num) {
            this.counter += +num
            console.log(this.counter)
            !isNaN(this.counter) && this.counter > 0 ? this.counter : this.counter = 0;

        }
    },
}
</script>

<style></style>