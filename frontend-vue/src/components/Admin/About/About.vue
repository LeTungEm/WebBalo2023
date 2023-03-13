<template>
    <div class="flex">
        <!-- Sidebar -->
        <Sidebar :isSidebarVisible="isSidebarVisible" />
        <div class="w-full h-screen overflow-scroll">
            <!-- Header -->
            <Header :isSidebarVisible="isSidebarVisible" @toggleSidebar="toggleSidebar" />
            <div class="mx-5 mb-12">
                <div @click="this.$router.push('/admin')" class="flex my-5 cursor-pointer">
                    <span aria-hidden="true">
                        <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6">
                            </path>
                        </svg>
                    </span>
                    <span class="mx-2">/</span>
                    Create
                </div>
                <div class="">
                    <div class="flex justify-between items-center">
                        <h1 class="text-3xl font-bold">Create {{ title }}</h1>
                        <div class="flex">
                            <div
                                class="cursor-pointer block border px-8 py-3 shadown-lg rounded-md my-5 uppercase bg-red-500 text-white hover:bg-red-600 mx-4">Discard</div>
                            <button
                                class="cursor-pointer border px-8 py-3 shadown-lg rounded-md my-5 uppercase bg-blue-500 text-white hover:bg-blue-600 mx-4">Create</button>
                        </div>
                    </div>
                    <div class="">
                        <div class="lg:mr-4 bg-white p-4 shadow-lg rounded-md border-2 my-4">
                            <div class="relative z-0 w-full mb-6 group">
                                <h4 class="font-bold mb-2 text-md">Title</h4>
                                <input required type="text" class="w-full rounded-md px-3 py-2 border-2" v-model="title"
                                    placeholder="Add a products...">
                            </div>
                            <div class="relative z-0 w-full mb-6 group">
                                <h4 class="font-bold mb-2 text-md">Description</h4>
                                <editor v-model="description" class="w-full"
                                    api-key="yjaj2vzf11w5iyzfwroudo6smnvj72djze7vsfl7y23n9q1e" :init="{
                                        menubar: false,
                                        plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker permanentpen powerpaste advtable advcode editimage tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss',
                                        toolbar: 'blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent',
                                    }" />
                            </div>
                            <div class="relative z-0 w-full mb-6 group">
                                <h4 class="font-bold mb-2 text-md">Display images 1</h4>
                                <input type="file" class="mb-5">
                                <img :src="img" alt="">
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import Sidebar from '@/components/Admin/Layout/Sidebar.vue'
import Header from '@/components/Admin/Layout/Header.vue'
import AboutService from '@/service/AboutService'
import Editor from '@tinymce/tinymce-vue'

export default {
    name: 'AboutPage',

    data() {
        return {
            account: false,
            isSidebarVisible: true,
            listAbout: [],
            removeID: "",
            description:"",
            title:"",

        }
    },
    methods: {
        toggleSidebar() {
            this.isSidebarVisible = !this.isSidebarVisible;
        },
        loggerT() {
            console.log(this.init);
        },
        getAllAbout() {
            AboutService.getAll().then(res => {
                res.data.map(data => {
                    this.listAbout.push(
                        {
                            id: data.aboutId,
                            header: data.title,
                            title: '',
                            description: data.description.substr(0, 80) + "...",
                            image: (data.image) ? "about/" + data.image : 'default.jpg'
                        }
                    )
                })
            })
        },

        changeRemoveID(value) {
            this.removeID = value;
        }
    },
    components: {
        Sidebar,
        Header,
        'editor': Editor
    },
    created() {
        this.getAllAbout();
    },

}
</script>
  