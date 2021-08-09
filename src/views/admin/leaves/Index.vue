<template>
  <div class="container">
    <div class="row">
      <div class="col center">
        <div v-if="isRecord">
          <DataTable
            :rows="xrow"
            path="/admin/leaves/action/"
            :columns="xcol"
          />
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
          leaveType: 'Casual',
          startDate: '6/8/2021 16:10:21',
          endDate: '6/15/2021 16:10:21',
          email: 'asad.ali@sendoso.com',
          fullName: 'Asad Ali',
          remainingLeaves: 7,
          leaves: 2,
        },
        {
          id: 2,
          leaveType: 'Sick',
          startDate: '5/25/2021 16:10:21',
          endDate: '5/30/2021 16:10:21',
          email: 'asad.ali@sendoso.com',
          fullName: 'Asad Ali',
          remainingLeaves: 6,
          leaves: 3,
        },
        {
          id: 3,
          leaveType: 'Casual',
          startDate: '7/4/2021 16:10:21',
          endDate: '7/5/2021 16:10:21',
          email: 'ahmad.raza@sendoso.com',
          fullName: 'Ahmad Raza',
          remainingLeaves: 6,
          leaves: 2,
        },
        {
          id: 4,
          leaveType: 'Annual',
          startDate: '7/8/2021 16:10:21',
          endDate: '7/12/2021 16:10:21',
          email: 'ahmad.raza@sendoso.com',
          fullName: 'Ahmad Raza',
          remainingLeaves: 1,
          leaves: 1,
        },
        {
          id: 5,
          leaveType: 'Annual',
          startDate: '6/19/2021 16:10:21',
          endDate: '6/20/2021 16:10:21',
          email: 'ahmad.raza@sendoso.com',
          fullName: 'Ahmad Raza',
          remainingLeaves: 13,
          leaves: 10,
        },
        {
          id: 6,
          leaveType: 'Casual',
          startDate: '6/22/2021 16:10:21',
          endDate: '6/23/2021 16:10:21',
          email: 'ahmad.raza@sendoso.com',
          fullName: 'Ahmad Raza',
          remainingLeaves: 6,
          leaves: 1,
        },
        {
          id: 7,
          leaveType: 'Casual',
          startDate: '7/10/2021 16:10:21',
          endDate: '7/14/2021 16:10:21',
          email: 'asad.ali@sendoso.com',
          fullName: 'Asad Ali',
          remainingLeaves: 7,
          leaves: 4,
        },
        {
          id: 8,
          leaveType: 'Sick',
          startDate: '7/6/2021 16:10:21',
          endDate: '7/8/2021 16:10:21',
          email: 'ahmad.raza@sendoso.com',
          fullName: 'Ahmad Raza',
          remainingLeaves: 14,
          leaves: 11,
        },
        {
          id: 9,
          leaveType: 'Casual',
          startDate: '7/2/2021 16:10:21',
          endDate: '7/6/2021 16:10:21',
          email: 'ahmad.raza@sendoso.com',
          fullName: 'Ahmad Raza',
          remainingLeaves: 13,
          leaves: 11,
        },
        {
          id: 10,
          leaveType: 'Sick',
          startDate: '7/8/2021 16:10:21',
          endDate: '7/15/2021 16:10:21',
          email: 'ahmad.raza@sendoso.com',
          fullName: 'Ahmad Raza',
          remainingLeaves: 4,
          leaves: 2,
        },
        {
          id: 11,
          leaveType: 'Annual',
          startDate: '6/29/2021 16:10:21',
          endDate: '6/30/2021 16:10:21',
          email: 'ahmad.raza@sendoso.com',
          fullName: 'Ahmad Raza',
          remainingLeaves: 9,
          leaves: 8,
        },
        {
          id: 12,
          leaveType: 'Casual',
          startDate: '5/23/2021 16:10:21',
          endDate: '5/29/2021 16:10:21',
          email: 'ahmad.raza@sendoso.com',
          fullName: 'Ahmad Raza',
          remainingLeaves: 9,
          leaves: 4,
        },
        {
          id: 13,
          leaveType: 'Sick',
          startDate: '6/30/2021 16:10:21',
          endDate: '7/3/2021 16:10:21',
          email: 'ahmad.raza@sendoso.com',
          fullName: 'Ahmad Raza',
          remainingLeaves: 12,
          leaves: 8,
        },
        {
          id: 14,
          leaveType: 'Sick',
          startDate: '6/14/2021 16:10:21',
          endDate: '6/17/2021 16:10:21',
          email: 'ahmad.raza@sendoso.com',
          fullName: 'Ahmad Raza',
          remainingLeaves: 7,
          leaves: 5,
        },
        {
          id: 15,
          leaveType: 'Casual',
          startDate: '6/8/2021 16:10:21',
          endDate: '6/13/2021 16:10:21',
          email: 'asad.ali@sendoso.com',
          fullName: 'Asad Ali',
          remainingLeaves: 6,
          leaves: 4,
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
          field: 'email',
          label: 'Email',
        },
        {
          field: 'fullName',
          label: 'Name',
        },
        {
          field: 'remainingLeaves',
          label: 'Remaining',
        },
        {
          field: 'leaves',
          label: 'Days',
        },
      ],
    };
  },
  methods: {},
};
</script>

<style></style>
