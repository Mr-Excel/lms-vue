<template>
  <div>
    <MenuIcon :dt="data" />
  </div>
</template>

<script>
import MenuIcon from '@/components/Icon';

export default {
  title: 'Home | HRMS',
  components: {
    MenuIcon,
  },
  data() {
    return {
      data: [
        {
          path: '/leaves',
          icon: 'event',
          name: 'Leaves',
          pop: false,
        },

        {
          path: '/about',
          icon: 'help',
          name: 'About',
          pop: true,
        },
        {
          path: '/notifications',
          icon: 'notifications',
          name: 'Notifications',
          pop: true,
        },
        {
          path: '/settings',
          icon: 'settings',
          name: 'Settings',
          pop: false,
        },
      ],
    };
  },
};
</script>

<style></style>
