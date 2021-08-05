<template>
  <spinner
    :active="active"
    :single="false"
    :show-text="false"
    position="fixed"
  />
  <div class="container">
    <div class="row">
      <div class="col">
        <!-- <h1>
          Registration
        </h1> -->
      </div>
    </div>
    <!-- <hr /> -->
    <div class="row">
      <div class="col">
        <div class="inputForm">
          <label for="name">Full Name</label>
          <input
            type="text"
            name="name"
            id="name"
            v-model="name"
            placeholder="Type Full Name Here"
          />
        </div>
      </div>
      <div class="col">
        <div class="inputForm">
          <label for="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            @input="emailCompletion"
            v-model="username"
            placeholder="Type Username Here"
          />
        </div>
      </div>
    </div>
    <br />
    <div class="row">
      <div class="col">
        <div class="inputForm">
          <label for="gender">Select Gender</label>
          <select name="gender" id="gender" v-model="gender">
            <option value="0">----------</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Others">Others</option>
          </select>
        </div>
      </div>
      <div class="col">
        <div class="inputForm">
          <label for="team">Select Team</label>
          <select name="team" id="team" v-model="team">
            <option value="0">----------</option>
            <option value="PLG">PLG</option>
            <option value="Sending">Sending</option>
            <option value="Core">Core</option>
          </select>
        </div>
      </div>
    </div>
    <br />
    <div class="row">
      <div class="col">
        <div class="inputForm">
          <label for="role">Select Role</label>
          <select name="role" id="role" v-model="role">
            <option value="0">----------</option>
            <option value="Employee">Employee</option>
            <option value="HR">HR</option>
            <option value="Admin">Admin</option>
          </select>
        </div>
      </div>
      <div class="col">
        <div class="inputForm">
          <label for="designation">Designation</label>
          <input
            type="text"
            v-model="designation"
            name="designation"
            id="designation"
            placeholder="Type Designation Here"
          />
        </div>
      </div>
    </div>
    <br />
    <div class="row">
      <div class="col">
        <div class="inputForm">
          <label for="email">Email</label>
          <input
            type="email"
            v-model="email"
            name="email"
            id="email"
            placeholder=""
            disabled
          />
        </div>
      </div>
      <div class="col"></div>
    </div>
    <div class="row">
      <div class="col" style="padding: 20px">
        <input type="checkbox" id="active" name="active" v-model="isActive" />
        <label for="active" style="padding-left: 20px;" v-if="isActive">
          This Employee is Active Remove Check To Deactive</label
        ><label for="active" style="padding-left: 20px;" v-else>
          This Employee is Deactivated Check To Active</label
        >
      </div>
    </div>
    <div class="row">
      <button
        style="     position: relative;
    margin: 10px;
    margin-top: 27px;"
        class="btn btn-secondary"
        @click="submit"
      >
        Register
      </button>
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
      empId: "",
      email: "",
      gender: "",
      name: "",
      username: "",
      team: "",
      role: "",
      designation: "",
      isActive: true,
      isShow: false,
      active: false,
    };
  },
  mounted() {
    const id = this.$route.params.id;
    this.empId = id;
    this.getDetail();
  },
  methods: {
    async getDetail() {
      const dt = {
        id: 7,
        name: "ahmad",
        username: "ahmad.raza",
        email: "ahmad.raza@sendoso.com",
        team: "PLG",
        gender: "Male",
        role: "Employee",
        designation: "Data ANA",
        isActive: 1,
      };
      this.email = dt.email;
      this.gender = dt.gender;
      this.name = dt.name;
      this.username = dt.username;
      this.team = dt.team;
      this.role = dt.role;
      this.isActive = dt.isActive == 1 ? true : false;
      this.designation = dt.designation;
    },
    emailCompletion() {
      this.username = this.username.replace("@", "");
      const email = this.username + "@sendoso.com";
      this.email = email;
    },
    submit() {
      this.active = true;
      if (
        this.gender == "" ||
        this.email == "" ||
        this.name == "" ||
        this.username == "" ||
        this.team == "" ||
        this.role == "" ||
        this.designation == ""
      ) {
        createToast("Please Fill Out All Fields!", {
          type: "danger",
          position: "top-right",
          showIcon: true,
          timeout: 10000,
          transition: "bounce",
        });
        this.active = false;
      } else {
        createToast("Employee Saved", {
          type: "success",
          position: "top-right",
          showIcon: true,
          timeout: 10000,
          transition: "bounce",
        });
        this.active = false;
      }
    },
    cllickme() {
      console.log(this.dateVal);
    },
  },
};
</script>

<style></style>
