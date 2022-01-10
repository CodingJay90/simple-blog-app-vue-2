<template>
  <div>
    <nav>
      <div class="nav-group">
        <div class="nav-item"><router-link to="/" exact>Home</router-link></div>
        <div v-if="authToken" class="nav-item">
          <button @click="active = true">Add new blog</button>
          <button>Logout</button>
        </div>
        <div v-if="!authToken" class="nav-item">
          <router-link to="/register" exact>Register</router-link>
        </div>
      </div>
    </nav>
    <div>
      <Modal v-bind:active="active" v-bind:toggleModal="toggleModal"></Modal>
    </div>
  </div>
</template>

<script>
import Modal from "./Modal.vue";
export default {
  components: {
    Modal,
  },
  data() {
    return {
      authToken: localStorage.getItem("auth_token"),
      active: false,
    };
  },
  methods: {
    toggleModal: function () {
      this.active = false;
    },
  },
};
</script>

<style scoped>
.nav-group {
  list-style-type: none;
  text-align: center;
  margin: 0;
}
.nav-item {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #fff;
  text-decoration: none;
  padding: 12px;
  border-radius: 5px;
}
nav {
  background: crimson;
  padding: 30px 0;
  margin-bottom: 40px;
}
.router-link-active {
  background: rgba(255, 255, 255, 0.8);
  color: #444;
}
</style>
