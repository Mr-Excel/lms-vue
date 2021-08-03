<template>
  <div class="inputForm">
    <label :for="id">{{ label }}</label>
    <input :type="type" :name="name" :id="id" :placeholder="placeholder" />
    <small class="warning">{{ msg }}</small>
  </div>
</template>

<script>
export default {
  name: "Textbox",
  props: {
    type: {
      type: String,
      default: "text",
    },
    name: String,
    id: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      msg: "Required",
    };
  },
  methods: {},
};
</script>

<style></style>
