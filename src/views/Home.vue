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
          pop: true,
        },
        {
          path: "/employee/new",
          icon: "person_add",
          name: "New Employee",
          pop: false,
        },
        {
          path: "/employees",
          icon: "people",
          name: "Employee Management",
          pop: false,
        },
        {
          path: "/notifications",
          icon: "notifications",
          name: "Notifications",
          pop: true,
        },
        {
          path: "/password/update",
          icon: "lock",
          name: "Password Change",
          pop: false,
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
