<template>
  <div>
    <NavBar />
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar';
export default {
  name: 'App',
  components: { NavBar },
  data() {
    return {
      ctrlDown: false,
      ctrlKey: 17,
      nKey: 78,
      bksKey: 8,
    };
  },
  created() {
    document.onkeydown = this.historyBack;
  },
  methods: {
    events(k) {
      if (!this.ctrlDown) {
        if (k == this.ctrlKey) {
          this.ctrlDown = true;
        } else if (k === 8) {
          this.$router.go(-1);
        }
      } else {
        if (k == this.nKey) {
          this.$router.push('/leaves/new');
        } else {
          this.ctrlDown = false;
        }
      }
    },
    historyBack(e) {
      this.events(e.keyCode);
    },
  },
};
</script>

<style>
:root {
  --fonts: #2c3e50;
  --official: #f37021;
  --secondary: grey;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--fonts);
}
button {
  width: 100px !important;
}
main {
  position: relative;
  top: 70px;
  padding: 15px;
}

.inputForm {
  display: grid;
}
.inputForm label {
  margin-bottom: 5px;
}
.download {
  position: relative;
  width: 40px !important;
  height: 40px;
  padding: 7px;
  float: right;
}
input {
  border: 1px solid lightgray;
  /* width: 300px; */
  padding: 10px;
  padding-left: 15px;
  padding-right: 15px;
  border-radius: 5px;
  transition: 0.6s all;
  outline: none;
}
select {
  border: 1px solid lightgray;
  /* width: 300px; */
  padding: 10px;
  padding-left: 15px;
  padding-right: 15px;
  border-radius: 5px;
  transition: 0.6s all;
  outline: none;
}
select:hover {
  box-shadow: 0 0 5px grey;
}
select:focus {
  box-shadow: 0 0 5px var(--official);
}
.warning {
  position: relative;
  bottom: -2px;
  left: 5px;
  font-size: 10px;
}
input:hover {
  box-shadow: 0 0 5px grey;
}
input:focus {
  box-shadow: 0 0 5px var(--official);
}
a,
a:hover {
  text-decoration: none;
  color: inherit;
}
.center {
  text-align: center !important;
}
.table-responsive {
  overflow-x: auto;
  overflow: hidden;
}
@import '~bootstrap/dist/css/bootstrap.css';
</style>
