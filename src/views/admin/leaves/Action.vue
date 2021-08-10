<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <strong>
          Employee ID:
        </strong>
        {{ empID }}
      </div>
      <div class="col">
        <strong>
          Employee Name:
        </strong>
        {{ name }}
      </div>
    </div>
    <br />
    <div class="row">
      <div class="col">
        <strong>
          Employee Email:
        </strong>
        {{ email }}
      </div>
      <div class="col">
        <strong>
          Team:
        </strong>
        {{ team }}
      </div>
    </div>
    <br />
    <div class="row">
      <div class="col">
        <strong>
          Role:
        </strong>
        {{ role }}
      </div>
      <div class="col">
        <strong>
          Remaining Leaves:
        </strong>
        {{ remaining }}
      </div>
    </div>
    <br />
    <div class="row">
      <div class="col">
        <strong>
          Start Date:
        </strong>
        {{ startDate }}
      </div>
      <div class="col">
        <strong>
          End Date:
        </strong>
        {{ endDate }}
      </div>
    </div>
    <br />
    <div class="row">
      <div class="col">
        <strong>
          Total Leaves:
        </strong>
        {{ totalDays }}
      </div>
      <div class="col">
        <strong>
          Leave Type:
        </strong>
        {{ leaveType }}
      </div>
    </div>
    <br />
    <div class="row">
      <div class="col">
        <strong>
          Reason:
        </strong>
        {{ reason }}
      </div>
    </div>
    <br />
    <div class="row" v-if="roleSession == 'HR'">
      <div class="col">
        <strong>
          Approved By EM:
        </strong>
        {{ em }}
      </div>
    </div>
    <br />
    <div class="row">
      <div class="col red" v-if="remaining <= 0">
        <strong>
          Note:
        </strong>
        This Employee Has consumed all his/her remaining leaves.
      </div>
    </div>
    <br />
    <div class="row">
      <div class="col">
        <div class="inputForm">
          <label for="paidStatus">Select Paid / Unpaid</label>
          <select name="paidStatus" id="paidStatus" v-model="paidStatus">
            <option value="0">----------</option>
            <option value="1">Paid</option>
            <option value="2">UnPaid</option>
          </select>
        </div>
      </div>
      <div class="col"></div>
      <div class="col"></div>
    </div>
    <br />
    <div class="row">
      <div class="col">
        <div class="inputForm">
          <label for="actionReason">Reason</label>
          <vue-editor id="actionReason" v-model="actionReason"></vue-editor>
        </div>
      </div>
    </div>
    <br /><br /><br />
    <div class="row">
      <div class="col">
        <button class="btn btn-success padd" @click="accept">Approve</button>
        <button class="btn btn-danger padd" @click="reject">Reject</button>
      </div>
    </div>
  </div>
</template>

<script>
import { VueEditor } from 'vue3-editor';
import { createToast } from 'mosha-vue-toastify';
// import the styling for the toast
import 'mosha-vue-toastify/dist/style.css';

export default {
  components: {
    VueEditor,
  },
  data() {
    return {
      roleSession: 'EM',
      paidStatus: '',
      empID: '',
      team: '',
      role: '',
      name: '',
      email: '',
      actionReason: '',
      id: '',
      startDate: '',
      endDate: '',
      totalDays: '',
      disabled: '',
      leaveType: '',
      remaining: '',
      reason: '',
      em: '',
      emData: '',
    };
  },

  mounted() {
    this.getData();
  },
  methods: {
    async accept() {
      if (this.paidStatus == 0) {
        createToast('Please Select Leaves Paid Status', {
          type: 'danger',
          position: 'top-right',
          showIcon: true,
          timeout: 10000,
          transition: 'bounce',
        });
      } else {
        createToast('Leave Has Been Approved and Sent to HR', {
          type: 'success',
          position: 'top-right',
          showIcon: true,
          timeout: 10000,
          transition: 'bounce',
        });
      }
    },
    async reject() {
      if (this.paidStatus == 0 || this.actionReason == '') {
        createToast('Please Select Leaves Paid Status & give reason', {
          type: 'danger',
          position: 'top-right',
          showIcon: true,
          timeout: 10000,
          transition: 'bounce',
        });
        console.log(this.actionReason);
      } else {
        createToast('Leave Has Been Rejected', {
          type: 'success',
          position: 'top-right',
          showIcon: true,
          timeout: 10000,
          transition: 'bounce',
        });
      }
    },
    async getData() {
      const dt = {
        id: this.$route.params.id,
        empID: '123145',
        team: 'PLG',
        role: 'Employee',
        name: 'Ahmad Raza',
        email: 'ahmad.raza@sendoso.com',
        startDate: '2020-01-01',
        endDate: '2020-01-12',
        totalDays: 13,
        leaveType: 'Annual',
        remaining: 0,
        reason: 'I am feeling Very Sick thats why i want these leaves',
        em: 'ahmad.raza@sendoso.com',
      };
      this.id = dt.id;
      this.startDate = dt.startDate;
      this.endDate = dt.endDate;
      this.totalDays = dt.totalDays;
      this.leaveType = dt.leaveType;
      this.reason = dt.reason;
      this.remaining = dt.remaining;
      this.em = dt.em;
      this.empID = dt.empID;
      this.team = dt.team;
      this.role = dt.role;
      this.name = dt.name;
      this.email = dt.email;
    },
  },
};
</script>

<style>
.padd {
  margin: 15px;
}
.ql-editor {
  min-height: 100px !important;
}
</style>
