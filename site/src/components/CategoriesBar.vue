<template>
  <div id="categories-container">
    <ul id="categories-list">
      <div class="list"><li><router-link to="/">Início</router-link></li></div>
      <div class="list"><li><router-link to="/sobre_nos">Sobre Nós</router-link></li></div>
      <div class="list"><li><router-link to="/moradores">Moradores</router-link></li></div>
    </ul>
  </div>
</template> 


<script>
export default {
  name: 'CategoriesBar',
};
</script>


<style scoped>

#categories-list {
  background-color: var(--bg-secondary-color);
  height: 50px;
  list-style-type: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
}

#categories-list .list {
  display: flex;
  justify-content: center;
  width: calc(100% / 3);
  text-transform: uppercase;
  font-size: 1em;
  font-weight: bold;
  letter-spacing: 1px;
  color: var(--txt-primary-color);
}

#categories-list li:hover {
  color: var(--txt-quaternary-color);
}

</style>
