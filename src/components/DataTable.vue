<template>
  <div class="table-responsive">
    <table class="table" id="tbl" ref="tbl">
      <caption style="text-align:center;">
        {{
          c_page
        }}/{{
          page
        }}
      </caption>
      <thead>
        <tr>
          <th scope="col" v-for="c in col" :key="c">
            {{ c.label }}
          </th>
          <th scope="col">
            Edit
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(i, index) in showData" :key="index">
          <td scope="row" v-for="j in i" :key="j">
            {{ j }}
          </td>
          <td>
            <router-link :to="`${path + i.id}`">
              <span class="material-icons-outlined hover">
                edit
              </span>
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="row">
      <div class="col" style="height: 45px;margin: 10px;">
        <div class="table-btn">
          <button @click="first" class="btn tbl-btn">
            <span class="material-icons-outlined">
              first_page
            </span>
          </button>
          <button @click="prev" class="btn tbl-btn">
            <span class="material-icons-outlined">
              navigate_before
            </span>
          </button>
          <button @click="next" class="btn tbl-btn">
            <span class="material-icons-outlined">
              navigate_next
            </span>
          </button>
          <button @click="last" class="btn tbl-btn">
            <span class="material-icons-outlined">
              last_page
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { AppliedLeaves } from '@/api.js';
export default {
  props: {
    columns: Array,
    rows: {
      type: Array,
    },
    path: {
      type: String,
      default: '/leaves/single/',
    },
    type: Number,
  },

  async mounted() {
    if (this.type == 1) {
      this.row = await this.getData();
    }
    // const token = sessionStorage.getItem('token');
    // this.row = await AppliedLeaves(this.$route.params.year, token);

    this.col = this.columns;
    this.row = this.rows;
    var items = this.row.slice(0, this.perPage).map((i) => {
      return i;
    });
    this.showData = items;
    this.ei = this.perPage;
    const _p = this.row.length / this.perPage;
    const pages = Math.ceil(_p);
    this.page = pages;
    this.c_page = 1;
    console.log(this.row);
  },
  data() {
    return {
      page: 0,
      c_page: 0,
      showData: [],
      perPage: 10,
      col: [],
      row: [],
      si: 0,
      ei: 0,
      search: '',
    };
  },
  methods: {
    async getData() {
      const token = sessionStorage.getItem('token');
      const res = await AppliedLeaves(this.$route.params.year, token);
      const arr = [];
      for (let i = 0; i < res.data.length; i++) {
        const obj = {
          id: res.data[i]._id,
          leaveType: res.data[i].leave_type,
          startDate: res.data[i].start_date,
          endDate: res.data[i].end_date,
          status: res.data[i].leave_Status,
          type: res.data[i].paid_type,
          leaves: res.data[i].total_days,
        };
        arr.push(obj);
      }
      return arr;
      // this.col = this.columns;
      // this.row = arr;
      // var items = this.row.slice(0, this.perPage).map((i) => {
      //   return i;
      // });
      // this.showData = items;
      // this.ei = this.perPage;
      // const _p = this.row.length / this.perPage;
      // const pages = Math.ceil(_p);
      // this.page = pages;
      // this.c_page = 1;
    },
    first() {
      this.c_page = 1;
      this.si = 0;
      this.ei = this.perPage;
      var items = this.row.slice(this.si, this.ei).map((i) => {
        return i;
      });
      if (items.length > 0) {
        this.showData = items;
      }
    },
    last() {
      const _p = this.row.length / this.perPage;
      const mod = _p % 1;
      let _mod;
      if (mod !== 0) {
        _mod = Math.ceil(mod * this.perPage);
      } else {
        _mod = this.perPage;
      }

      this.c_page = this.page;
      this.ei = this.row.length;
      this.si = this.ei - _mod;
      var items = this.row.slice(this.si, this.ei).map((i) => {
        return i;
      });
      if (items.length > 0) {
        this.showData = items;
      }
    },
    next() {
      console.log(this.row);
      if (this.ei < this.row.length) {
        this.c_page = this.c_page + 1;
        const s = this.si + this.perPage;
        // const e = this.ei + this.perPage;
        this.si = s;
        this.ei = this.si + this.perPage;
        var items = this.row.slice(this.si, this.ei).map((i) => {
          return i;
        });
        if (items.length > 0) {
          this.showData = items;
        }
      }
    },
    prev() {
      if (this.si > 0) {
        this.c_page = this.c_page - 1;
        const s = this.si - this.perPage;
        // const e = this.ei - this.perPage;
        this.si = s;
        this.ei = this.si + this.perPage;
        var items = this.row.slice(this.si, this.ei).map((i) => {
          return i;
        });
        if (items.length > 0) {
          this.showData = items;
        }
      }
    },
  },
};
</script>

<style>
.table {
  position: relative;
  width: 90%;
  left: 5%;
  right: 5%;
  overflow: auto;
  user-select: none;
}
.tbl-btn {
  width: auto !important;
  height: 36px;
  margin: 2px;
  transition: 0.4s all;
}
.tbl-btn:hover {
  background: #f37021;
  color: #fff;
}
.table-btn {
  position: relative;
  float: right;
}
.hover:hover {
  cursor: pointer;
  color: #f37021;
  filter: drop-shadow(0 0 10px 0 black);
}
</style>
