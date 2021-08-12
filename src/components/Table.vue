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
  <br /><br />
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="emp-card-parent">
          <router-link
            :to="`/admin/employee/edit/${i.id}`"
            v-for="i in data_"
            :key="i"
          >
            <div class="emp-card">
              <div
                class="emp-name-letter"
                :style="` background: ${colorPicker()}`"
              >
                {{ letters(i.name) }}
              </div>
              <div class="emp-info">
                <div class="text-info bold">
                  {{ i.name }}
                </div>
                <div class="text-info dots">
                  {{ i.email }}
                </div>
                <div class="text-info">
                  {{ i.team }}
                </div>
                <div class="text-info">
                  {{ i.isActive == 1 ? 'Active' : 'Deactivateds' }}
                </div>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AllEmp',
  data() {
    return {
      search: '',
      titles: ['ID', 'Full Name', 'Email', 'Team', 'Status', 'Modify'],
      data: [
        {
          id: 1,
          name: 'ahmad',
          email: 'ahmad.raza@sendoso.com',
          team: 'PLG',
          isActive: 1,
        },
        {
          id: 2,
          name: 'ahmad',
          email: 'asad.ali@sendoso.com',
          team: 'PLG',
          isActive: 1,
        },
        {
          id: 3,
          name: 'ahmad',
          email: 'saad.ali@sendoso.com',
          team: 'PLG',
          isActive: 1,
        },
        {
          id: 4,
          name: 'ahmad',
          email: 'muhammad.hammad@sendoso.com',
          team: 'PLG',
          isActive: 1,
        },
        {
          id: 5,
          name: 'ahmad',
          email: 'nawaz.bop@sendoso.com',
          team: 'PLG',
          isActive: 1,
        },
        {
          id: 6,
          name: 'ahmad',
          email: 'ahmad.raza@sendoso.com',
          team: 'PLG',
          isActive: 1,
        },
        {
          id: 7,
          name: 'ahmad',
          email: 'ahmad.raza@sendoso.com',
          team: 'PLG',
          isActive: 1,
        },
        {
          id: 8,
          name: 'ahmad Raza',
          email: 'ahmad.raza@sendoso.com',
          team: 'PLG',
          isActive: 1,
        },
      ],
      data_: [],
      cols: [
        'linear-gradient(90deg,rgba(63, 94, 251, 1) 0%,rgba(252, 70, 107, 1) 90%)',
        'linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 90%)',
        'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,79,121,1) 35%, rgba(0,212,255,1) 90%)',
        'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 90%)',
        'radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 90%)',
      ],
    };
  },
  mounted() {
    this.data_ = this.data;
  },
  methods: {
    getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    colorPicker() {
      let random = this.getRandomInt(0, this.cols.length - 1);
      return this.cols[random];
    },
    letters(letters) {
      const split = letters.split(' ');
      let first = split[0][0];
      let second = '';
      if (split[1]) {
        second = split[1][0];
      }
      const combine = first + second;
      return combine;
    },
    clearme() {
      this.search = '';
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
.emp-card-parent {
  position: relative;
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: center;
}
.dots {
  display: block;
  white-space: nowrap;
  width: 15em;
  overflow: hidden;
  text-overflow: ellipsis;
}
.emp-card {
  position: relative;
  width: 250px;
  border-radius: 10px;
  margin: 10px;
  background: #fff;
  box-shadow: 0 0 5px 0 #f37021;
}
.emp-name-letter {
  text-transform: uppercase;
  position: relative;
  width: 100%;
  height: 100px;
  padding: 17px;
  text-align: center;
  font-size: 50px;
  font-weight: 800;
  background: #f37021;
  color: #fff;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  box-shadow: 0 0 5px 0 #f37021;
}
.emp-info {
  position: relative;
  line-height: 2;
}
.bold {
  font-weight: 700;
}
.text-info {
  padding: 2px;
  padding-left: 10px;
  color: #464646 !important;
}
/* .emp-table {
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
} */
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
