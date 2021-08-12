<template>
  <spinner
    :active="active"
    :single="false"
    :show-text="false"
    position="fixed"
  />
  <div class="container">
    <div class="row">
      <div class="col-4"></div>
      <div class="col-4">
        <div class="row">
          <div class="col">
            <div class="inputForm">
              <label for="email">Email</label>
              <input
                type="email"
                v-model="email"
                name="email"
                id="email"
                placeholder="Enter Your Email"
              />
            </div>
          </div>
        </div>
        <br />
        <div class="row">
          <div class="col">
            <div class="inputForm">
              <label for="pass">Password</label>
              <input
                type="password"
                v-model="pass"
                name="pass"
                id="pass"
                placeholder="*******"
              />
            </div>
          </div>
        </div>

        <br />
        <div class="row">
          <div class="col">
            <button @click="login" class="btn btn-secondary">Login</button>
          </div>
        </div>
      </div>
      <div class="col-4"></div>
    </div>
  </div>
</template>

<script>
import { Login } from '@/api.js';
// import the library
import { createToast } from 'mosha-vue-toastify';
// import the styling for the toast
import 'mosha-vue-toastify/dist/style.css';
export default {
  data() {
    return {
      pass: '',
      email: '',
      active: false,
    };
  },
  mounted() {},
  methods: {
    async login() {
      this.active = true;
      if (this.email && this.pass) {
        const res = await Login(this.email, this.pass);
        if (res.data.token !== undefined) {
          sessionStorage.setItem('token', res.data.token);
          this.$router.push('/');
          createToast('Welcome Sendoso LMS', {
            type: 'success',
            position: 'top-right',
            showIcon: true,
            timeout: 10000,
            transition: 'bounce',
          });
          this.active = false;
        } else {
          createToast('Wrong Credentials!!!', {
            type: 'danger',
            position: 'top-right',
            showIcon: true,
            timeout: 10000,
            transition: 'bounce',
          });
          this.active = false;
        }
      } else {
        createToast('Please Enter Inputs!!!', {
          type: 'danger',
          position: 'top-right',
          showIcon: true,
          timeout: 10000,
          transition: 'bounce',
        });
        this.active = false;
      }
    },
  },
};
</script>

<style></style>
