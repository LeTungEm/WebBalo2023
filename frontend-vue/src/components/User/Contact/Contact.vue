<template>
    <div class="" data-aos="fade-down" data-aos-duration="1000" data-aos-delay='300'>
        <Header />
        <Banner :bannerName="'categories'" :shopName="'PALDNE'" :menu="'Contact US'" />
        <div class="my-24 px-6 mx-auto">
            <!-- Section: Design Block -->
            <div class="mb-32 text-gray-800">
                <div class="flex justify-center">
                    <div class="text-center lg:max-w-3xl md:max-w-xl">
                        <h2 class="text-3xl font-bold mb-12 px-6">Contact us</h2>
                    </div>
                </div>

                <div class="flex flex-wrap">
                    <div class="grow-0 shrink-0 basis-auto w-full lg:w-7/12">
                        <div class="flex flex-wrap">
                            <ContactItem v-for="contact in listContact" :key="contact" :title="contact.contactName"
                                :email="contact.email" />
                        </div>
                    </div>
                    <div class="grow-0 shrink-0 basis-auto mb-12 lg:mb-0 w-full lg:w-5/12 px-3 lg:px-6">
                        <form>
                            <div class="form-group mb-6">
                                <input type="text"
                                    class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-red-600 focus:outline-none"
                                    id="exampleInput7" placeholder="Name" />
                            </div>
                            <div class="form-group mb-6">
                                <input type="email"
                                    class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-red-600 focus:outline-none"
                                    id="exampleInput8" placeholder="Email address" />
                            </div>
                            <div class="form-group mb-6">
                                <textarea
                                    class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-red-600 focus:outline-none"
                                    id="exampleFormControlTextarea13" rows="3" placeholder="Message"></textarea>
                            </div>
                            <div class="form-group form-check text-center mb-6">
                                <input type="checkbox"
                                    class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-red-600 checked:border-red-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
                                    id="exampleCheck87" checked />
                                <label class="form-check-label inline-block text-gray-800" for="exampleCheck87">Send me a
                                    copy of this
                                    message</label>
                            </div>
                            <button type="submit"
                                class="w-full px-6 py-3 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out">
                                Send
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import Header from '../Layout/Header.vue';
import Footer from '../Layout/Footer.vue';
import Banner from '../Layout/Banner.vue';
import ContactItem from './ContactItem.vue';
import ContactService from '@/service/ContactService';

export default {
    name: "ContactUs",
    data() {
        return {
            listContact: [],
            cart: [],
        }
    },
    components: {
        Header,
        Footer,
        Banner,
        ContactItem,
    },
    methods: {
        getAllContact() {
            ContactService.getAll().then(res => {
                this.listContact = res.data;
            })
        }
    },
    created() {
        this.getAllContact();
    }
}
</script>

<style></style>