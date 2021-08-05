<template>
  <div>
    <MenuIcon :dt="data" />
  </div>
</template>

<script>
import MenuIcon from "@/components/Icon";

export default {
  title: "Admin Panel | HRMS",
  components: {
    MenuIcon,
  },
  data() {
    return {
      data: [
        {
          path: "/admin/employee/new",
          icon: "person_add",
          name: "New Employee",
          pop: false,
        },
        {
          path: "/admin/employees",
          icon: "people",
          name: "Employee Management",
          pop: false,
        },
      ],
    };
  },
};
</script>

<style></style>
