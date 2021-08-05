<template>
  <div>
    <MenuIcon :dt="data" />
  </div>
</template>

<script>
import MenuIcon from "@/components/Icon";

export default {
  components: {
    MenuIcon,
  },
  data() {
    return {
      data: [
        {
          path: "/leaves/new",
          icon: "add",
          name: "Apply For Leaves",
          pop: false,
        },
        {
          path: "/leaves/applied",
          icon: "dones",
          name: "Applied Leaves",
          pop: true,
        },
        {
          path: "/leaves/qouta",
          icon: "more_vert",
          name: "Leave Qouta",
          pop: true,
        },
      ],
    };
  },
};
</script>

<style></style>
