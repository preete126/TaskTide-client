<template>
  <form action="" class="p-box container mt-2">
    <h5 class="text-center fw-bold mb-4">Create Account</h5>
    <hr />
    <h6 class="small">Give creadential to sign in your account</h6>
    <div class="mt-3 form-control d-flex rounded-3 outline-primary">
      <button class="btn btn-transparent p-0 d-flex align-items-center fs-5">
        <UserOutlined />
      </button>
      <input
        class="form-control border-0 focus-ring-success py-2 shadow-none"
        type="text"
        placeholder="Type your username"
        aria-label=" example"
        v-model="username"
      />
    </div>
    <small v-if="path == 'username'" class="text-danger">{{ message }}</small>
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
    <div class="py-2 mt-3 d-flex gap-2 align-items-center">
      <input class="" type="checkbox" name="check" aria-label=" example" />
      <span class="small">
        I agree to the company Term of Service and Privacy Policy</span
      >
    </div>
    <button
      class="btn form-control bg-primary rounded-3 my-4"
      @click.prevent="registerNewUser()"
    >
      Sign Up
    </button>
    <div class="base d-flex justify-content-between mt-3">
      <hr/>
      <h6 class="small"
        >Already a member?
        <router-link to="/login" class="text-primary text-decoration-none"
          >sign In</router-link
        >
      </h6>
      <hr/>
    </div>
    <div
      v-if="success || network && !path"
      :class="{ 'alert-danger': network, 'alert-success ': success }"
      class="alert m-2 d-flex "
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
import {newUser} from "../services/api"
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
      username: null,
      password: null,
      message: null,
      path: null,
      success: null,
      network: null,
    };
  },
  methods: {
    async registerNewUser() {
      let interval = null;
      try {
        let timer = 0;
        const data = {
          email: this.email,
          username: this.username,
          password: this.password,
        };

        const response = await newUser(data)

        interval = setInterval(() => {
          this.path = null;
          timer++;
          this.success = response?.data.message;
          console.log(this.success);
          console.log(timer);

          if (timer == 5) {
            clearInterval(interval);
            this.success = null;
            this.$router.push("/login");
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
          error?.message ||
          `Network error, ${error.response?.data?.message}`;
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