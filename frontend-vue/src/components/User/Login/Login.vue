<template>
    <div class="">
        <div class="relative w-full py-8 px-12 bg-yellow-900 z-0">
            <div class="relative z-10 text-center py-0">
                <h1 class="text-white text-center text-4xl mb-4">
                    categories</h1>
                <h1 class="text-white text-center text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold mb-6">
                    Account</h1>
                <p class="text-3xl text-white">
                    <i class="fa fa-home" aria-hidden="true"></i>
                    <span class="mx-3">/</span>
                    <router-link to="/login" class="underline">Login</router-link>
                </p>
            </div>
            <img src="https://images.unsplash.com/photo-1490129375591-2658b3e2ee50?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=2244&amp;q=80"
                class="w-full h-full absolute inset-0 object-cover opacity-70">
        </div>
        <div class="flex items-center justify-center my-12">
            <div class="lg:w-1/2">
                <h1 class="text-center text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold mb-6">
                    Login
                </h1>
                <div class="realtive border p-4 bg-gray-50 py-5">
                    <div class="">
                        <input type="text" class="border px-4 py-2 my-2 w-full bg-white" placeholder="Email*">
                        <div class="flex items-center w-full">
                            <div class="w-full">
                                <input v-if="showPassword" type="text" class="border px-4 py-2 my-2 w-full bg-white"
                                    v-model="password" placeholder="Password*" />
                                <input v-else type="password" class="border px-4 py-2 my-2 w-full bg-white" v-model="password"
                                    placeholder="Password*" />
                            </div>
                            <div class="border py-2 px-3">
                                <button class="" @click="toggleShow">
                                    <span class="icon is-small is-right">
                                        <i class="fas" :class="{
                                            'fa fa-eye': showPassword,
                                            'fa fa-eye-slash': !showPassword
                                        }"></i>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="my-4 flex justify-between items-center">
                        <div class="flex">
                            <input type="checkbox" class="mr-2" name="" id="">
                            <label for="">Remember me</label>
                        </div>
                        <a class='group text-pink-500 transition-all duration-300 ease-in-out' href='#'>
                            <span
                                class='pb-2 bg-left-bottom bg-gradient-to-r from-pink-500 to-pink-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
                                Lost your password?
                            </span>
                        </a>
                    </div>
                    <button class="w-full py-3 bg-black hover:bg-gray-800 duration-500 text-white border my-2 uppercase">sign in </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "LoginForm",
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