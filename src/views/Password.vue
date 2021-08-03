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
              <label for="oldPass">Old Password</label>
              <input
                type="password"
                v-model="oldPass"
                name="oldPass"
                id="oldPass"
                placeholder="*******"
              />
            </div>
          </div>
        </div>
        <br />
        <div class="row">
          <div class="col">
            <div class="inputForm">
              <label for="oldPass">New Password</label>
              <input
                type="password"
                v-model="newPass"
                name="newPass"
                id="newPass"
                placeholder="*******"
              />
            </div>
          </div>
        </div>
        <br />
        <div class="row">
          <div class="col">
            <div class="inputForm">
              <label for="oldPass">Confirm Password</label>
              <input
                type="password"
                v-model="confirmPass"
                name="confirmPass"
                id="confirmPass"
                placeholder="*******"
              />
            </div>
          </div>
        </div>
        <br />
        <div class="row">
          <div class="col">
            <button @click="update" class="btn btn-secondary">Update</button>
          </div>
        </div>
      </div>
      <div class="col-4"></div>
    </div>
  </div>
</template>

<script>
// import the library
import { createToast } from "mosha-vue-toastify";
// import the styling for the toast
import "mosha-vue-toastify/dist/style.css";
export default {
  data() {
    return {
      oldPass: "",
      newPass: "",
      confirmPass: "",
      active: false,
    };
  },
  methods: {
    async update() {
      if (this.oldPass) {
        if (this.oldPass == 1234) {
          if (this.newPass === this.confirmPass) {
            createToast("Password Has Been Updated!!!", {
              type: "success",
              position: "top-right",
              showIcon: true,
              timeout: 10000,
              transition: "bounce",
            });
          } else {
            createToast("New Passwords are not Matching!!!", {
              type: "danger",
              position: "top-right",
              showIcon: true,
              timeout: 10000,
              transition: "bounce",
            });
          }
        } else {
          createToast("Old Password Is Wrong!!!", {
            type: "danger",
            position: "top-right",
            showIcon: true,
            timeout: 10000,
            transition: "bounce",
          });
        }
      } else {
        createToast("Please Enter Old Password!!!", {
          type: "danger",
          position: "top-right",
          showIcon: true,
          timeout: 10000,
          transition: "bounce",
        });
      }
    },
  },
};
</script>

<style></style>
