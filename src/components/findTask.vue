<template>
  <section class="bg-primary">
    <main class="p-box">
      <form class="d-flex form-control bg-transparent rounded-4" role="search">
        <button class="btn btn-transparent text-white fs-5">
          <SearchOutlined />
        </button>
        <input
          class="form-control bg-transparent border-0 text-secondary"
          aria-label="Search"
          placeholder="Find your task"
          type="search"
          name=""
          id=""
        />
      </form>
    </main>
    <main class="p-box bg-secondary rounded-top-5 pb-5 mb-5">
      <div class="d-flex align-items-center justify-content-between">
        <h5 class="fw-bold">Resent Projects</h5>
        <h6 class="fw-bold">View All</h6>
      </div>
      <div class="projectsImg d-flex flex-wrap flex-md-nowrap gap-4 my-4 ">
        <div role="button">
          <div class="d-flex justify-content-between align-items-center">
            <p class="d-flex gap-2 align-items-center">
              <CheckCircleFilled
                class="p-2 align-self-center rounded-circle bg-success"
              />
              <small class="fw-bold">Gaming Platform Web & Mobile App</small>
            </p>
            <p>
              <EllipsisOutlined
                class="p-1 align-self-center rounded-2 border"
              />
            </p>
          </div>
          <div class="d-flex gap-2">
            <button
              class="px-3 py-1 roleBtn btn bg-secondary rounded-pill d-flex align-items-center gap-2"
            >
              <CalendarOutlined />
              <span>July 27, 2024</span>
            </button>
            <button
              class="px-3 py-1 roleBtn btn bg-secondary rounded-pill d-flex align-items-center gap-2"
            >
              <MessageOutlined />
              <span>16</span>
            </button>
            <button
              class="px-3 py-1 roleBtn btn bg-secondary rounded-pill d-flex align-items-center gap-2"
            >
              <LinkOutlined />
              <span>09</span>
            </button>
          </div>
          <div class="img1"></div>
          <div class="d-flex gap-4 align-items-center">
            <div class="avts d-flex align-items-center mt-3">
              <img :src="avt3" alt="" />
              <img :src="avt4" alt="" />
              <div
                class="d-flex align-items-center justify-content-center bg-success text-white small"
              >
                3+
              </div>
            </div>
          </div>
        </div>
        <div role="button">
          <div class="d-flex justify-content-between align-items-center">
            <p class="d-flex gap-2 align-items-center">
              <CheckCircleFilled
                class="p-2 align-self-center rounded-circle bg-warning"
              />
              <small class="fw-bold">Furniture Web & Mobile App</small>
            </p>
            <p>
              <EllipsisOutlined
                class="p-1 align-self-center rounded-2 border"
              />
            </p>
          </div>
          <div class="d-flex gap-2">
            <button
              class="px-3 py-1 roleBtn btn bg-secondary rounded-pill d-flex align-items-center gap-2"
            >
              <CalendarOutlined />
              <span>July 27, 2024</span>
            </button>
            <button
              class="px-3 py-1 roleBtn btn bg-secondary rounded-pill d-flex align-items-center gap-2"
            >
              <MessageOutlined />
              <span>16</span>
            </button>
            <button
              class="px-3 py-1 roleBtn btn bg-secondary rounded-pill d-flex align-items-center gap-2"
            >
              <LinkOutlined />
              <span>09</span>
            </button>
          </div>
          <div class="img2"></div>
          <div class="d-flex gap-4 align-items-center">
            <div class="avts d-flex align-items-center mt-3">
              <img :src="avt3" alt="" />
              <img :src="avt4" alt="" />
              <div
                class="d-flex align-items-center justify-content-center bg-warning text-white small"
              >
                3+
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="d-flex align-items-center justify-content-between mt-4">
        <h5 class="fw-bold">Today Tasks</h5>
        <h6 class="fw-bold">View All</h6>
      </div>

      <div class="bg-white p-3 rounded-3 d-flex align-items-center gap-3">
        <div class="proIcon text-primary fs-4 rounded-2">
          <ProjectOutlined />
        </div>
        <div class="d-flex flex-column">
          <h6 class="fw-bold text-dark">Fintech Project</h6>
          <div class="d-flex gap-3 align-items-center">
            <div class="avts d-flex align-items-center">
              <img :src="avt3" alt="" />
              <img :src="avt4" alt="" />
              <div
                class="d-flex align-items-center justify-content-center bg-warning text-white small"
              >
                3+
              </div>
            </div>
            <button
              class="px-3 py-1 roleBtn btn bg-secondary rounded-pill d-flex align-items-center gap-2"
            >
              <MessageOutlined />
              <span>16</span>
            </button>
          </div>
        </div>
      </div>
    </main>
  </section>
</template>

<script>
import { defineComponent } from "vue";
import {
  SearchOutlined,
  CheckCircleFilled,
  EllipsisOutlined,
  CalendarOutlined,
  MessageOutlined,
  LinkOutlined,
  ProjectOutlined,
} from "@ant-design/icons-vue";
import avt3 from "../assets/avt3.jpg";
import avt4 from "../assets/avt4.jpg";

export default defineComponent({
  components: {
    SearchOutlined,
    CheckCircleFilled,
    EllipsisOutlined,
    CalendarOutlined,
    MessageOutlined,
    LinkOutlined,
    ProjectOutlined,
  },
  created(){
    this.getToken()
  },
  data() {
    return {
      avt3: avt3,
      avt4: avt4,
    };
  },
  methods:{
    getToken(){
      const token = localStorage.getItem("token")
      if (token == null) {
        this.$router.push("/login")
      }
    }
  }
});
</script>

<style>
.p-box {
  padding: 1.5em 8em ;
}
.bg-secondary {
  background-color: whitesmoke !important;
}
body {
  font-family: Arial, Helvetica, sans-serif;
}
.bg-success {
  background-color: #6aceca !important;
}
.bg-warning {
  background-color: #f1c28d !important;
}
.text-primary {
  color: #7980ff !important;
}

@media(max-width:1030px){
    .p-box{
        padding: 1.5em;
    }
}
</style>
<style scoped>
h6 {
  color: #838895;
  font-size: 0.9em;
}
.img1,
.img2 {
  height: 130px;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  margin-top: 15px;
  border-radius: 10px;
}
.img1 {
  background-image: url("../assets/img1.jpg");
}
.img2 {
  background-image: url("../assets/img2.jpg");
}
.projectsImg > div {
  background-color: white;
  border-radius: 15px;
  height: 300px;
  padding: 20px 15px;
  width: 100%;
}
.roleBtn {
  color: #cacdd4;
  font-size: 0.7em;
  font-weight: 600;
}
input::placeholder {
  color: #cdd0ff !important;
}
.avts > img,
.avts > div {
  width: 1.5em;
  height: 1.5em;
  border-radius: 100%;
}
.avts > img:nth-child(2),
.avts > div {
  margin-left: -10px;
}
section {
  position: absolute;
  top: 15%;
  width: 100%;
}
.proIcon {
  background-color: #ebecff;
  height: 2.2em;
  width: 2.2em;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>