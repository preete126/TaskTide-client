<template>
  <main>
    <navbar-view></navbar-view>
    <find-task></find-task>
    <footer-view></footer-view>
  </main>
</template>
<script>
import NavbarView from "./navbarView.vue";
import FindTask from "./findTask.vue";
import footerView from "./footerView.vue";

export default {
  components: {
    FindTask,
    NavbarView,
    footerView,
  },
};
</script>