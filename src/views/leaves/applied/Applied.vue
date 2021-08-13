<template>
  <div class="container">
    <div class="row">
      <div class="col center">
        <div v-if="isRecord">
          <button class="btn btn-success download" @click="download">
            <span class="material-icons-outlined">
              download
            </span>
          </button>
          <div style="padding-top: 60px;">
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
                  <th scope="col">Leave Type</th>
                  <th scope="col">Reason</th>
                  <th scope="col">Start Date</th>
                  <th scope="col">End Date</th>
                  <th scope="col">Status</th>
                  <th scope="col">Type</th>
                  <th scope="col">Leaves</th>
                  <th scope="col">Edit</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(i, index) in row" :key="index">
                  <td scope="row">
                    {{ i.leave_type }}
                  </td>
                  <td scope="row">
                    {{ i.reason }}
                  </td>
                  <td scope="row">
                    {{ i.start_date }}
                  </td>
                  <td scope="row">
                    {{ i.end_date }}
                  </td>
                  <td scope="row">
                    {{ i.status }}
                  </td>
                  <td scope="row">
                    {{ i.type }}
                  </td>
                  <td scope="row">
                    {{ i.leaves }}
                  </td>
                  <td>
                    <router-link :to="`/leaves/single/${i.id}`">
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
                  <button @click="next(row)" class="btn tbl-btn">
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
        </div>
        <div v-else>
          <strong>No Record Found</strong>
          <br />
          <br />
          <router-link to="/leaves/applied">
            <button class="btn btn-warning">Go Back</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { AppliedLeaves } from "@/api.js";
const jsonexport = require("jsonexport");

export default {
  name: "Applied Leaves",
  data() {
    return {
      isRecord: true,
      str: "",
      row: [],
      page: 0,
      c_page: 0,
      showData: [],
      perPage: 10,
      si: 0,
      ei: 0,
      search: "",
    };
  },
  async mounted() {
    this.row = await this.getData();
    var items = this.row.slice(0, this.perPage).map((i) => {
      return i;
    });
    this.showData = items;
    this.ei = this.perPage;
    const _p = this.row.length / this.perPage;
    const pages = Math.ceil(_p);
    this.page = pages;
    this.c_page = 1;
  },
  methods: {
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
    async getData() {
      const token = sessionStorage.getItem("token");
      const res = await AppliedLeaves(this.$route.params.year, token);
      const arr = [];
      for (let i = 0; i < res.data.length; i++) {
        const obj = {
          id: res.data[i]._id,
          reason: res.data[i].reason,
          leave_type: res.data[i].leave_type,
          start_date: res.data[i].start_date,
          end_date: res.data[i].end_date,
          status: res.data[i].leave_Status,
          type: res.data[i].paid_type,
          leaves: res.data[i].total_days,
        };
        arr.push(obj);
      }
      return arr;
    },
    download() {
      this.DownloadJSON2CSV(this.data);
    },
    DownloadJSON2CSV(objArray) {
      const this_ = this;
      jsonexport(objArray, function(err, csv) {
        if (err) return console.error(err);
        this_.download_file("leaves data.csv", csv);
      });
    },
    download_file(filename, text) {
      var element = document.createElement("a");
      element.setAttribute(
        "href",
        "data:text/plain;charset=utf-8," + encodeURIComponent(text)
      );
      element.setAttribute("download", filename);

      element.style.display = "none";
      document.body.appendChild(element);

      element.click();

      document.body.removeChild(element);
    },
  },
  components: {
    // DataTable,
  },
};
</script>

<style></style>
