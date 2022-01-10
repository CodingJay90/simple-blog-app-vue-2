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
      tagsQuery: "javascript",
    };
  },
  async created() {
    const res = await axios.get("http://localhost:5000/api/v1/blog");
    this.blogs = res.data;
    this.isLoading = false;
    // console.log(this.blogs);
    // const filtered = res.data.map((i) =>
    //   i.tags?.filter((x) => x === this.tagsQuery)
    // );
    // const filtered2 = res.data.some((i) => i.tags?.forEach((x) => x));
    for (let i = 0; i < res.data.length; i++) {
      for (let x = 0; x < res.data[i].tags?.length; x++) {
        // console.log(res.data[i].tags[x]);
        if (res.data[i].tags[x].includes(this.tagsQuery)) {
          console.log(res.data[i]);
        }
      }
    }
    // const filLevel2 = filtered.map((i, index) =>
    //   filtered[index]?.forEach((x) => console.log(x))
    // );
    // console.log(filtered);
    // console.log(filtered2);
  },
  methods: {
    handleFilter: function (rows) {
      return rows.filter(
        (row) => row.title.toLowerCase().indexOf(this.searchQuery) > -1
      );
    },
  },
};
</script>
<style></style>
