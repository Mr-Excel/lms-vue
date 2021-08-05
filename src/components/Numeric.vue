<template>
  <div class="numericBtnMain">
    <div class="lbl">
      {{ lbl }}
    </div>
    <div class="numericBtn">
      <button class="btn btn-danger" @click="decrement">
        <span class="material-icons-outlined">
          remove
        </span>
      </button>
      <div class="content">
        {{ num }}
      </div>
      <button class="btn btn-success " @click="increment">
        <span class="material-icons-outlined">
          add
        </span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      default: 0,
    },
    label: {
      type: String,
      default: '',
    },
    disable: {
      type: Number,
    },
  },
  mounted() {
    this.num = this.value;
    this.lbl = this.label;
  },
  data() {
    return {
      num: 0,
      lbl: 0,
    };
  },
  methods: {
    decrement() {
      const num = this.num;
      if (num > 0) {
        this.num = num - 1;
      }
      this.$emit('returnValue', this.num);
    },
    increment() {
      if (this.disable !== 1) {
        const num = this.num;
        this.num = num + 1;
        this.$emit('returnValue', this.num);
      } else {
        const num = this.num;
        this.num = num;
        this.$emit('returnValue', this.num);
      }
    },
  },
};
</script>

<style>
.numericBtnMain {
  left: 35%;
  position: relative;
  display: grid;
  line-height: 1.5;
  width: 140px;
}
.numericBtnMain .lbl {
  position: relative;
  width: 100%;
  text-align: center;
  font-weight: 700;
  /* background: lightgray; */
  border-radius: 15px;
  box-shadow: 0 0 10px 0 gray;
  padding: 10px;
  margin-bottom: 20px;
}
.numericBtn {
  position: relative;
  width: 100%;
  display: inline-flex;
}
.numericBtn > button {
  width: 40px !important;
  height: 40px;
  padding: 7px;
  margin: 0;
}
.numericBtn > .content {
  width: 60px;
  text-align: center;
  font-size: 20px;
  padding: 5px;
}
</style>
