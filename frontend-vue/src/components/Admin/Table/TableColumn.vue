<template>
    <th scope="col" class="px-6 py-4 font-medium text-gray-900">{{ columnName }}</th>
</template>

<script>
export default {
    name: "tableColumns",
    props: {
        columnName: String,

    }


}
</script>

<style></style>