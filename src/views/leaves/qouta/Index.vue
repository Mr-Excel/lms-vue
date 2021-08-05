<template>
  <div class="container">
    <div class="row" style="text-align: center;">
      <div class="col center">
        <Btn
          label="Sick Leave"
          :value="sickLeaves"
          v-on:returnValue="sickLeavesFunc"
          :disable="isdiable"
        />
      </div>
      <div class="col center">
        <Btn
          label="Annual Leave"
          :value="annualLeaves"
          v-on:returnValue="annualLeavesFunc"
          :disable="isdiable"
        />
      </div>
      <div class="col center">
        <Btn
          label="Casual Leave"
          :value="casualLeaves"
          v-on:returnValue="casualLeavesFunc"
          :disable="isdiable"
        />
      </div>
      <div class="col center">
        <Btn
          label="Other Leave"
          :value="otherLeaves"
          v-on:returnValue="otherLeavesFunc"
          :disable="isdiable"
        />
      </div>
    </div>
  </div>
</template>

<script>
// import { createToast } from 'mosha-vue-toastify';
// import 'mosha-vue-toastify/dist/style.css';
import Btn from '@/components/Numeric';
export default {
  components: {
    Btn,
  },
  data() {
    return {
      isdiable: 0,
      sickLeaves: 7,
      casualLeaves: 7,
      annualLeaves: 7,
      otherLeaves: 0,
      limit: 21,
      total: 0,
    };
  },
  methods: {
    sum() {
      const s = this.sickLeaves;
      const c = this.casualLeaves;
      const a = this.annualLeaves;
      const o = this.otherLeaves;
      const sum = s + c + a + o;
      this.total = sum;
    },
    sickLeavesFunc(v) {
      this.sickLeaves = v;
    },
    casualLeavesFunc(v) {
      this.casualLeaves = v;
    },
    annualLeavesFunc(v) {
      this.annualLeaves = v;
    },
    otherLeavesFunc(v) {
      this.otherLeaves = v;
    },
  },
};
</script>

<style></style>
