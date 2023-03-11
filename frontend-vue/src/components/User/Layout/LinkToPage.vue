<template>
    <nav>
        <ul class="uppercase lg:flex">
            <li
                class="lg:mx-5 my-4 lg:my-0 relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-red-500 before:hover:scale-x-100 before:scale-x-0 before:origin-top-left before:transition before:ease-in-out before:duration-300">
                <router-link to="/">Home</router-link>
            </li>
            <li
                class="lg:mx-5 my-4 lg:my-0 relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-red-500 before:hover:scale-x-100 before:scale-x-0 before:origin-top-left before:transition before:ease-in-out before:duration-300">
                <router-link to="/shop">Shop</router-link>
            </li>
            <li
                class="lg:mx-5 my-4 lg:my-0 relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-red-500 before:hover:scale-x-100 before:scale-x-0 before:origin-top-left before:transition before:ease-in-out before:duration-300">
                <router-link to="/about">About</router-link>
            </li>
            <li
                class="lg:mx-5 my-4 lg:my-0 relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-red-500 before:hover:scale-x-100 before:scale-x-0 before:origin-top-left before:transition before:ease-in-out before:duration-300">
                <router-link to="/blog">Blog</router-link>
            </li>
            <li
                class="lg:mx-5 my-4 lg:my-0 relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-red-500 before:hover:scale-x-100 before:scale-x-0 before:origin-top-left before:transition before:ease-in-out before:duration-300">
                <router-link to="/contact">Contact</router-link>
            </li>
        </ul>
    </nav>
    <div class="lg:flex items-center" v-if="hidden">
        <div class="flex mr-12 lg:text-sm uppercase lg:">
            <router-link to="/login"
                class="mx-3 mx-5 relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-red-500 before:hover:scale-x-100 before:scale-x-0 before:origin-top-left before:transition before:ease-in-out before:duration-300">Login</router-link>
            <span>/</span>
            <router-link to="/register"
                class="mx-3 mx-5 relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-red-500 before:hover:scale-x-100 before:scale-x-0 before:origin-top-left before:transition before:ease-in-out before:duration-300">Register</router-link>
        </div>
    </div>

    <!-- <p v-show="hideLogout">Hello{{ userInfo.first_name }}</p> -->
    <button @click="logout" v-if="!hidden"
        class="mx-3 mx-5 relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-red-500 before:hover:scale-x-100 before:scale-x-0 before:origin-top-left before:transition before:ease-in-out before:duration-300">
        Logout
    </button>
</template>

<script>
import AccountService from '@/service/AccountService';

export default {
    name: "LinkToPage",
    data() {
        return {
            hidden: true,
            userInfo: []
        }
    },
    methods: {
        logout() {
<<<<<<< Updated upstream
            sessionStorage.removeItem('accountId');
=======
            localStorage.removeItem('accountId');
            this.$cookies.set("userId","","Sat, 13 Mar 2017 12:25:57 GMT");
            this.$cookies.set("roleId","","Sat, 13 Mar 2017 12:25:57 GMT");
>>>>>>> Stashed changes
            // Điều hướng đến trang đăng nhập
            this.hidden = true
            this.$router.push('/login');
        },
        getAllInfoByAccountId() {

            AccountService.getByID(sessionStorage.getItem('accountId')).then(
                (res) => {
                    this.userInfo = res.data;
                }
            )
        },
        getItemFromStorage() {
            if (this.$cookies.get("accountId") != null) {
                this.hidden = false
            } else {
                this.hideItems();
            }
        },
        hideItems() {
            if (sessionStorage.getItem('accountId') != undefined) {
                this.hidden = false
            } else {
                this.hidden = true
            }
        }
    },
    created() {
        this.getItemFromStorage()
        this.getAllInfoByAccountId()
    },
}
</script>

<style></style>