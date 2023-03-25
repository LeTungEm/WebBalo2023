<template>
  <div>
    <HeaderPage :changeCartNumber="changeCartNumber" />
    <Banner :bannerName="'categories'" :shopName="'PALDNE'" :menu="'Shop'" />
    <div class="lg:w-11/12 mx-auto">
      <div class="mb-12 mt-20 px-8 lg:px-0">
        <h1 class="text-6xl font-bold mb-4">Shop with us</h1>
        <p>Browse from {{ products.length }} latest items</p>
      </div>
      <div class="lg:flex relative mb-24 px-8">
        <div
          class="hidden lg:block mr-8 w-full lg:w-1/4 border-t-2 border-b-2 bg-white p-4 h-full"
        >
          <div class="">
            <!-- Categories -->
            <button
              @click="isopenCategories = !isopenCategories"
              class="w-full uppercase font-bold mb-5 flex items-center justify-between"
            >
              Categories
              <i
                :class="isopenCategories ? 'fa fa-minus' : 'fa fa-plus'"
                class=""
                aria-hidden="true"
              ></i>
            </button>
            <div class="mb-6 w-full px-4" v-show="isopenCategories">
              <ul>
                <li
                  v-bind:class="{ 'border-b-2': catInput == '' }"
                  @click="catInput = ''"
                  :key="'allProduct'"
                  class="mb-4 cursor-pointer"
                >
                  All
                </li>
                <li
                  v-bind:class="{ 'border-b-2': catInput == category.catId }"
                  v-for="category in categories"
                  @click="catInput = category.catId"
                  :key="category.catId"
                  class="mb-4 cursor-pointer"
                >
                  {{ category.catName }}
                </li>
              </ul>
            </div>

            <!-- Slider -->
            <swiper
              :loop="true"
              :pagination="{
                dynamicBullets: true,
              }"
              :modules="modules"
              class="hidden lg:block"
            >
              <swiper-slide
                v-for="product in products"
                :key="product.productID"
              >
                <ProductItem :productData="product" />
              </swiper-slide>
            </swiper>

            <!-- Availibility -->
            <h3
              class="w-full uppercase font-bold mb-5 mt-10 flex items-center justify-between"
            >
              Availability
            </h3>
            <div class="mb-6 w-full px-4">
              <ul>
                <li class="border-b">
                  <div class="flex justify-between items-center">
                    <div class="my-4">
                      <input type="checkbox" class="mr-2" />
                      In stock
                    </div>
                    <p class="text-gray-400">(120)</p>
                  </div>
                </li>
                <li class="border-b">
                  <div class="flex justify-between items-center">
                    <div class="my-4">
                      <input type="checkbox" class="mr-2" />
                      Out of stock
                    </div>
                    <p class="text-gray-400">(120)</p>
                  </div>
                </li>
              </ul>
            </div>
            <!-- Price -->
            <h3
              class="w-full uppercase font-bold mb-5 mt-10 flex items-center justify-between"
            >
              PRIce
            </h3>
            <p>The highest price is $957$</p>
            <div class="flex justify-between">
              <input
                type="number"
                class="border w-full px-3 py-2 mr-2"
                value="0"
              />
              <input
                type="number"
                class="border w-full px-3 py-2 ml-2"
                value="0"
              />
            </div>
            <!-- Submit -->
            <button class="rounded-sm px-6 py-3 bg-gray-600 text-white mt-6">
              filter
            </button>
          </div>
        </div>
        <div class="flex-1">
          <div class="flex justify-between items-center mb-6">
            <div class="w-1/2">
              <button
                @click="onToggle"
                class="lg:hidden mx-3 mx-5 relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-black before:hover:scale-x-100 before:scale-x-0 before:origin-top-left before:transition before:ease-in-out before:duration-300"
              >
                <i class="fa fa-filter" aria-hidden="true"></i>
                <span class="ml-2">Filters</span>
              </button>
            </div>
            <div class="relative w-full lg:w-1/2">
              <div
                class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
              >
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <input
                type="search"
                v-model="search"
                id="default-search"
                class="block p-4 pl-10 w-full text-sm border"
                placeholder="Search Mockups, Logos..."
                required
              />
            </div>
          </div>
          <div class="flex">
            <input
              type="number"
              v-model="minPrice"
              id="default-search"
              class="block p-4 pl-10 w-full text-sm border"
              placeholder="Min price"
              required
            />
            <input
              type="number"
              v-model="maxPrice"
              id="default-search"
              class="block p-4 pl-10 w-full text-sm border"
              placeholder="Max price"
              required
            />
          </div>
          <h1 class="uppercase text-5xl mb-12">Classical Balos</h1>
          <div
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
          >
            <ProductItem
              v-for="product in orderByProduct()"
              :productData="product"
              :key="product.productID"
              @add-to-cart="addToCart"
            />
          </div>
          <button
            class="flex mx-auto rounded-full border bg-black text-white hover:bg-gray-800 duration-200 px-8 py-3 my-8"
          >
            Load more
          </button>
        </div>
      </div>
      <transition name="fade">
        <div
          class="lg:hidden"
          v-if="isModalVisible"
          v-bind:class="{ hidden: !isModalVisible, block: isModalVisible }"
        >
          <div
            @click="onToggle"
            class="fixed bg-black opacity-70 inset-0 z-10 h-full"
          ></div>
          <div
            class="w-72 h-screen fixed top-0 max-w-lg p-3 my-auto z-20 shadow-lg bg-white overflow-scroll z-50"
          >
            <div class="">
              <div class="flex justify-between mb-3">
                <div class=""></div>
                <div class="">
                  <button
                    @click="onToggle"
                    class="px-3 py-2 border rounded-full"
                  >
                    <i class="fa fa-times" aria-hidden="true"></i>
                  </button>
                </div>
              </div>
              <!-- Categories -->
              <button
                @click="isopenCategories = !isopenCategories"
                class="w-full uppercase font-bold mb-5 flex items-center justify-between"
              >
                Categories
                <i
                  :class="isopenCategories ? 'fa fa-minus' : 'fa fa-plus'"
                  class=""
                  aria-hidden="true"
                ></i>
              </button>
              <div class="mb-6 w-full px-4" v-show="isopenCategories">
                <ul>
                  <li
                    v-bind:class="{ 'border-b-2': catInput == '' }"
                    @click="catInput = ''"
                    :key="'allProduct'"
                    class="mb-4 cursor-pointer"
                  >
                    All
                  </li>
                  <li
                    v-bind:class="{ 'border-b-2': catInput == category.catId }"
                    v-for="category in categories"
                    @click="catInput = category.catId"
                    :key="category.catId"
                    class="mb-4 cursor-pointer"
                  >
                    {{ category.catName }}
                  </li>
                </ul>
              </div>

              <!-- Availibility -->
              <h3
                class="w-full uppercase font-bold mb-5 mt-10 flex items-center justify-between"
              >
                Availability
              </h3>
              <div class="mb-6 w-full px-4">
                <ul>
                  <li class="border-b">
                    <div class="flex justify-between items-center">
                      <div class="my-4">
                        <input type="checkbox" class="mr-2" />
                        In stock
                      </div>
                      <p class="text-gray-400">(120)</p>
                    </div>
                  </li>
                  <li class="border-b">
                    <div class="flex justify-between items-center">
                      <div class="my-4">
                        <input type="checkbox" class="mr-2" />
                        Out of stock
                      </div>
                      <p class="text-gray-400">(120)</p>
                    </div>
                  </li>
                </ul>
              </div>
              <!-- Price -->
              <h3
                class="w-full uppercase font-bold mb-5 mt-10 flex items-center justify-between"
              >
                PRIce
              </h3>
              <p>The highest price is $957$</p>
              <div class="flex justify-between">
                <input
                  type="number"
                  class="border w-full px-3 py-2 mr-2"
                  value="0"
                />
                <input
                  type="number"
                  class="border w-full px-3 py-2 ml-2"
                  value="0"
                />
              </div>

              <!-- Submit -->
              <button class="rounded-sm px-6 py-3 bg-gray-600 text-white mt-6">
                filter
              </button>
            </div>
          </div>
        </div>
      </transition>
    </div>
    <Footer />
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper";
import CategoriesService from "../../../service/CategoriesService.js";
import ProductsService from "../../../service/ProductsService.js";
import HeaderPage from "../Layout/Header.vue";
import Footer from "../Layout/Footer.vue";
import Banner from "../Layout/Banner.vue";
import ProductItem from "./productItem.vue";

export default {
  name: "ShoppingPage",
  data() {
    return {
      categories: [],
      products: [],
      isopenCategories: true,
      sideBar: false,
      search: "",
      catInput: "",
      cart: [],
      changeCartNumber: 0,
      minPrice: "",
      maxPrice: "",
    };
  },
  methods: {
    addToCart(productId) {
      const list = localStorage.getItem("cart");
      const index = this.products.findIndex(
        (element) => element.productID == productId
      );
      if (list !== null) {
        const arr = list.split(",");
        if (this.products[index].amount > 0) {
          arr.push(this.products[index].productID);
          this.products[index].amount--;
          localStorage.setItem("cart", arr);
        }
      } else {
        if (this.products[index].amount > 0) {
          this.cart.push(this.products[index].productID);
          localStorage.setItem("cart", this.cart);
        }
      }
      this.changeCartNumber++;
    },

    onToggle() {
      this.sideBar = !this.sideBar;
    },
    getAll() {
      CategoriesService.getAll().then((res) => {
        this.categories = res.data;
      });

      ProductsService.getAll().then((res) => (this.products = res.data));
    },
    orderByProduct() {
      var data = this.products;
      if (this.search) {
        data = this.products.filter((product) => {
          if (
            product.productName
              .toLowerCase()
              .indexOf(this.search.toLowerCase()) > -1
          ) {
            return this.products;
          }
        });
      }
      if (this.catInput) {
        data = data.filter((product) => {
          if (product.catId == this.catInput) {
            return this.products;
          }
        });
      }
      if (this.minPrice && this.maxPrice) {
        data = data.filter((product) => {
          if (product.price >= this.minPrice && product.price <= this.maxPrice) {
            return this.products;
          }
        });
      }
      return data;
    },
  },

  components: {
    Swiper,
    SwiperSlide,
    HeaderPage,
    Footer,
    Banner,
    ProductItem,
  },
  computed: {
    isModalVisible() {
      return this.sideBar;
    },
  },
  setup() {
    return {
      modules: [Pagination],
    };
  },
  created() {
    this.getAll();
  },
};
</script>

<style></style>