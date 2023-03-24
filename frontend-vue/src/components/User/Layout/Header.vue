<template>
  <header class="sticky w-full top-0 z-20 bg-white">
    <div class="flex justify-between p-3 border-b shadow-lg">
      <div class="flex justify-between items-center w-full">
        <router-link to="/">
          <img class="object-fill h-14" src="https://webbalo2023.000webhostapp.com/images/logo/logo.jpg" alt="" />
        </router-link>
        <div class="hidden lg:flex justify-between items-center w-4/5">
          <LinkToPage />
        </div>
      </div>
      <div class="flex items-center">
        <button class="mx-3 flex" @click="onOpenCart">
          <i class="fa fa-shopping-cart" aria-hidden="true"></i>
          <sup>{{ getTotalQuantity() }}</sup>

        </button>
        <button class="lg:hidden border px-2 py-1" @click="onToggle">
          <i class="fa fa-bars" aria-hidden="true"></i>
        </button>
      </div>
    </div>
    <!-- Cart -->
    <transition name="fade">
      <div v-if="isModelCartAvailable">
        <div @click="onOpenCart" class="fixed bg-black opacity-70 inset-0 z-10 h-full"></div>
        <div
          class="w-3/4 lg:w-1/3 h-screen fixed top-0 right-0 max-w-lg p-3 my-auto z-20 shadow-lg bg-white z-50 overflow-auto scrollbar-hide">
          <div class="pb-3">
            <div class="flex justify-between items-center border-b-2 pb-4 mb-5 pt-2">
              <h1 class="font-bold text-2xl text-green-500">Shopping Cart</h1>
              <button @click="onOpenCart">
                <i class="fa fa-times" aria-hidden="true"></i>
              </button>
            </div>
            <CartCPN />
          </div>
        </div>
      </div>
    </transition>
    <!-- Sidebar -->
    <transition name="fade">
      <div class="lg:hidden" v-if="isModalVisible" v-bind:class="{ hidden: !isModalVisible, block: isModalVisible }">
        <div @click="onToggle" class="fixed bg-black opacity-70 inset-0 z-10 h-full"></div>
        <div class="w-64 h-screen fixed top-0 max-w-lg p-3 my-auto z-20 shadow-lg bg-white z-50">
          <div class="flex justify-between">
            <div class=""></div>
            <div class="">
              <button @click="onToggle" class="px-2 py-1 border rounded-full">
                <i class="fa fa-times" aria-hidden="true"></i>
              </button>
            </div>
          </div>
          <div class="my-5">
            <router-link to="/">
              <img class="object-fill" src="https://webbalo2023.000webhostapp.com/images/logo/logo.jpg" alt="" />
            </router-link>
          </div>
          <div @click="isOpen = false">
            <LinkToPage />
          </div>
        </div>
      </div>
    </transition>
  </header>
</template>

<script>
import LinkToPage from './LinkToPage.vue';
import CartCPN from '@/components/User/Cart/Cart.vue';

export default {
  name: "HeaderPage",
  data() {
    return {
      isOpen: false,
      shopDropdown: false,
      isOpenCart: false,
      account: false,
      cart: [],
    };
  },
  props:{
      changeCartNumber: Number,
  },
  watch:{
    changeCartNumber:function(){
      this.getTotalQuantity();
    }
  },
  computed: {
    isModalVisible() {
      return this.isOpen;
    },
    isModelCartAvailable() {
      return this.isOpenCart;
    },
  },
  methods: {
    getTotalQuantity() {
      if (localStorage.getItem('cart') != null) {
        return localStorage.getItem('cart').split(',').length
      }
      return 0;
    },
    updateCart(cart) {
      this.cart = cart;
    },

    handleChange(value) {
      this.value = value;
    },
    onToggle() {
      this.isOpen = !this.isOpen;
    },
    onOpenCart() {
      this.isOpenCart = !this.isOpenCart;
    },
    toggleAccount() {
      this.account = !this.account;
    }
  },
  components: {
    LinkToPage,
    CartCPN,
  },
  created() {
    this.getTotalQuantity()
  }
};
</script>

<style>
/* For Webkit-based browsers (Chrome, Safari and Opera) */
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

/* For IE, Edge and Firefox */
.scrollbar-hide {
  -ms-overflow-style: none;
  /* IE and Edge */
  scrollbar-width: none;
  /* Firefox */
}
</style>
