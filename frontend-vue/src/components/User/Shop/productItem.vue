<template>
    <div @click="showProductDetail(productData.productID)" class="mb-6 h-full border-2 rounded-xl">
        <div class="overflow-hidden cursor-pointer rounded-t-xl relative group">
            <div
                class="z-10 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end">
                <div
                    class="transform-gpu w-full p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                    <div class="text-center flex justify-center items-center"><button
                            class="border p-2 mx-2 hover:bg-gray-500 rounded-sm"><i
                                class="fa fa-shopping-cart"
                                aria-hidden="true"></i></button><button
                            class="border p-2 mx-2 hover:bg-gray-500 rounded-sm"><i
                                class="fa fa-search" aria-hidden="true"></i></button><button
                            class="border p-2 mx-2 hover:bg-gray-500 rounded-sm"><i
                                class="fa fa-heart-o" aria-hidden="true"></i></button></div>
                </div>
            </div><img alt=""
                class="object-cover w-full h-72 group-hover:scale-110 transition duration-300 ease-in-out"
                :src="require('@/assets/images/balo/'+productData.image_1)">
        </div>
        <div class="text-center my-6"><router-link to="" class="text-xl uppercase">{{productData.productName}}</router-link>
            <p class="text-red-500 hover:text-red-600 mt-3">{{formatNumber(productData.price)}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'productItem',
    props:{
        productData: Object,
    },
    methods:{
        showProductDetail(productId){
            this.$router.push(`/ShopDetail/${productId}`);
        },
        formatNumber(value){
            return (new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value));
        }
    }
}
</script>

<style>

</style>