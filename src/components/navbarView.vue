<template>
  <main>
    <nav class="navbar fixed-top p-3 bg-primary">
      <div class="container-fluid">
        <div class="navbar-brand d-flex align-items-center gap-2">
          <img
            :src="icon"
            width="15%"
            height="15%"
            class="rounded-circle"
            alt=""
          />
          <div class="d-flex flex-column">
            <span class="fs-sm-5 fw-bold text-white">{{user?.username}}</span>
            <small class="fs-6 text-secondary"
              >Hi {{user?.username}},
              <span class="d-none d-sm-inline">Good morning!</span></small
            >
          </div>
        </div>
        <button class="ms-auto pe-3 btn btn-transparent border-0">
          <span class="navbar-toggler-icon fs-5 text-white"></span>
        </button>
        <div
          class="d-flex align-center justify-center border border-secondary rounded-circle p-2"
        >
          <BellOutlined class="fs-4 text-white" />
        </div>
      </div>
    </nav>
  </main>
</template>

<script>
import { defineComponent } from "vue";
import { BellOutlined } from "@ant-design/icons-vue";
import avatar from "../assets/avatar.png";

export default defineComponent({
  components: {
    BellOutlined,
  },
  created() {
    this.getCurrentUser();
  },
  data() {
    return {
      icon: avatar,
      user: null,
    };
  },
  methods: {
    getCurrentUser() {
      let User = JSON.parse(localStorage.getItem("user"));
      this.user = User;
    },
  },
});
</script>
<style>
.bg-primary {
  background-color: #7980ff !important;
}
.text-secondary {
  color: #cdd0ff !important;
}
.fs-6 {
  font-size: 14px !important;
}
.form-control {
  box-shadow: none !important;
}
@media (max-width: 620px) {
  .navbar-brand {
    width: 50% !important;
  }
  .navbar-brand > img {
    width: 3.5em;
  }
}
@media (max-width: 460px) {
  .navbar-brand span,
  .navbar-brand small {
    font-size: 15px !important;
  }
}
</style>