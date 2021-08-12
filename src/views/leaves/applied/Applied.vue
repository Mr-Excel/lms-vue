<template>
  {{ xrow }}
  <br />
  {{ getXrow }}
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
            <DataTable :rows="getXrow" :columns="xcol" />
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
import { AppliedLeaves } from '@/api.js';
import DataTable from '@/components/DataTable';
const jsonexport = require('jsonexport');

export default {
  name: 'Applied Leaves',
  data() {
    return {
      isRecord: true,
      xrow: [],
      xcol: [
        {
          field: 'id',
          label: 'ID',
        },
        {
          field: 'leaveType',
          label: 'Leave Type',
        },
        {
          field: 'startDate',
          label: 'Start Date',
        },
        {
          field: 'endDate',
          label: 'End Date',
        },
        {
          field: 'status',
          label: 'Status',
        },
        {
          field: 'type',
          label: 'Type',
        },
        {
          field: 'leaves',
          label: 'Days',
        },
      ],
      str: '',
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
      this.xrow = arr;
    },
    download() {
      this.DownloadJSON2CSV(this.xrow);
      // this.csv(this.xrow);
    },
    DownloadJSON2CSV(objArray) {
      const this_ = this;
      jsonexport(objArray, function(err, csv) {
        if (err) return console.error(err);
        this_.download_file('leaves data.csv', csv);
      });
    },
    download_file(filename, text) {
      var element = document.createElement('a');
      element.setAttribute(
        'href',
        'data:text/plain;charset=utf-8,' + encodeURIComponent(text)
      );
      element.setAttribute('download', filename);

      element.style.display = 'none';
      document.body.appendChild(element);

      element.click();

      document.body.removeChild(element);
    },
  },
  computed: {
    getXrow() {
      return this.xrow;
    },
  },
  mounted() {
    this.getData();
  },
  components: {
    DataTable,
  },
};
</script>

<style></style>
