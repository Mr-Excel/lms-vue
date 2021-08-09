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
            <DataTable :rows="xrow" :columns="xcol" />
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
  components: {
    DataTable,
  },
  data() {
    return {
      isRecord: true,
      xrow: [
        {
          id: 1,
          leaveType: 'Sick',
          startDate: '4/8/2020',
          endDate: '4/11/2020',
          status: 'Rejected',
          type: 'Paid',
          leaves: 3,
        },
        {
          id: 2,
          leaveType: 'Casual',
          startDate: '7/4/2020',
          endDate: '7/9/2020',
          status: 'Rejected',
          type: 'Paid',
          leaves: 5,
        },
        {
          id: 3,
          leaveType: 'Casual',
          startDate: '6/26/2020',
          endDate: '7/1/2020',
          status: 'Approved',
          type: 'Unpaid',
          leaves: 5,
        },
        {
          id: 4,
          leaveType: 'Sick',
          startDate: '4/24/2021',
          endDate: '4/26/2021',
          status: 'Rejected',
          type: 'Unpaid',
          leaves: 2,
        },
        {
          id: 5,
          leaveType: 'Annual',
          startDate: '10/8/2020',
          endDate: '10/12/2020',
          status: 'Rejected',
          type: 'Paid',
          leaves: 4,
        },
        {
          id: 6,
          leaveType: 'Annual',
          startDate: '7/24/2020',
          endDate: '7/25/2020',
          status: 'Approved',
          type: 'Paid',
          leaves: 1,
        },
        {
          id: 7,
          leaveType: 'Sick',
          startDate: '5/6/2021',
          endDate: '5/7/2021',
          status: 'Pending',
          type: 'Paid',
          leaves: 1,
        },
        {
          id: 8,
          leaveType: 'Casual',
          startDate: '4/16/2021',
          endDate: '4/19/2021',
          status: 'Pending',
          type: 'Unpaid',
          leaves: 3,
        },
        {
          id: 9,
          leaveType: 'Annual',
          startDate: '4/8/2021',
          endDate: '4/9/2021',
          status: 'Approved',
          type: 'Paid',
          leaves: 1,
        },
        {
          id: 10,
          leaveType: 'Annual',
          startDate: '8/17/2020',
          endDate: '8/19/2020',
          status: 'Approved',
          type: 'Unpaid',
          leaves: 2,
        },
        {
          id: 11,
          leaveType: 'Annual',
          startDate: '5/28/2020',
          endDate: '5/30/2020',
          status: 'Pending',
          type: 'Paid',
          leaves: 2,
        },
        {
          id: 12,
          leaveType: 'Casual',
          startDate: '4/4/2020',
          endDate: '4/5/2020',
          status: 'Approved',
          type: 'Paid',
          leaves: 1,
        },
        {
          id: 13,
          leaveType: 'Sick',
          startDate: '2/5/2021',
          endDate: '2/10/2021',
          status: 'Approved',
          type: 'Paid',
          leaves: 5,
        },
        {
          id: 14,
          leaveType: 'Annual',
          startDate: '12/20/2020',
          endDate: '12/24/2020',
          status: 'Rejected',
          type: 'Paid',
          leaves: 4,
        },
        {
          id: 15,
          leaveType: 'Sick',
          startDate: '7/27/2020',
          endDate: '8/1/2020',
          status: 'Approved',
          type: 'Unpaid',
          leaves: 5,
        },
        {
          id: 16,
          leaveType: 'Casual',
          startDate: '6/1/2021',
          endDate: '6/4/2021',
          status: 'Rejected',
          type: 'Unpaid',
          leaves: 3,
        },
        {
          id: 17,
          leaveType: 'Sick',
          startDate: '9/7/2020',
          endDate: '9/10/2020',
          status: 'Rejected',
          type: 'Unpaid',
          leaves: 3,
        },
        {
          id: 18,
          leaveType: 'Casual',
          startDate: '1/1/2021',
          endDate: '1/6/2021',
          status: 'Pending',
          type: 'Unpaid',
          leaves: 5,
        },
        {
          id: 19,
          leaveType: 'Casual',
          startDate: '2/12/2021',
          endDate: '2/15/2021',
          status: 'Rejected',
          type: 'Unpaid',
          leaves: 3,
        },
        {
          id: 20,
          leaveType: 'Sick',
          startDate: '4/1/2020',
          endDate: '4/2/2020',
          status: 'Pending',
          type: 'Unpaid',
          leaves: 1,
        },
        {
          id: 21,
          leaveType: 'Sick',
          startDate: '7/24/2020',
          endDate: '7/28/2020',
          status: 'Pending',
          type: 'Unpaid',
          leaves: 4,
        },
        {
          id: 22,
          leaveType: 'Annual',
          startDate: '4/1/2021',
          endDate: '4/2/2021',
          status: 'Approved',
          type: 'Unpaid',
          leaves: 1,
        },
      ],
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
};
</script>

<style></style>
