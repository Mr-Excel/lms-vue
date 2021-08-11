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
      ],
    };
  },
  mounted() {
    const role = sessionStorage.getItem("role");
    if (role == "admin") {
      const admin = {
        path: "/admin",
        icon: "admin_panel_settings",
        name: "Admin Panel",
        pop: false,
      };
      this.data.push(admin);
    }
  },
};
</script>

<style></style>
