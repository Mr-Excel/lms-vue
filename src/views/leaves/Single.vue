<template>
  <div class="container">
    <div class="row">
      <div class="col-9">
        <div class="col">
          Leave Id : <strong> {{ id }}</strong>
        </div>
        <div class="col">
          Leave Status :
          <strong style="color:red;" v-if="status == 'Rejected'">
            {{ status }}</strong
          >
          <strong style="color:green;" v-else-if="status == 'Approved'">
            {{ status }}</strong
          >
          <strong style="color:#f37021;" v-else> {{ status }}</strong>
        </div>
      </div>
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
              :disabled="disabled == 0"
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
            <vue-editor
              :disabled="disabled == 0"
              id="reason"
              v-model="reason"
            ></vue-editor>
          </div>
        </div>
      </div>
      <br /><br /><br />
      <div class="row">
        <div class="col">
          <div class="inputForm">
            <label for="em">Select Relative Manager</label>
            <input
              type="number"
              v-model="em"
              name="em"
              id="em"
              placeholder=""
              disabled
            />
          </div>
        </div>
        <div class="col"></div>
        <div class="col" v-if="status == 'Pending'">
          <button
            class="btn btn-danger"
            style="position:relative; float:right; margin-left:15px;"
            @click="del"
          >
            Delete
          </button>
          <button
            class="btn btn-secondary"
            style="position:relative; float:right;"
            @click="send"
          >
            Update
          </button>
        </div>
      </div>
    </div>
    <div class="row" v-else>
      <div class="col" style="text-align: center;">
        <strong> You have No Remaining Leaves Contact your Manager</strong>
        <br /><br />
        <router-link to="/leaves/qouta/more">
          <button class="btn btn-danger">
            Click Me
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { SingleLeaves, RemainingLeaves } from "@/api.js";
// import the library
import { VueEditor } from "vue3-editor";
import { createToast } from "mosha-vue-toastify";
// import the styling for the toast
import "mosha-vue-toastify/dist/style.css";

export default {
  components: {
    VueEditor,
  },
  async mounted() {
    const x = await SingleLeaves(this.id);
    const dt = x.data[0];
    const res = {
      startDate: dt.start_date,
      endDate: dt.end_date,
      totalDays: dt.total_days,
      reason: dt.reason,
      em: dt.manager,
      status: dt.leave_Status,
    };
    const sd = new Date(res.startDate);
    const sd_date = ("0" + sd.getDate()).slice(-2);
    const sd_month = ("0" + (sd.getMonth() + 1)).slice(-2);
    const ed = new Date(res.endDate);
    const ed_date = ("0" + ed.getDate()).slice(-2);
    const ed_month = ("0" + (ed.getMonth() + 1)).slice(-2);
    this.startDate = sd.getFullYear() + "-" + sd_month + "-" + sd_date;
    this.endDate = ed.getFullYear() + "-" + ed_month + "-" + ed_date;
    this.totalDays = res.totalDays;
    this.reason = res.reason;
    this.status = res.status;
    this.em = res.em;
    const token = sessionStorage.getItem("token");
    const date = new Date();
    const rem = await RemainingLeaves(date.getFullYear(), token);
    this.remaining = rem.data.remaining;
    if (this.status == "Pending") {
      this.disabled = 1;
    } else {
      this.disabled = 0;
    }
  },
  data() {
    return {
      id: this.$route.params.id,
      startDate: "",
      endDate: "",
      totalDays: "",
      disabled: "",
      remaining: 0,
      status: "",
      reason: "",
      em: "",
    };
  },
  methods: {
    async get() {
      const res = {
        id: this.$route.params.id,
        startDate: "2021-08-01",
        endDate: "2021-08-07",
        totalDays: 7,
        reason: "No Reason",
        em: "xyz@gmail.com",
        status: "Pending",
      };
      this.startDate = res.startDate;
      this.endDate = res.endDate;
      this.totalDays = res.totalDays;
      this.reason = res.reason;
      this.status = res.status;
      this.em = res.em;
    },
    async send() {
      if (
        this.startDate &&
        this.endDate &&
        this.totalDays > 0 &&
        this.em &&
        this.reason
      ) {
        if (this.totalDays < this.remaining) {
          createToast("Request Has Been Sent to EM!", {
            type: "success",
            position: "top-right",
            showIcon: true,
            timeout: 10000,
            transition: "bounce",
          });
        } else {
          createToast("Selected Days are greater than Remaining Leaves", {
            type: "danger",
            position: "top-right",
            showIcon: true,
            timeout: 10000,
            transition: "bounce",
          });
        }
      } else {
        createToast("All Fields are Required!!!", {
          type: "danger",
          position: "top-right",
          showIcon: true,
          timeout: 10000,
          transition: "bounce",
        });
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
        this.endDate = "";
        this.totalDays = "";
        createToast("Selected Date is Less Than Start Date", {
          type: "danger",
          position: "top-right",
          showIcon: true,
          timeout: 10000,
          transition: "bounce",
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
