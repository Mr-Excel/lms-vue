<template>
  <spinner
    :active="active"
    :single="false"
    :show-text="false"
    position="fixed"
  />
  <div class="container">
    <div class="row">
      <div class="col-9"></div>
      <div class="col-3" :class="remaining > 0 ? 'green' : 'red'">
        Remaining Leaves : <strong>{{ remaining }}</strong>
      </div>
    </div>
    <br />
    <div v-if="remaining > 0">
      <div class="row">
        <div class="col">
          <div class="inputForm">
            <label for="startDate">Start Date</label>
            <input
              type="date"
              v-model="startDate"
              name="startDate"
              id="startDate"
              @input="endDateEnable"
              placeholder="Select Starting Date"
            />
          </div>
        </div>
        <div class="col">
          <div class="inputForm">
            <label for="endDate">End Date</label>
            <input
              type="date"
              v-model="endDate"
              name="endDate"
              id="endDate"
              @input="daysDiff"
              :disabled="disabled == 0"
              placeholder="Select Ending Date"
            />
          </div>
        </div>
        <div class="col">
          <div class="inputForm">
            <label for="totalDays">Total Days</label>
            <input
              type="number"
              v-model="totalDays"
              name="totalDays"
              id="totalDays"
              placeholder=""
              disabled
            />
          </div>
        </div>
      </div>
      <br />
      <div class="row">
        <div class="col">
          <div class="inputForm">
            <label for="reason">Reason</label>
            <vue-editor id="reason" v-model="reason"></vue-editor>
          </div>
        </div>
      </div>
      <br /><br /><br />
      <div class="row">
        <div class="col">
          <div class="inputForm">
            <label for="em">Select Relative Manager</label>
            <select name="em" id="em" v-model="em" @change="onSelect">
              <option :value="i.email" v-for="i in emData" :key="i">{{
                i.name
              }}</option>
            </select>
          </div>
        </div>
        <div class="col">
          <div class="inputForm">
            <label for="leaveType">Select Leave Type</label>
            <select name="leaveType" id="leaveType" v-model="leaveType">
              <option value="Casual" v-if="rem_casual > 0"
                >Casual
                <em>
                  (<strong>{{ rem_casual }}</strong
                  >)
                </em></option
              >
              <option value="Sick" v-if="rem_sick > 0"
                >Sick
                <em>
                  (<strong>{{ rem_sick }}</strong
                  >)
                </em></option
              >
              <option value="Annual" v-if="rem_annual > 0"
                >Annual
                <em>
                  (<strong>{{ rem_annual }}</strong
                  >)
                </em></option
              >
              <option value="Others" v-if="rem_others > 0"
                >Others
                <em>
                  (<strong>{{ rem_others }}</strong
                  >)
                </em>
              </option>
            </select>
          </div>
        </div>
        <div class="col">
          <button
            class="btn btn-secondary"
            style="position:relative; float:right;"
            @click="send"
          >
            Send
          </button>
        </div>
      </div>
    </div>
    <div class="row" v-else>
      <div class="col" style="text-align: center;">
        <strong> You have No Remaining Leaves Contact your Manager</strong>
        <br /><br />
        <router-link to="/leaves/qouta">
          <button class="btn btn-danger">
            Click Me
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { NewLeave, AllManagers, RemainingLeaves } from '@/api.js';
// import the library
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
      startDate: '',
      endDate: '',
      totalDays: '',
      disabled: 0,
      leaveType: '',
      remaining: 12,
      rem_annual: 0,
      rem_sick: 0,
      rem_casual: 0,
      rem_others: 0,
      reason: '',
      em: '',
      active: false,
      emData: [],
    };
  },
  mounted() {
    this.getManagers();
    this.remining();
  },
  methods: {
    async remining() {
      const dt = new Date();
      const year = dt.getFullYear();
      const token = sessionStorage.getItem('token');
      const res = await RemainingLeaves(year, token);
      if (res.data.code) {
        const dt = res.data;
        this.remaining = dt.remaining;
        const c_annual = dt.consumed.annual;
        const q_annual = dt.qouta.annual;
        const r_annual = Number(q_annual) - Number(c_annual);
        this.rem_annual = r_annual;
        const c_casual = dt.consumed.casual;
        const q_casual = dt.qouta.casual;
        const r_casual = Number(q_casual) - Number(c_casual);
        this.rem_casual = r_casual;
        const c_sick = dt.consumed.sick;
        const q_sick = dt.qouta.sick;
        const r_sick = Number(q_sick) - Number(c_sick);
        this.rem_sick = r_sick;
        const c_others = dt.consumed.others;
        const q_others = dt.qouta.others;
        const r_others = Number(q_others) - Number(c_others);
        this.rem_others = r_others;
      }
    },
    async getManagers() {
      const team = sessionStorage.getItem('team');
      const res = await AllManagers(team);
      if (res.data.code) {
        this.emData = res.data.data;
      }
    },
    async send() {
      const this_ = this;
      this.active = true;
      console.log(this.em);
      if (
        this.startDate &&
        this.endDate &&
        this.totalDays > 0 &&
        this.em &&
        this.leaveType &&
        this.reason
      ) {
        if (this.totalDays < this.remaining) {
          const data = {
            reason: this_.reason,
            manager: this_.em,
            leave_type: this_.leaveType,
            start_date: this_.startDate,
            end_date: this_.endDate,
            leave_Status: 'Pending',
            paid_type: 'Paid',
            total_days: this_.totalDays,
            remaining_leaves: this_.remaining,
            approved_by_hr: '',
            approved_by_em: '',
            category: 'Qouta',
            is_active: '1',
          };
          const token = sessionStorage.getItem('token');
          const res = await NewLeave(data, token);
          if (res.data.code) {
            if (res.data.code == 200) {
              createToast('Request Has Been Sent to EM!', {
                type: 'success',
                position: 'top-right',
                showIcon: true,
                timeout: 10000,
                transition: 'bounce',
              });
              this.active = false;
            }
          } else {
            createToast('Server Error', {
              type: 'danger',
              position: 'top-right',
              showIcon: true,
              timeout: 10000,
              transition: 'bounce',
            });
            this.active = false;
          }
        } else {
          createToast('Selected Days are greater than Remaining Leaves', {
            type: 'danger',
            position: 'top-right',
            showIcon: true,
            timeout: 10000,
            transition: 'bounce',
          });
          this.active = false;
        }
      } else {
        createToast('All Fields are Required!!!', {
          type: 'danger',
          position: 'top-right',
          showIcon: true,
          timeout: 10000,
          transition: 'bounce',
        });
        this.active = false;
      }
    },
    onSelect() {
      console.log(this.em);
    },
    inDays(d1, d2) {
      var t2 = d2.getTime();
      var t1 = d1.getTime();
      return parseInt((t2 - t1) / (24 * 3600 * 1000));
    },
    daysDiff() {
      const sd = new Date(this.startDate);
      const ed = new Date(this.endDate);
      const diff = this.inDays(sd, ed) + 1;
      if (diff > 0) {
        this.totalDays = diff;
      } else {
        this.endDate = '';
        this.totalDays = '';
        createToast('Selected Date is Less Than Start Date', {
          type: 'danger',
          position: 'top-right',
          showIcon: true,
          timeout: 10000,
          transition: 'bounce',
        });
      }
    },
    endDateEnable() {
      this.disabled = 1;
    },
  },
};
</script>

<style>
.red {
  color: red;
}
.green {
  color: green;
}
.ql-formats > button {
  width: auto !important;
}
</style>
