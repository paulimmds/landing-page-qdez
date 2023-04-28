<template>
  <div id="main-container">
    <div class="box one">
      <div class="content">
        <h1>SOBRE NÓS</h1>
        <div class="parag">
          <p>Nossa família nasceu em 2009, formada por nove estudantes do curso de Engenharia Civil da UFSCar que se uniram para 
          dividir os custos da vida universitária.</p>
          <p>Essa família cresceu, se diversificou e desde então dividimos vários 
          momentos e histórias que fazem deste período um dos melhores de nossa vida.</p>
        </div>
        <button>
          <router-link to="/moradores">Conheça nossos moradores</router-link>  
        </button>
      </div>
     <img src="../assets/foto-churrasco-dos-pais.jpeg" alt="">
    </div>
    <div class="box two">
      <div class="content">
        <h2>NOSSA CASA</h2>
        <div class="parag">
          <p>Estamos localizados na região universitária da cidade, bem próximos a USP, pontos de ônibus, supermercados, 
            farmácias, postos de gasolina e restaurantes.</p>
          <p>Nossa casa possui cinco quartos e três banheiros que acomodam atualmente 08 moradores.</p>
          <p>Além disso, temos três salas, um escritório, sacada, churrasqueira, quintal e duas garagens que comportam até 
            quatro carros.</p>
        </div>
      </div>

      <img src="../assets/foto-frente-casa.jpeg" alt="">
    </div>
    <div class="box three">
      <div class="content">
        <h3>TRADIÇÃO</h3>
        <div class="parag">
          <p>Morar com a gente não é só dividir o aluguel, é dividir experiência e os momentos bons e ruins do dia a dia, 
            além das amizades que construímos ao longo do tempo.</p>
          <p>Tradicionalmente, realizamos anualmente eventos para tanto para os ex-moradores, quanto para os parentes dos
             moradores, afim de manter a aproximação das diferentes gerações da república.</p>
        </div>
        <!-- <button>
          <router-link to="/contato">Entre em contato com a gente</router-link>
        </button> -->
      </div>
      <img src="../assets/foto-churrasco-gramado.jpeg" alt="">
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
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: auto;
  color: white;
  gap: 2em;
  justify-content: center;
  margin-block: 1em;
}

h1, h2, h3 {
  font-size: 3em;
  text-align: center;
  align-self: center;
  width: 100%;
  text-shadow: 5px 2px 10px #2D8C00;
}

button {
  color: white;
  font-size: 1em;
  font-weight: bolder;
  border: 2px solid white;
  border-radius: .5em;
  box-shadow: 0px 0px 20px 0px white;
  background-color: var(--bg-secondary-color);
  margin: auto;
  padding: .5em;
  text-align: center;
}

img {
  max-width: 100%;
  object-fit: cover;
  border-radius: .5em;
}

.content {
  padding: .5em;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 1em;
}

p {
  font-size: 1.6em;
  font-weight: bold;
  text-align: justify;
  text-justify: inter-character;
  text-indent: 1.5em;
}

.box {
  display: flex;
  flex-direction: column;
  gap: 1em;
  justify-content: space-between;
}

@media (min-width: 700px) {
  .box {
    flex-direction: row;
  }

  p {
    text-align: center;
    text-indent: 0;
  }

  img {
    max-width: 50%;
  }

  .two img {
    order: 0;
  }

  .two .content {
    order: 1;
  }
}

</style>