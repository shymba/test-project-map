<template>
  <div class="navbar">
    <div class="nav-pages">
      <button class="btn" @click="$router.push('/')">main page</button>
      <button class="btn" @click="$router.push('/map')">map page</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar"
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn  {
  font-size: 16px;
  padding: 10px 15px;
  margin-right: 10px;
  cursor: pointer;
  background-color: transparent;
  border: 2px solid #966680;
  border-radius: 10px;
}

</style>