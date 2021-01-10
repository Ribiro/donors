<template>
    <v-content>
        <Landing></Landing>
        <Gallery></Gallery>
    </v-content>
</template>

<script>
    import Landing from "@/components/Landing";
    import Gallery from "@/components/Gallery";
    export default {
        name: "Home",
        components: {Landing, Gallery}
    }
</script>

<style scoped>

</style>