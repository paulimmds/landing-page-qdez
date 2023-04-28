<template>
  <div id="main-container">
    <h1>Moradores</h1>
    <div class="morador">
      <img src="../assets/foto-moradores.jpeg" alt="">
      <div class="content">
        <h2>Traubim</h2>
        <p><span>Nome:</span> Paulo H.</p>
        <p><span>Curso:</span> Biotecnologia</p>
        <p><span>Ano:</span> 2020</p>
      </div>
    </div>
    <div class="morador">
      <img src="../assets/foto-moradores.jpeg" alt="">
      <div class="content">
        <h2>Traubim</h2>
        <p><span>Nome:</span> Paulo H.</p>
        <p><span>Curso:</span> Biotecnologia</p>
        <p><span>Ano:</span> 2020</p>
      </div>
    </div>
    <div class="morador">
      <img src="../assets/foto-moradores.jpeg" alt="">
      <div class="content">
        <h2>Traubim</h2>
        <p><span>Nome:</span> Paulo H.</p>
        <p><span>Curso:</span> Biotecnologia</p>
        <p><span>Ano:</span> 2020</p>
      </div>
    </div>
    <div class="morador">
      <img src="../assets/foto-moradores.jpeg" alt="">
      <div class="content">
        <h2>Traubim</h2>
        <p><span>Nome:</span> Paulo H.</p>
        <p><span>Curso:</span> Biotecnologia</p>
        <p><span>Ano:</span> 2020</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductList',
  data() {
    return {
      h2Content: '',
      h3Content: '',
    };
  },
  async created() {}
};
</script>


<style scoped>

#main-container {
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 1em;
  color: white;
  margin-block: 1em;
}

h1 {
  font-size: 3em;
  font-weight: bolder;
  text-align: center;
}

.morador {
  background-color: var(--bg-secondary-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 0 1em 1em 0em;
  box-shadow: 0px 0px 20px 0px rgb(0, 0, 0);
}

.morador:nth-child(odd) img {
  order: 1;
}
.morador:nth-child(odd) {
  border-radius: 1em 0 0 1em;
}

.content {
  flex-grow: 2;
  display: flex;
  flex-direction: column;
  gap: .5em;
  align-items: center;
}

.content span {
  font-weight: bold;
}

h2 {
  font-size: 2em;
  text-align: center;
  text-shadow: 5px 2px 10px #000000;
}

img {
  max-width: 40%;
  flex-grow: 1;
  object-fit: cover;
}

@media (min-width: 830px) {

  #main-container {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  h1 {
    width: 100%;
  }

  .morador {
    width: 40%;
    border-radius: 1em;
  }

  .morador img {
    overflow: hidden;
  }

  .morador img {
    border-radius: 1em 0 0 1em ;
  }

  .morador:nth-child(odd) {
    border-radius: 1em;
  }
  .morador:nth-child(odd) img {
    border-radius: 0 1em 1em 0;
  }
  .content {
    background: none;
  }
  
}
</style>