<template>
  <div id="page-location-container">
    <div id="page-location">
      <div v-for="page in location" :key="page.id">
        <router-link :to="page.path">{{
          page.name + `${page.id !== location.length - 1 ? ' >' : ''}`
        }}</router-link
        >&nbsp;
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'PageLocation',
  props: {
    location: {
      default: [],
    },
  },
};
</script>


<style scoped>
#page-location {
  display: flex;
  margin-left: 3%;
  flex-wrap: wrap;
}

#page-location div {
  color: var(--txt-terciary-color);
}
</style>