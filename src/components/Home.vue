<template>
  <div>
    <div v-if="isLoading">Loading blogs....</div>
    <div v-if="!isLoading">
      <input
        type="text"
        placeholder="search blogs by title"
        v-model="searchQuery"
      />
      <input
        type="text"
        placeholder="search blogs by tags"
        v-model="tagsQuery"
      />
      <div
        v-for="blog in handleFilter(blogs)"
        class="blogs-container"
        v-bind:key="blog._id"
      >
        <img v-bind:src="blog.image" width="50px" height="50px" alt="" />
        <router-link v-bind:to="'/blog/' + blog._id"
          ><h2>{{ blog.title }}</h2></router-link
        >
        <article>{{ blog.content }}</article>
        <p>created by {{ blog.author }}</p>
        <p>date posted: {{ blog.createdAt }}</p>
        <h4>Tags</h4>
        <div v-for="(tag, index) in blog.tags" v-bind:key="index">
          <span
            ><i>{{ tag }}</i></span
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      blogs: [],
      isLoading: true,
      searchQuery: "",
      tagsQuery: "",
    };
  },
  async created() {
    const res = await axios.get("http://localhost:5000/api/v1/blog");
    this.blogs = res.data;
    this.isLoading = false;
  },
  methods: {
    handleFilter: function (rows) {
      if (this.tagsQuery.length) return this.handleTagsFilter(rows);
      return rows.filter(
        (row) =>
          row.title.toLowerCase().indexOf(this.searchQuery.toLowerCase()) > -1
      );
    },
    handleTagsFilter: function (data) {
      let arr = new Array();
      for (let i = 0; i < data.length; i++) {
        for (let x = 0; x < data[i].tags?.length; x++) {
          if (
            data[i].tags[x]
              .toLowerCase()
              .indexOf(this.tagsQuery.toLowerCase()) > -1
          ) {
            arr.push(data[i]);
          }
        }
      }
      const ids = arr.map((o) => o._id);
      const filtered = arr.filter(
        ({ _id }, index) => !ids.includes(_id, index + 1)
      );
      return filtered;
    },
  },
};
</script>
<style></style>
