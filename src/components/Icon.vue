<template>
  <div class="icons-parent">
    <router-link
      ref="link"
      :to="i.path"
      class="big-link"
      v-for="i in data"
      :key="i"
    >
      <div class="icons-main" :style="` background: ${colorPicker()}`">
        <div class="notif-icons" v-if="i.pop"></div>
        <span class="material-icons-outlined icon">
          {{ i.icon }}
        </span>
      </div>
      {{ i.name }}
    </router-link>
  </div>
</template>

<script>
export default {
  name: "MenuIcon",
  props: {
    dt: Object,
  },
  data() {
    return {
      data: this.dt,
      cols: [
        "linear-gradient(90deg,rgba(63, 94, 251, 1) 0%,rgba(252, 70, 107, 1) 90%)",
        "linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 90%)",
        "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,79,121,1) 35%, rgba(0,212,255,1) 90%)",
        "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 90%)",
        "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 90%)",
      ],
    };
  },
  mounted() {},
  methods: {
    getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    colorPicker() {
      // let random = this.getRandomInt(0, this.cols.length - 1);
      return this.cols[4];
    },
  },
};
</script>

<style>
.icons-parent {
  position: relative;
  display: inline-flex;
  flex-wrap: wrap;
  text-align: center;
}
.notif-icons {
  top: -5px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: red;
  position: absolute;
  right: -5px;
  z-index: 1;
  box-shadow: 0 0 10px black;
}
.icons-main {
  cursor: pointer;
  margin: 7px;
  position: relative;
  width: 150px;
  height: 150px;
  font-size: 75px;
  border-radius: 10px;
  padding: 31px;
}
.icons-main:hover {
  box-shadow: 0 0 10px 0 grey;
  /* font-size: 100px; */
  -webkit-transition: all 200ms ease-in;
  -webkit-transform: scale(1.1);
  -ms-transition: all 200ms ease-in;
  -ms-transform: scale(1.1);
  -moz-transition: all 200ms ease-in;
  -moz-transform: scale(1.1);
}
.icon {
  transition: 0.5s ease;
  position: relative;
  color: white;
  font-size: inherit;
}
</style>
