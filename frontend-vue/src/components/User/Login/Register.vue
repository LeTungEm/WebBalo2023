<template>
    <div class="">
        <Banner 
            :bannerName="'categories'" 
            :shopName="'SHION HOUSE'" 
            :menu="'Register'"/>
        <div class="flex items-center justify-center my-12">
            <div class="lg:w-1/2">
                <h1 class="text-center text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold mb-6">Register
                </h1>
                <div class="realtive border p-4 bg-gray-50 py-5">
                    <div class="">
                        <div class="flex">
                            <input type="text" class="border px-4 py-2 my-2 w-full mr-2 bg-white" placeholder="First name*">
                            <input type="text" class="border px-4 py-2 my-2 w-full ml-2 bg-white" placeholder="Last name*">
                        </div>
                        <input type="text" class="border px-4 py-2 my-2 w-full" placeholder="Email*">
                        <div class="flex items-center w-full">
                            <div class="w-full">
                                <input v-if="showPassword" type="text" class="border px-4 py-2 my-2 w-full bg-white"
                                    v-model="password" placeholder="Password*" />
                                <input v-else type="password" class="border px-4 py-2 my-2 w-full bg-white" v-model="password"
                                    placeholder="Password*" />
                            </div>
                            <div class="border py-2 px-3">
                                <button class="button" @click="toggleShow">
                                    <span class="icon is-small is-right">
                                        <i class="fas" :class="{
                                            'fa fa-eye': showPassword,
                                            'fa fa-eye-slash': !showPassword
                                        }"></i>
                                    </span>
                                </button>
                            </div>
                        </div>
                        <div class="flex items-center w-full">
                            <div class="w-full">
                                <input v-if="showRePassword" type="text" class="border px-4 py-2 my-2 w-full bg-white"
                                    v-model="Repeat_password" placeholder="Repeat your password*" />
                                <input v-else type="password" class="border px-4 py-2 my-2 w-full bg-white" v-model="Repeat_password"
                                    placeholder="Repeat your password*" />
                            </div>
                            <div class="border py-2 px-3">
                                <button class="button" @click="toggleShowRepwd">
                                    <span class="icon is-small is-right">
                                        <i class="fas" :class="{
                                            'fa fa-eye': showRePassword,
                                            'fa fa-eye-slash': !showRePassword
                                        }"></i>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <button class="w-full py-3  bg-black hover:bg-gray-800 duration-500 text-white  border my-2 uppercase">create an account</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Banner from '../Layout/Banner.vue';

export default {
    name: "LoginForm",
    components:{
        Banner,
    },
    data() {
        return {
            showPassword: false,
            password: null,
            Repeat_password: null,
            showRePassword: false,

        };
    },
    computed: {
        buttonLabel() {
            return this.showPassword ? "Hide" : "Show";
        }
    },
    methods: {
        toggleShow() {
            this.showPassword = !this.showPassword;
        },
        toggleShowRepwd() {
            this.showRePassword = !this.showRePassword;
        },
    }
}
</script>

<style></style>