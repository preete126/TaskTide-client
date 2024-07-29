<template>
  <form action="" class="p-box container mt-2">
    <h5 class="text-center fw-bold mb-4">Sign In</h5>
    <hr />
    <h6 class="small">Give creadential to sign in your account</h6>
    <div class="mt-3 form-control d-flex rounded-3 outline-primary">
      <button class="btn btn-transparent p-0 d-flex align-items-center fs-5">
        <MailOutlined />
      </button>
      <input
        class="form-control border-0 focus-ring-success py-2 shadow-none"
        type="email"
        placeholder="Type your email"
        aria-label=" example"
        v-model="email"
      />
    </div>
    <small v-if="path == 'email'" class="text-danger">{{ message }}</small>
    <div class="mt-3 form-control d-flex rounded-3 outline-primary">
      <button class="btn btn-transparent p-0 d-flex align-items-center fs-5">
        <LockOutlined />
      </button>
      <input
        class="form-control border-0 focus-ring-success py-2 shadow-none"
        type="password"
        placeholder="Type your password"
        aria-label=" example"
        v-model="password"
      />
    </div>
    <small v-if="path == 'password'" class="text-danger">{{ message }}</small>
    <button
      class="btn form-control bg-primary rounded-3 my-4"
      @click.prevent="loginUser()"
    >
      Sign In
    </button>
    <div class="base d-flex justify-content-between mt-3">
      <hr />
      <h6 class="small"
        >Don’t have account?
        <router-link to="/" class="text-primary text-decoration-none"
          >sign Up</router-link
        >
      </h6>
      <hr />
    </div>
    <div
      v-if="success || (network && !path)"
      :class="{ 'alert-danger': network, 'alert-success ': success }"
      class="alert m-2 d-flex"
      role="alert"
    >
      <span class="fs-6">
        {{ success }}
        {{ network }}
      </span>
      <span
        @click="(success = null), (network = null)"
        class="btn btn-close"
      ></span>
    </div>
  </form>
</template>


<script>
import { defineComponent } from "vue";
import {login} from "../services/api"
import {
  UserOutlined,
  MailOutlined,
  LockOutlined,
} from "@ant-design/icons-vue";
export default defineComponent({
  components: {
    UserOutlined,
    MailOutlined,
    LockOutlined,
  },
  data() {
    return {
      email: null,
      password: null,
      message: null,
      path: null,
      success: null,
      network: null,
    };
  },
  methods: {
    async loginUser() {
      let interval = null;
      try {
        let timer = 0;
        const data = {
          email: this.email,
          password: this.password,
        };

        const response = await login(data)
        let token = response?.data.token;
        let user = response?.data.user;

        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));

        interval = setInterval(() => {
          this.path = null;
          timer++;
          this.success = response?.data.message;
          if (timer == 5) {
            clearInterval(interval);
            this.success = null;
            this.$router.push("/home");
          }
        }, 1000);
        
      } catch (error) {
        let err = error?.response?.data?.errors;
        if (err) {
          err.map((value, index) => {
            this.message = err[index].msg;
            this.path = err[index].path;
            return;
          });
        }
        this.network =
          error?.response?.data.msg ||
          error?.response?.data?.message ||
          error?.message;
        return console.log(this.message, this.path, this.network);
      }
    },
  },
});
</script>




<style scoped>
input[name="check"] {
  width: 1.2em;
  height: 1.2em;
}
input::placeholder, .form-control > button{
  color: #b6bac4 !important;
  font-size: 15px !important;
}
.small,
small,
.form-control,
.form-control button {
  color: #333333;
}
.form-control {
  background-color: #f8fafc;
}
.outline-primary:focus-within {
  outline: 1px solid #7980ff !important;
}
.bg-primary {
  background-color: #7980ff !important;
  color: whitesmoke;
  font-size: 16px;
  padding: 12px;
  font-weight: 600 !important;
}
.alert {
  width: fit-content;
  position: fixed;
  top: 0%;
  right: 0% !important;
}
.alert span {
  font-size: 10px;
  margin-left: 15px;
}
.base hr{
  width: 20%;
}
</style>