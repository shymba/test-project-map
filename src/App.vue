<template>
  <Navbar></Navbar>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
export default {
  components: {Navbar}
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: linear-gradient(45deg, rgba(255,0,0,0), rgba(147 98 125));
}

.app {
  padding: 15px;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}

</style>