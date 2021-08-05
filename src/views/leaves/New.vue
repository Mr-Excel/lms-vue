<template>
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
              <option value="0">----------</option>
              <option :value="i.email" v-for="i in emData" :key="i">{{
                i.email
              }}</option>
            </select>
          </div>
        </div>
        <div class="col"></div>
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
// import the library
import { VueEditor } from "vue3-editor";
import { createToast } from "mosha-vue-toastify";
// import the styling for the toast
import "mosha-vue-toastify/dist/style.css";

export default {
  components: {
    VueEditor,
  },
  data() {
    return {
      startDate: "",
      endDate: "",
      totalDays: "",
      disabled: 0,
      remaining: 12,
      reason: "",
      em: "-------",
      emData: [
        {
          id: 1,
          name: "Ahmad",
          email: "xyz@gmail.com",
        },
        {
          id: 2,
          name: "Raza",
          email: "rz@gmail.com",
        },
      ],
    };
  },
  methods: {
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
