<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="notif-main">
          <div class="notif-card" v-for="i in data" :key="i">
            <div class="msg">
              {{ i.msg }}
            </div>
            <div class="time">
              {{ getTimeDiff(i.time) }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          id: 1,
          msg: "hey",
          time: "2020-11-01",
        },
        {
          id: 1,
          msg: "hey",
          time: "2020-12-01",
        },
        {
          id: 1,
          msg: "hey",
          time: "2021-01-01",
        },
      ],
    };
  },
  methods: {
    getTimeDiff(time) {
      const date1 = new Date(time);
      const date2 = new Date();
      const diffTime = Math.abs(date2 - date1);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      console.log(diffTime + " milliseconds");
      console.log(diffDays + " days");
      return Date(time);
    },
  },
};
</script>

<style>
.notif-main {
  position: relative;
  display: grid;
}
.notif-card {
  margin: 10px;
  cursor: pointer;
  position: relative;
  display: grid;
  transition: 0.5s all;
  background: rgba(211, 211, 211, 0.445);
}
.notif-card:hover {
  background: #f7762731;
}
.msg {
  position: relative;
  width: 100%;
  padding: 10px;
  font-weight: 700;
}
.time {
  position: relative;
  width: 100%;
  padding: 10px;
}
</style>
