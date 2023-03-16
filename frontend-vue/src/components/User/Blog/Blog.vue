<template>
    <div class="">
        <Header />
        <Banner 
            :bannerName="'categories'" 
            :shopName="'PALDNE'" 
            :menu="'Blog'"/>
        <div class="text-center">
            <h1 class="font-display font-bold text-5xl mb-6">The Blog</h1>
            <p class="text-gray-400">
                <i>
                    Through the Website, we agree and respect the Customer's search, reference, display of information contained on the Website on the computer screen, the Customer's online shopping at all times with the condition is that such activities of the Customer must be consistent with the Terms and Conditions and in accordance with the laws of Vietnam.
                </i>
            </p>
        </div>
        <div class="mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 pt-12 pb-24">
            <BlogItem class="h-96 " :blogData="page" v-for="page in pages" :key="page.blogId"/>
        </div>
        <Footer/>
    </div>
</template>

<script>
import Header from '../Layout/Header.vue';
import Footer from '../Layout/Footer.vue';
import Banner from '../Layout/Banner.vue';
import BlogItem from './BlogItem.vue';
import PagesService from '@/service/PagesService';

export default {

    name: "BlogNewfeed",
    components: {
        Header,
        Footer,
        Banner,
        BlogItem,
    },
    data(){
        return {
            pages: [],
        };
    },
    methods:{
        getAllPages(){
            PagesService.getAll().then(res => {this.pages = res.data});
        }
    },
    created(){
        this.getAllPages();
    }
}
</script>

<style></style>