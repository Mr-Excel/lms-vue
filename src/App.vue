<template>
  <NavBar />
  <main>
    <router-view />
  </main>
</template>

<script>
import NavBar from '@/components/NavBar';
export default {
  name: 'App',
  components: { NavBar },
};
</script>

<style>
:root {
  --fonts: #2c3e50;
  --official: #f37021;
  --secondary: grey;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--fonts);
}
main {
  position: relative;
  top: 70px;
  padding: 15px;
}
@import '~bootstrap/dist/css/bootstrap.css';
</style>
