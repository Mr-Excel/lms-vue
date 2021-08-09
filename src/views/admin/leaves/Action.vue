<template>
  <h1>{{ id }}</h1>
</template>

<script>
export default {
  data() {
    return {
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
    async getData() {
      const dt = {
        id: this.$route.params.id,
        startDate: '2020-01-01',
        endDate: '2020-01-12',
        totalDays: 13,
        leaveType: 'Annual',
        remaining: 9,
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
    },
  },
};
</script>

<style></style>
