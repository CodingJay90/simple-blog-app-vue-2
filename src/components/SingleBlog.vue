<template>
  <div>
    <div v-if="pageLoadError">
      <error-component
        message="Could not load blog content"
        subMessage="Please make sure pageid is correct and try again"
      ></error-component>
    </div>
    <div v-if="!pageLoadError">
      <div>
        <img
          v-bind:src="blog.image"
          width="150px"
          height="150px"
          alt="blog.title"
        />
        <h2>{{ blog.title }}</h2>
        <article>{{ blog.content }}</article>
        <p>created by {{ blog.author }}</p>
        <p>date posted: {{ blog.createdAt }}</p>
      </div>
      <h2>Comments</h2>
      <div
        v-for="comment in blog.comments"
        class="blogs-container"
        v-bind:key="comment.id"
      >
        <article>{{ comment.body }}</article>
        <p>{{ comment.name }}</p>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import ErrorComponent from "./ErrorComponent.vue";

export default {
  components: {
    "error-component": ErrorComponent,
  },
  data() {
    return {
      pageId: this.$route.params.id,
      blog: {},
      pageLoadError: false,
      imageLink: "",
    };
  },
  async created() {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/v1/blog/${this.pageId}`
      );
      console.log(res);
      this.pageLoadError = false;
      this.blog = res.data;
    } catch (error) {
      console.log(error.response.data);
      this.pageLoadError = true;
    }
  },
};
</script>
<style></style>
