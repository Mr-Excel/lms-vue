<template>
  <div>
    <MenuIcon :dt="data" />
  </div>
</template>

<script>
import MenuIcon from "@/components/Icon";

export default {
  title: "Home | HRMS",
  components: {
    MenuIcon,
  },
  data() {
    return {
      data: [
        {
          path: "/leaves",
          icon: "event",
          name: "Leaves",
          pop: false,
        },
        {
          path: "/employee/new",
          icon: "add",
          name: "New Employee",
          pop: true,
        },
        {
          path: "/employees",
          icon: "people",
          name: "Employee Management",
          pop: true,
        },
        {
          path: "/notifications",
          icon: "notifications",
          name: "Notifications",
          pop: true,
        },
        {
          path: "/settings",
          icon: "settings",
          name: "Settings",
          pop: false,
        },
      ],
    };
  },
};
</script>

<style></style>
