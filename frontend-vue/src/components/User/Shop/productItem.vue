<template>
    <div class="mb-6 h-full border-2 rounded-xl cursor-pointer relative pb-5">
        <div class="overflow-hidden cursor-pointer rounded-t-xl relative group">
            <div
                class="z-10 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end">
                <div
                    class="transform-gpu w-full p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                    <div class="text-center flex justify-center items-center">
                        <button @click="addToCart"
                            class="border p-2 mx-2 hover:opacity-70 rounded-sm"><i class="fa fa-shopping-cart"
                                aria-hidden="true"></i></button>
                        <button @click="showProductDetail(productData.productID)"
                            class="border p-2 mx-2 hover:opacity-70 rounded-sm"><i class="fa fa-search"
                                aria-hidden="true"></i></button>
                    </div>
                </div>
            </div>
            <img alt="" class="object-cover w-full h-72 group-hover:scale-110 transition duration-300 ease-in-out"
                :src="'https://data.webbalo.online/images/balo/' + productData.image_1">
        </div>
        <div class="text-center my-6">
            <div @click="showProductDetail(productData.productID)" class="text-xl uppercase cursor-pointer">{{
                productData.productName }}</div>
        </div>
        <p class="absolute bottom-5 left-0 right-0 text-center text-red-500 hover:text-red-600 mt-3">{{
            formatNumber(productData.price) }}</p>
    </div>
</template>

<script>
export default {
    name: 'productItem',
    props: {
        productData: Object,
    },

    methods: {
        showProductDetail(productId) {
            this.$router.push(`/ShopDetail/${productId}`);
        },

        addToCart() {
            this.$emit('add-to-cart', this.productData.productID);
        },

        formatNumber(value) {
            return (new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value));
        },
    },
}
</script>

<style></style>