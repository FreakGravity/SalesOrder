<template>
  <v-app>
    <Navbar/>
    <Sidebar />
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Sidebar from './components/Sidebar.vue';

export default {
    name: "App",
    data: () => ({
    //
    }),
    components: { Navbar, Sidebar }
};
</script>
