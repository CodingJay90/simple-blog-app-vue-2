import Home from "./components/Home.vue";
import SingleBlog from "./components/SingleBlog.vue";
import Signup from "./components/Signup.vue";

export default [
  { path: "/", component: Home },
  { path: "/blog/:id", component: SingleBlog },
  { path: "/register", component: Signup },
];
