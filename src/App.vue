<template>
  <v-app>
    <Navbar></Navbar>
    <v-content class="grey lighten-4">
      <router-view></router-view>
    </v-content>
    <Footer></Footer>
  </v-app>
</template>

<script>

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export default {
  name: 'App',

  components: {
    Footer,
    Navbar

  },

  data: () => ({
    //
  }),
};
</script>
