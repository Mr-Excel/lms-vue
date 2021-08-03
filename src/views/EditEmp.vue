<template>
  <h6>
    Emp Edit : <strong>{{ empId }}</strong>
  </h6>
</template>

<script>
export default {
  data() {
    return {
      empId: "",
    };
  },
  mounted() {
    const id = this.$route.params.id;
    this.empId = id;
  },
};
</script>

<style></style>
