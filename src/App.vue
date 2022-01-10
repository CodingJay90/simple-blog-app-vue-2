<template>
  <div>
    <Navbar></Navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>

<style>
body {
  margin: 0;
  font-family: "Nunito SemiBold";
  padding: 0;
  box-sizing: border-box;
}
</style>
