<template>
  <div>
    <Header />
    <!-- End Header -->
    <div class="overflow-hidden">
      <div class="pt-12 bg-gray-200 pb-12">
        <div class="flex justify-between items-center">
          <div class="flex-none p-3 text-center">
            <ul class="">
              <li>
                <router-link to=""
                  ><i
                    class="fa fa-facebook-square hover:text-gray-600 my-2"
                    style="font-size: 18px"
                    aria-hidden="true"
                  ></i
                ></router-link>
              </li>
              <li>
                <router-link to=""
                  ><i
                    class="fa fa-linkedin-square hover:text-gray-600 my-2"
                    style="font-size: 18px"
                    aria-hidden="true"
                  ></i
                ></router-link>
              </li>
              <li>
                <router-link to=""
                  ><i
                    class="fa fa-twitter-square hover:text-gray-600 my-2"
                    style="font-size: 18px"
                    aria-hidden="true"
                  ></i
                ></router-link>
              </li>
              <li>
                <router-link to=""
                  ><i
                    class="fa fa-instagram hover:text-gray-600 my-2"
                    style="font-size: 18px"
                    aria-hidden="true"
                  ></i
                ></router-link>
              </li>
            </ul>
          </div>
          <div class="flex-auto">
            <img
              src="https://webbalo2023.000webhostapp.com/images/banner/banner.jpg"
              class="w-full h-1/2 lg:h-screen"
              alt=""
            />
          </div>
        </div>
        <div class="flex items-center mt-6 pl-7">
          <!-- Open Video -->
          <button
            @click="modelToggle = true"
            class="border border-gray-500 p-2 rounded-full relative"
          >
            <img
              class="w-16 h-16 lg:w-24 lg:h-24 rounded-full"
              src="https://webbalo2023.000webhostapp.com/images/balo/balo-herschel-little-america-mid-volume-13-backpack-s-harbour-blue-gridblackamber-yellow-13866-21675221000.jpg"
              alt=""
            />
            <div class="absolute top-1/2 left-1/2 opacity-60">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="z-10 absolute text-white top-1/2 left-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 transform cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="1.5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                />
              </svg>
            </div>
          </button>
          <!-- End Video -->
          <div class="mx-3">
            <h3 class="text-xl lg:text-3xl font-bold mb-2">Watch</h3>
            <p class="text-sm">
              The Eco-making of Bogo <br />
              Bamboo Bikes
            </p>
          </div>
          <div
            @click="modelToggle = false"
            v-bind:class="{ hidden: !modelToggle }"
            class="fixed flex justify-center w-full h-full z-20 top-0 left-0 bg-black bg-opacity-60"
          >
            <div class="my-auto relative w-full md:w-1/2">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/1VZXw8z1WZ0"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div
        class="mb-20"
        data-aos="fade-down"
        data-aos-duration="1500"
        data-aos-delay="500"
      >
        <div
          class="relative overflow-hidden h-auto w-full px-[10vw] lg:px-[16vw] cursor-grab"
        >
          <div class="">
            <h1 class="text-5xl mb-8">Latest New</h1>
          </div>
          <swiper
            :slidesPerView="1"
            :grabCursor="true"
            :scrollbar="true"
            :modules="modules"
            :spaceBetween="30"
            :breakpoints="{
              '640': {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              '768': {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              '1500': {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }"
            class="swiper-container grid grid-cols-1 h-full slider1 swiper-initialized swiper-horizontal swiper-pointer-events"
          >
            <swiper-slide
              v-for="page in pages"
              :key="page.blogId"
              class="cursor-pointer pb-12"
            >
              <BlogItem :blogData="page" />
            </swiper-slide>
          </swiper>
        </div>
      </div>
      <div
        class="relative w-11/12 md:w-8/12 mx-auto"
        data-aos="fade-down"
        data-aos-duration="1500"
        data-aos-delay="500"
      >
        <h1 class="text-center text-5xl font-bold mb-6">BEST SELLERS</h1>
        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          <ProductItem
            :productData="product"
            v-for="product in products"
            :key="product.productID"
          />
        </div>
        <button
          @click="$router.push('/shop')"
          class="flex my-12 border rounded-full px-8 py-3 mx-auto bg-gradient-to-r from-blue-900 to-blue-500 text-white hover:from-blue-500 hover:to-blue-900 duration-1000"
        >
          Shop All Products
        </button>
      </div>
      <div
        class="relative my-32"
        data-aos="flip-right"
        data-aos-duration="2000"
        data-aos-delay="2200"
      >
        <div class="text-center mb-10">
          <h1 class="font-bold text-4xl mb-4">News</h1>
          <p class="text-gray-600 italic text-sm">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using
          </p>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-3 w-11/12 md:w-10/12 mx-auto gap-10">
          <div v-for="page in pages" v-on:load="countPages += 1" :key="page.blogId"
            class="shadow-lg border rounded-t-2xl">
            <div class="h-full" v-if="page.blogId <= (pages[2].blogId)">
              <BlogItem :blogData="page" />
            </div>
          </div>
        </div>
      </div>
      <!-- tailwind Carousel -->
      <div
        class=""
        data-aos="flip-up"
        data-aos-duration="1500"
        data-aos-delay="500"
      >
        <swiper
          class="relative overflow-hidden w-full cursor-grab py-4 bg-gray-300 px-2"
          :autoplay="{
            delay: 1500,
            disableOnInteraction: false,
          }"
          :loop="true"
          :scrollbar="false"
          :modules="modules"
          :slidesPerView="1"
          :spaceBetween="30"
          :breakpoints="{
            '640': {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            '768': {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            '1024': {
              slidesPerView: 5,
              spaceBetween: 40,
            },
          }"
        >
          <swiper-slide
            v-for="imageDT in images"
            :key="imageDT"
            class="flex justify-center my-auto"
            ><img
              :src="'https://webbalo2023.000webhostapp.com/images/clients/'+imageDT"
              class="grayscale"
              style="width: 150px; height: 100px"
          /></swiper-slide>
        </swiper>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Scrollbar } from "swiper";
import PagesService from "../../../service/PagesService.js";
import ProductsController from "../../../service/ProductsService.js";
import Header from "../Layout/Header.vue";
import Footer from "../Layout/Footer.vue";
import ProductItem from "../Shop/productItem.vue";
import BlogItem from "../Blog/BlogItem.vue";

export default {
  name: "HomePage",
  data() {
    return {
      toggle: false,
      pages: [],
      countPages: 0,
      products: [],
      modelToggle: false,
      sortKKey: "productName",
      images: [
        "client-1.png",
        "client-2.png",
        "client-3.png",
        "client-4.png",
        "client-5.png",
        "client-6.png",
        "client-7.png",
        "client-8.png",
        "client-9.png",
        "client-10.png",
      ],
    };
  },
  components: {
    Swiper,
    SwiperSlide,
    Header,
    Footer,
    ProductItem,
    BlogItem,
  },
  setup() {
    return {
      modules: [Autoplay, Scrollbar],
    };
  },
  methods: {
    toggleMenu() {
      this.toggle = !this.toggle;
    },
    getAllPages() {
      PagesService.getAll().then((res) => {
        this.pages = res.data;
      });
    },
    getAllProduct() {
      ProductsController.getAll().then((res) => (this.products = res.data));
    },
  },
  created() {
    this.getAllPages();
    this.getAllProduct();
  },
};
</script>

<style>
.grayscale {
  filter: grayscale(100);
}

.grayscale:hover {
  filter: none;
}

.swiper-scrollbar {
  margin: auto;
  width: 65% !important;
  position: relative !important;
}

.slider1 {
  overflow: initial !important;
}
</style>
