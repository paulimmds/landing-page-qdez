<template>
  <div id="main-container">
    <h1>SOBRE NÓS</h1>
    <div class="box one">
      <div class="content">
        <p>Nossa família nasceu em 2009, formada por nove estudantes do curso de eng.civil da ufscar que se uniram para 
        dividir os custos da vida universitária.</p>  
        <p>Essa família cresceu, se diversificou e desde então dividimos vários 
        momentos e histórias que fazem desse período um dos melhores de nossa vida.</p>
      </div>
      <img src="../assets/foto-moradores.jpeg" alt="">
    </div>
    <div class="box two">
      <div class="content">
        <p>Estamos localizados na regiao universitária da cidade, bem próximos a USP, pontos de ônibus, supermercados, 
          farmácias, postos de gasolina e restaurantes.</p>
        <p>Nossa casa possui cinco quartos e três banheiros que acomodam atualmente 08 moradores.</p>
        <p>Além disso, temos três salas, um escritório, sacada, churrasqueira, quintal e duas garagens que comportam até 
          quatro carros.</p>
      </div>

      <img src="../assets/foto-moradores.jpeg" alt="">
    </div>
    <div class="box three">
      <div class="content">
        <p>Morar com a gente não é só dividir o aluguel, é dividir experiência e os momentos bons e ruins do dia a dia, 
          além das amizades que construímos ao longo do tempo.</p>
        <p>Tradicionalmente, realizamos anualmente eventos para tanto para os ex-moradores, quanto para os parentes dos
           moradores, afim de manter a aproximação das diferentes gerações da república.</p>
      </div>
      <img src="../assets/foto-moradores.jpeg" alt="">
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

h1 {
  font-size: 3em;
  text-align: center;
}


img {
  max-width: 100%;
  object-fit: cover;
  border-radius: .5em;
}

.content {
  background-color: grey;
  border-radius: .5em;
  padding: .5em;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

p {
  font-size: 1.2em;
  text-align: justify;
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