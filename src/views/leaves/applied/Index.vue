<template>
  <div><MenuIcon :dt="datax" /></div>
</template>

<script>
import MenuIcon from "@/components/Icon";

export default {
  components: {
    MenuIcon,
  },
  data() {
    return {
      datax: [],
    };
  },
  mounted() {
    this.datax = this.getYears();
    console.log(this.datax);
  },
  methods: {
    getYears() {
      const dt_ = [];
      const session_date = sessionStorage.getItem("reg_date");
      const date = new Date(session_date);
      const now = new Date();
      const reg_year = date.getFullYear();
      const c_year = now.getFullYear();
      for (let i = reg_year; i <= c_year; i++) {
        const arr = {
          path: `/leaves/applied/${i}`,
          icon: "folder",
          name: `Applied Leaves ${i}`,
          pop: false,
        };
        dt_.unshift(arr);
      }
      return dt_;
    },
  },
};
</script>

<style></style>
