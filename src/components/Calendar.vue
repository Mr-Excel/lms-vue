<template>
  <div class="container">
    <div class="row seven-cols">
      <div
        class="col-md-1 "
        v-for="d in data.days"
        :key="d"
        @click="clicked(d, data.month, data.year)"
      >
        <span v-if="d === 0"> </span>
        <span v-else>
          {{ d }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { months, days } from "@/data/dt";
export default {
  name: "Calendar",
  data() {
    return {
      show: true,
      data: [],
    };
  },
  methods: {
    getDaysArray(start, end) {
      var days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednusday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      for (
        var arr = [], dt = new Date(start);
        dt <= end;
        dt.setDate(dt.getDate() + 1)
      ) {
        var dt_ = new Date(dt);
        var obj = {
          date: dt_,
          day: days[dt_.getDay()],
          weekDay: dt_.getDay(),
        };

        arr.push(obj);
      }
      this.appending(arr);
      return arr;
    },
    check(sd, ed) {
      const firstWeekDay = sd.getDay();
      const lastDay = ed.getDate();
      const month = sd.getMonth() + 1;
      const year = sd.getFullYear();
      const filterVal = "_" + firstWeekDay + lastDay;
      const ret = this.search(filterVal, days, "type");
      console.log(year, month);
      const output = {
        month,
        year,
        days: ret.val,
      };
      this.data = output;
      // for (let i = 0; i < ret.val.length; i++) {
      //   if (ret.val[i] === 0) {
      //     this.data.push(0);
      //   } else {
      //     const date = new Date(year + "-" + month + "-" + ret.val[i]);
      //     this.data.push(date);
      //   }
      // }
    },
    clicked(d, m, y) {
      console.log(d, m, y);
    },
    appending(arr) {
      const first = new Date(arr[0].date);
      const last = new Date(arr[arr.length - 1].date);
      this.check(first, last);
    },
    array_move(arr, old_index, new_index) {
      if (new_index >= arr.length) {
        var k = new_index - arr.length + 1;
        while (k--) {
          arr.push(undefined);
        }
      }
      arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
      return arr; // for testing
    },
    search(nameKey, myArray, key) {
      for (var i = 0; i < myArray.length; i++) {
        if (myArray[i][key] === nameKey) {
          return myArray[i];
        }
      }
    },
    createRipple(e) {
      e.target.classList.add("ripple");
      setTimeout(() => {
        e.target.classList.remove("ripple");
      }, 100);
    },
  },
  mounted() {
    const all = this.$el.querySelectorAll(".days");
    console.log(all);
    var dt = new Date();
    var month = dt.getMonth() + 1;
    var year = dt.getFullYear();
    var mmyyyy = month.toString() + year.toString();
    var resultObject = this.search(mmyyyy * 1, months, "mmyyyy");
    var _sd = new Date(resultObject.sd);
    var _ed = new Date(resultObject.ed);
    this.getDaysArray(_sd, _ed);
  },
};
</script>

<style>
.col-md-1 {
  cursor: pointer;
  user-select: none;
  background: rgba(228, 228, 222, 0.7);
  border: 1px solid white;
  height: 90px;
  padding: 30px;
}
.col-md-1:active {
  color: #fff;
  background: var(--fonts);
}
.seven-cols .col-md-1,
.seven-cols .col-sm-1,
.seven-cols .col-lg-1 {
  text-align: center;
}
.days {
  background: lightgray;
  height: 40px;
  width: 40px;
  border-radius: 50%;
}
@media (min-width: 768px) {
  .seven-cols .col-md-1,
  .seven-cols .col-sm-1,
  .seven-cols .col-lg-1 {
    width: 100%;
    *width: 100%;
  }
}

@media (min-width: 992px) {
  .seven-cols .col-md-1,
  .seven-cols .col-sm-1,
  .seven-cols .col-lg-1 {
    width: 14.285714285714285714285714285714%;
    *width: 14.285714285714285714285714285714%;
  }
}

/**
 *  The following is not really needed in this case
 *  Only to demonstrate the usage of @media for large screens
 */
@media (min-width: 1200px) {
  .seven-cols .col-md-1,
  .seven-cols .col-sm-1,
  .seven-cols .col-lg-1 {
    width: 14.285714285714285714285714285714%;
    *width: 14.285714285714285714285714285714%;
  }
}
</style>
