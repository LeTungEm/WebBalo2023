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
                    {{ (aboutId == 0)?"Create":"Update" }}
                </div>
                <!-- Thông báo -->
                <h1 v-if="message" class="text-center bg-blue-300 text-white text-lg py-3">{{message}}</h1>
                <div class="">
                    <div class="flex justify-between items-center">
                        <h1 class="text-3xl font-bold">{{ (aboutId == 0)?"Create":"Update" }}</h1>
                        <div class="flex">
                            <div
                                class="cursor-pointer block border px-8 py-3 shadown-lg rounded-md my-5 uppercase bg-red-500 text-white hover:bg-red-600 mx-4">
                                Discard
                            </div>
                            <div
                                v-on:click="submitForm"
                                class="cursor-pointer border px-8 py-3 shadown-lg rounded-md my-5 uppercase bg-blue-500 text-white hover:bg-blue-600 mx-4">
                                Submit
                            </div>
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
                                <h4 class="font-bold mb-2 text-md">Image</h4>
                                <img v-if="fileName" :src="'https://webbalo2023.000webhostapp.com/images/about/'+fileName" alt="">
                                <label for="file" class="inline-block px-5 py-2 text-white bg-blue-500 rounded font-bold border">Upload Image</label>
                                <input id="file" hidden type="file" v-on:change="onChangeFileUpload" class="mb-5">
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
import Editor from '@tinymce/tinymce-vue'
import AboutService from '@/service/AboutService'
import UploadImageService from '@/service/UploadImageService'

export default {
    name: 'CreateAbout',

    data() {
        return {
            account: false,
            isSidebarVisible: true,
            aboutId: this.$route.params.aboutId,
            description:"",
            title:"",
            file: [],
            fileName: "",
            message: "",
        }
    },
    methods: {
        
        getAbout(){
            AboutService.getByID(this.aboutId).then(res =>{
                if(res.data){
                    this.title = res.data.title;
                    this.description = res.data.description;
                    this.fileName = res.data.image;
                }
            })
        },

        toggleSidebar() {
            this.isSidebarVisible = !this.isSidebarVisible;
        },

        submitForm() {

            // upload file
            if(this.file.size > 0){
                let formData = new FormData();
                formData.append("file", this.file);
                formData.append("action", "upload");
                formData.append("targetFolder", "about");
                formData.append("fileName", this.fileName);

                UploadImageService.uploadImage(formData)
                    .then(function (data) {
                        console.log("upload image: "+data.data);
                    })

                    .catch(function () {
                    console.log("FAILURE!!");
                    });
            }

            if(this.aboutId == 0){
                AboutService.insertAbout(this.title, this.fileName, this.description).then(res =>{
                    if(res.data){
                        this.message = "Đã thêm "+this.title;
                    }
                })
            }else{
                console.log("update");
            }

        },

        onChangeFileUpload(e) {
            this.file = e.target.files[0];
            var number = Math.floor(Math.random()*10000000000);
            this.fileName = number+this.file.name;
        },
    },
    components: {
        Sidebar,
        Header,
        'editor': Editor
    },
    created(){
        this.getAbout();
    }

}
</script>
  