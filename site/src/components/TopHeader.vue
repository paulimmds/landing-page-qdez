<template>
  <div id="top-header-container">
    <router-link to="/">
      <img src="../assets/logo.png" alt="Logo" id="logo" />
    </router-link>
  </div>
</template>


<script>
export default {
  name: 'TopHeader',
};
</script>


<style scoped>
#top-header-container {
  display:flex;
  justify-content:center;
  height: 150px;
  width: 100%;
  color: var(--txt-secondary-color);
}

#logo {
  max-height: 90%;
  margin-block: auto;

}

@media (max-width: 800px) {
}
</style>
