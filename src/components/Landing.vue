<template>
    <div class="heroBlock">
        <v-carousel cycle hide-delimiters>
            <v-carousel-item
                    v-for="(item,i) in items"
                    :key="i"
                    :src="item.src"
                    reverse-transition="fade-transition"
                    transition="fade-transition"
            >
                <v-row class="title fill-height hidden-xs-only" align="center" justify="center">{{ item.title }}</v-row>
            </v-carousel-item>
        </v-carousel>
    </div>

</template>

<script>
    export default {
        name: "Landing",
        data: () => ({
            items: [
                {
                    src: require("../assets/images/image1.jpeg"),
                    title: "We are creative"
                },
                {
                    src: require("../assets/images/image2.jpeg"),
                    title: "We are hard worker"
                },
                {
                    src: require("../assets/images/image3.jpeg"),
                    title: "We are professional"
                },
                {
                    src: require("../assets/images/image4.jpeg"),
                    title: "We are professional"
                }
            ]
        }),
    }
</script>

<style scoped>
</style>