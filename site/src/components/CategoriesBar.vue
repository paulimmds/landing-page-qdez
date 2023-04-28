<template>
  <div id="categories-container">
    <ul id="categories-list">
      <li><router-link to="/">Início</router-link></li>
      <li><router-link to="/sobre_nos">Sobre Nós</router-link></li>
      <li><router-link to="/moradores">Moradores</router-link></li>
    </ul>
  </div>
</template> 


<script>
export default {
  name: 'CategoriesBar',
};
</script>


<style scoped>
#categories-container{
  width: 100%;
}

#categories-list {
  background-color: var(--bg-secondary-color);
  height: 50px;
  list-style-type: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
}

#categories-list li {
  text-transform: uppercase;
  font-size: 1em;
  font-weight: bold;
  letter-spacing: 1px;
  color: var(--txt-primary-color);
}
</style>
