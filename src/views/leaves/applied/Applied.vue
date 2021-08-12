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
            <DataTable :type="1" :columns="xcol" />
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
import DataTable from '@/components/DataTable';
const jsonexport = require('jsonexport');

export default {
  name: 'Applied Leaves',
  data() {
    return {
      isRecord: true,
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
  components: {
    DataTable,
  },
};
</script>

<style></style>
