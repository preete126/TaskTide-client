<template>
  <div
    class="offcanvas offcanvas-bottom"
    tabindex="-1"
    id="offcanvasBottom"
    aria-labelledby="offcanvasBottomLabel"
    backdrop="true"
  >
    <div class="adjust">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title fw-bold" id="offcanvasBottomLabel">
          Create Project
        </h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div class="offcanvas-body">
        <div>
          <input
            type="search"
            placeholder="Project name"
            class="form-control py-2 px-4 rounded-3"
            style="margin-top:-15px;"
          />
        </div>
        <div class="mt-4">
          <label for="layout"><h5 class="fw-bold">Layout</h5></label>
          <div class="d-flex flex-column flex-sm-row gap-3 mt-2 layout">
            <button
              class="btn btn form-control rounded-3"
            >
              <span class="d-flex align-items-center gap-2 justify-content-center fw-bold"><FileAddOutlined/> <span>List</span></span>
            </button>
            <button
              class="btn btn form-control rounded-3"
            >
              <span>Board</span>
            </button>
          </div>
        </div>
        <div class="mt-4">
          <label for="visibility"><h5 class="fw-bold">Visibility</h5></label>
          <div class="dropdown mt-2">
            <a
              class="btn d-flex align-items-center justify-content-between form-control visibil dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span class="d-flex align-items-center gap-2">
                <UserSwitchOutlined />
                {{ visibility }}
              </span>
            </a>

            <ul class="dropdown-menu form-control h-100">
              <li>
                <a class="dropdown-item" @click.prevent="visibility = 'Private'"
                  >Private</a
                >
              </li>
              <li>
                <a class="dropdown-item" @click.prevent="visibility = 'Public'"
                  >Public</a
                >
              </li>
            </ul>
          </div>
        </div>
        <button class="btn form-control btn-outline-success mt-4"><span class="d-flex align-items-center gap-2 justify-content-center fw-bold small"><FileAddOutlined/> <span>Add Member</span></span></button>
        <button class="btn form-control btn-success mt-4">Create Project</button>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { UserSwitchOutlined, FileAddOutlined } from "@ant-design/icons-vue";
export default defineComponent({
  components: {
    UserSwitchOutlined,
    FileAddOutlined
  },
  data() {
    return {
      visibility: "Private",
    };
  },
});
</script>
<style scoped>
.offcanvas {
  min-height: 100vh !important;
  background-color: rgba(255, 255, 255, 0.07);
  -webkit-backdrop-filter: blur(2px);
  backdrop-filter: blur(2px);
  /* width: 100% !important; */
}
.adjust {
  position: absolute;
  bottom: 0%;
  background-color: white;
  width: 100%;
  padding: 20px;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
}
.form-control {
  height: 50px;
}
.dropdown-menu {
  height: 85px !important;
}
.border-primary, .btn-outline-success{
    border: 1px solid #7980ff !important;
}
.btn-outline-success{
    color: #7980ff !important;
}
.layout > .btn:nth-child(1){
    color: #7980ff !important;
    background-color: #e7e8f7;
    border: 1px solid #7980ff;
}
.btn-outline-success:hover, .btn-success{
    background-color: #7980ff !important;
}
input[type="search"], .visibil, .layout > .btn{
   background-color: #f8fafc; 
}
</style>