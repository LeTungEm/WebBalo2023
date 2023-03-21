<template>
    <footer data-aos="fade-down" data-aos-duration="1500" data-aos-delay='1500'>
        <div class="bg-gray-800 text-white p-5">
            <div class="lg:w-10/12 mx-auto">
                <div class="lg:flex w-full justify-between pt-5">
                    <div class="pt-6 mr-5">
                        <img src="https://webbalo2023.000webhostapp.com/images/logo/logo.jpg"
                            class="w-2/3 mx-auto" alt="">
                        <p class="pt-4 pb-3 text-left">SIGN UP FOR NEWSLETTER</p>
                        <div class="w-full relative">
                            <div class="w-full">
                                <input type="email" class="w-full p-3 text-gray-900 rounded-full focus:outline-none"
                                    placeholder="name@gmail.com">
                            </div>
                            <div>
                                <button type="submit"
                                    class="absolute bg-gray-500 px-4 bottom-0 right-0 h-12 text-white rounded-full">
                                    <i class="fa fa-search" aria-hidden="true"></i>
                                </button>
                            </div>
                        </div>

                    </div>
                    <div class="lg:flex">
                        <div class="mt-5">
                            <button class="relative w-full border-b-2 border-white pb-4 focus:outline-none">
                                <div class="flex justify-between items-center w-full">
                                    <p class="text-2xl">SHOP BY</p>
                                    <span><i class="fa fa-plus lg:hidden" aria-hidden="true"></i></span>
                                </div>
                            </button>
                            <div class="block top-full min-w-full w-max">
                                <ul class="text-left">
                                    <li class="py-2"><router-link to="/shop"
                                            class="whitespace-nowrap hover:text-gray-300">New In</router-link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="lg:px-20 pt-5">
                            <button class="relative w-full border-b-2 border-white pb-4 focus:outline-none">
                                <div class="flex justify-between items-center w-full">
                                    <p class="text-2xl">INFORMATION</p>
                                    <span><i class="fa fa-plus lg:hidden" aria-hidden="true"></i></span>
                                </div>
                            </button>
                            <div class="top-full min-w-full w-max">
                                <ul class="text-left">
                                    <li class="py-2"><router-link to="about"
                                            class="whitespace-nowrap hover:text-gray-300">About Us</router-link>
                                    </li>
                                    <li class="py-2"><router-link to="blog"
                                            class="whitespace-nowrap hover:text-gray-300">Blog For News</router-link>
                                    </li>
                                    <li class="py-2"><router-link to="shop"
                                            class="whitespace-nowrap hover:text-gray-300">Shop Now</router-link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="pt-5">
                            <button class="relative w-full border-b-2 border-white pb-4 focus:outline-none">
                                <div class="flex justify-between w-full">
                                    <p class="text-2xl whitespace-nowrap">CUSTOMER SERVICE</p>
                                    <span><i class="fa fa-plus lg:hidden" aria-hidden="true"></i></span>
                                </div>
                            </button>
                            <div class="top-full min-w-full w-max">
                                <ul>
                                    <li class="py-2"><router-link to="contact"
                                            class="whitespace-nowrap hover:text-gray-300">Contact us</router-link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                    <div class="hidden lg:block pt-5">
                        <button class="px-3 py-2 rounded-full bg-white text-black cursor-pointer" @click="toTop">
                            <i class="fa fa-arrow-up" aria-hidden="true"></i>
                        </button>
                    </div>
                </div>
                <div class="flex justify-between py-2 my-3 border-b-2 border-t-2">
                    <nav class="relative">
                        <ul class="flex">
                            <li class="p-2"><a href="" class="hover:text-gray-300"><i class="fa fa-facebook-official"
                                        aria-hidden="true"></i></a>
                            </li>
                            <li class="p-2"><a href="" class="hover:text-gray-300"><i class="fa fa-linkedin-square"
                                        aria-hidden="true"></i></a>
                            </li>
                            <li class="p-2"><a href="" class="hover:text-gray-300"><i class="fa fa-twitter-square"
                                        aria-hidden="true"></i></a>
                            </li>
                            <li class="p-2"><a href="" class="hover:text-gray-300"><i class="fa fa-instagram"
                                        aria-hidden="true"></i></a>
                            </li>
                        </ul>
                    </nav>
                    <div class="flex lg:justify-between items-center relative">
                        <a href="" class="px-1"><img
                                src="https://webbalo2023.000webhostapp.com/images/payments/visaIcon.png" alt=""></a>
                        <a href="" class="px-1"><img src="https://webbalo2023.000webhostapp.com/images/payments/atmIcon.png"
                                alt=""></a>
                        <a href="" class="px-1"><img
                                src="https://webbalo2023.000webhostapp.com/images/payments/paypalIcon.png" alt=""></a>
                        <a href="" class="px-1"><img
                                src="https://webbalo2023.000webhostapp.com/images/payments/visaIcon.png" alt=""></a>
                    </div>
                </div>
                <div class="flex pt-5">
                    <img src="https://webbalo2023.000webhostapp.com/images/vietnamIcon.png" alt="">
                    <p class="pl-2">Vietnam</p>
                </div>
            </div>

        </div>
    </footer>
</template>

<script>
export default {
    name: "FooterPage",
    data() {
        return {
            categories: []
        }
    },
    methods: {
        toTop() {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }
    },
}
</script>

<style></style>