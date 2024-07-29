<template>
  <ul class="d-flex justify-content-around fixed-bottom bg-white mb-0 p-3">
    <li class="">
      <AppstoreOutlined />
    </li>
    <li class="">
      <ProjectOutlined />
    </li>
    <li class="" role="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom">
      <PlusOutlined />
    </li>
    <create-project></create-project>
    <li class="">
      <MessageOutlined />
    </li>
    <li class="">
      <UserOutlined />
    </li>
  </ul>
</template>
<script>
import { defineComponent } from "vue";
import {
  AppstoreOutlined,
  ProjectOutlined,
  PlusOutlined,
  MessageOutlined,
  UserOutlined,
} from "@ant-design/icons-vue";
import CreateProject from "./createProject.vue";
export default defineComponent({
  components: {
    AppstoreOutlined,
    ProjectOutlined,
    PlusOutlined,
    MessageOutlined,
    UserOutlined,
    CreateProject,
  },
});
</script>

<style scoped>
li{
    list-style: none;
    font-size: 1.4em;
    color: #838895;
}
li:nth-child(3){
   padding: .7em;
    border-radius: 100%;
    background-color: #7980ff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2em;
    position: relative;
   /* margin-top: -20em; */
   margin-top: -1.5em;
    color: white;
}
</style>