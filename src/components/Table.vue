<template>
  <div class="row">
    <div class="col-7"></div>
    <div class="col-1">
      <button class="clear" @click="clearme">
        <span class="material-icons-outlined">
          cleaning_services
        </span>
      </button>
    </div>
    <div class="col-4">
      <div class="inputForm">
        <input
          type="text"
          @input="searchFunc"
          v-model="search"
          placeholder="Search Email Here"
        />
      </div>
    </div>
  </div>
  <div class="emp-table-head">
    <div class="emp-table-title">
      <div class="col-2 child-id">
        {{ titles[0] }}
      </div>
      <div class="col-3 child-name">
        {{ titles[1] }}
      </div>
      <div class="col-3 child-email">
        {{ titles[2] }}
      </div>
      <div class="col-2 child-team">
        {{ titles[3] }}
      </div>
      <div class="col-2 child-active">
        {{ titles[4] }}
      </div>
    </div>
  </div>

  <div class="emp-table height">
    <router-link :to="`/employee/edit/${i.id}`" v-for="i in data_" :key="i">
      <div class="emp-table-child">
        <div class="col-2 child-id">
          {{ i.id }}
        </div>
        <div class="col-3 child-name">
          {{ i.name }}
        </div>
        <div class="col-3 child-email">
          {{ i.email }}
        </div>
        <div class="col-2 child-team">
          {{ i.team }}
        </div>
        <div class="col-2 child-active">
          {{ i.isActive ? "Active" : "Deactivated" }}
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "AllEmp",
  data() {
    return {
      search: "",
      titles: ["ID", "Full Name", "Email", "Team", "Status", "Modify"],
      data: [
        {
          id: 1,
          name: "ahmad",
          email: "ahmad.raza@sendoso.com",
          team: "PLG",
          isActive: 1,
        },
        {
          id: 2,
          name: "ahmad",
          email: "asad.ali@sendoso.com",
          team: "PLG",
          isActive: 1,
        },
        {
          id: 3,
          name: "ahmad",
          email: "saad.ali@sendoso.com",
          team: "PLG",
          isActive: 1,
        },
        {
          id: 4,
          name: "ahmad",
          email: "muhammad.hammad@sendoso.com",
          team: "PLG",
          isActive: 1,
        },
        {
          id: 5,
          name: "ahmad",
          email: "nawaz.bop@sendoso.com",
          team: "PLG",
          isActive: 1,
        },
        {
          id: 6,
          name: "ahmad",
          email: "ahmad.raza@sendoso.com",
          team: "PLG",
          isActive: 1,
        },
        {
          id: 7,
          name: "ahmad",
          email: "ahmad.raza@sendoso.com",
          team: "PLG",
          isActive: 1,
        },
        {
          id: 8,
          name: "ahmad",
          email: "ahmad.raza@sendoso.com",
          team: "PLG",
          isActive: 1,
        },
      ],
      data_: [],
    };
  },
  mounted() {
    this.data_ = this.data;
  },
  methods: {
    clearme() {
      this.search = "";
      this.data_ = this.data;
    },
    searchFunc() {
      let arr = [];
      for (var i = 0; i < this.data.length; i++) {
        if (this.data[i].email === this.search) {
          arr.unshift(this.data[i]);
          console.log(arr);
        }
      }
      this.data_ = arr;
    },
  },
};
</script>

<style>
.emp-table {
  position: relative;
  display: grid;
  padding: 10px;
  border: 3px dotted lightgray;
  border-radius: 15px;
  line-height: 3;
  overflow-x: auto;
}
.emp-table-head {
  position: relative;
  display: grid;
  padding: 10px;
  /* border: 3px dotted lightgray; */
  border-radius: 15px;
  line-height: 3;
  overflow-x: auto;
}
.height {
  max-height: 500px;
}
.emp-table-child {
  position: relative;
  display: inline-flex;
  background: #fff;
  width: 100%;
  margin: 5px;
  color: #464646;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 grey;
  transition: 0.4s ease;
  cursor: pointer;
}
.emp-table-child:hover {
  background: #f37021;
  color: #fff;
}
.emp-table-title {
  position: relative;
  display: inline-flex;
  text-align: center;
  font-weight: 800;
}
.clear {
  width: 45px !important;
  height: 45px;
  border: none;
  border-radius: 50%;
  padding: 10px;
  box-shadow: 0 0 5px 0 grey;
  background: #fff;
}
</style>
