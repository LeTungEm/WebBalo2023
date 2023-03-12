<template>
    <div class="overflow-hidden m-5">
        <div class="grid grid-cols-3 gap-8">
            <div
                class="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden border">
                <div class="grid place-items-center h-full w-12 text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>
                <input class="peer h-full w-full outline-none text-sm text-gray-700 pr-2" type="text" id="search"
                    placeholder="Search something.." />
            </div>
        </div>
                <router-link to="/create" class="inline-block border px-8 py-3 shadown-lg rounded-md my-5 uppercase hover:bg-gray-100">Create</router-link>

        <div class="rounded-lg shadow-md border overflow-scroll">
            <table class="w-full border-collapse bg-white text-left text-sm text-gray-500">
                <thead class="bg-gray-50">
                    <tr>
                        <columnName v-for="column in columnNames" :key="column" :columnName="column" />
                    </tr>
                </thead>
                
                <TableRow 
                    @removeID="changeRemoveID"
                    @click="$emit('removeID', removeID)"
                    v-for="(value, key) in data" 
                    :id="value.id"
                    :header="value.header" 
                    :title="value.title" 
                    :description="value.description" 
                    :image="value.image"
                    :key="key"/>
            </table>
        </div>
        <OptionNotification @modelToggle="notiStatus = false" :status="notiStatus"/>
    </div>
</template>

<script>
import columnName from './TableColumn.vue'
import TableRow from './TableRow.vue';
import OptionNotification from '../Layout/OptionNotification.vue'


export default {
    name: "ListOfItems",
    components: {
        columnName,
        TableRow,
        OptionNotification,
    },
    props:{
        data: Array,
    },
    data() {
        return {
            columnNames: ["name", "id"],
            removeID: '',
            notiStatus: false,
        }
    },
    methods:{
        changeRemoveID(value, notiStatus){
            this.removeID = value;
            this.notiStatus = notiStatus;
        }
    }
}
</script>

<style></style>
