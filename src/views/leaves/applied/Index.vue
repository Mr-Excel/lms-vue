<template>
  <div><MenuIcon :dt="datax" /></div>
</template>

<script>
import MenuIcon from '@/components/Icon';

export default {
  components: {
    MenuIcon,
  },
  data() {
    return {
      resolveMode: false,
      datax: [],
    };
  },
  beforeMount() {
    this.getYears();
  },
  mounted() {},
  methods: {
    getYears() {
      const dt_ = [];
      const session_date = sessionStorage.getItem('reg_date');
      const date = new Date(session_date);
      const now = new Date();
      const reg_year = date.getFullYear();
      const c_year = now.getFullYear();
      for (let i = reg_year; i <= c_year; i++) {
        const arr = {
          path: `/leaves/applied/${i}`,
          icon: 'folder',
          name: `${i}`,
          pop: false,
        };
        dt_.unshift(arr);
      }
      this.datax = dt_;
    },
  },
};
</script>

<style></style>
