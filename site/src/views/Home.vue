<template>
  <div id="main-container">
    <div class="box-container">
      <div class="content">
        <h1>Olá, somos a Quase Dez!</h1>
        <p>Uma república universitária formada por estudantes da USP e UFSCar.</p>
        <div class="buttons">
          <button>
            <router-link to="/sobre_nos">Conheça-nos</router-link>
          </button>
          <!-- <button id="contact">Contato</button> -->
        </div>
      </div>
      <img src="../assets/foto-churrasco-ex-moradores.jpeg" alt="Foto dos moradores e agregados da república.">
    </div>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3699.2154034053724!2d-47.89889952536277!3d-22.003056079901338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b871b07b8487e9%3A0x10eb80a335820816!2sRep%C3%BAblica%20Quase%20Dez!5e0!3m2!1spt-BR!2sbr!4v1682613695100!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  </div>
</template>

<script>
export default {
  name: 'ProductList',
  data() {
    return {
      h1Content: '',
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
  color: white;
  width: 90%;
  margin: auto;
  gap: 2em;
  justify-content: space-around;
  margin-block: 1em;
}

.box-container, 
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
}

.content h1 {
  font-size: 3em;
  font-weight: bolder;
  text-align: center;
}

.content p {
  font-size: 1.5em;
  font-weight: bold;
  text-align: center;
}

.buttons {
  display: flex;
  gap: 2em;
}
.buttons button {
  color: white;
  font-size: 1em;
  font-weight: bolder;
  background-color: var(--bg-secondary-color);
  border: 2px solid white;
  border-radius: .5em;
  box-shadow: 0px 0px 20px 0px white;
  padding: .5em;
  text-align: center;
}

img, iframe {
  max-width: 100%;
  object-fit: cover;
  border-radius: .5em;
}

@media (min-width: 700px) {
  .box-container {
    flex-direction: row;
  }

  img {
    max-width: 50%;
  }

  iframe {
    width: auto;
  }
}

</style>