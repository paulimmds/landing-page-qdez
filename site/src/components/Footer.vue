<template>
  <footer>
    <div class="icons">
      <img src="../assets/instagram.png" alt="">
      <img src="../assets/facebook.png" alt="">
    </div>
    <p>
      Telefone | Whatsapp <br>
      Matheus – (62) 99192-1546<br>
      Matheus – (62) 99192-1546
    </p>
    <p>
      Email: repquasedez@gmail.com<br>
      Rua dos Inconfidentes, 371<br>
      CEP: 13566-581 | São Carlos - SP
    </p>
  </footer>
</template>


<script>
export default {
  name: 'Footer',
};
</script>


<style scoped>

footer {
  position: static;
  bottom: 0;
  background-color: var(--bg-secondary-color);
  display: flex;
  gap: .5em;
  width: 100%;
  color: var(--txt-primary-color);
  font-size: .7em;
  justify-content: space-around;
  padding: .5em;
  align-items: center;
}

.icons{
  display: flex;
  flex-direction: column;
  gap: .5em;
  width: 10%;
}

img {
  width: 2em;
  object-fit: cover;
}
/* footer {
  background-color: var(--bg-secondary-color);
  display: flex;
  flex-flow: column;
  width: 100%;
  position: relative;
  bottom: 0;
  color: var(--txt-primary-color);
}

#footer-top {
  display: flex;
  position: relative;
  justify-content: center;
  margin-top: 15px;
}

#footer-top p{
  text-align: center;
  font-weight: bold;
  line-height: 175%;
}

#footer-low {
  display: flex;
  position: relative;
  justify-content: center;
  margin-top: 15px;
}

#instagram {
  width: 40px;
  position: relative;
  bottom: -5px;
}

#facebook {
  width: 50px;
}

@media (max-width: 700px) {
  footer {
    flex-direction: column;
  }
  #footer-top,
  #footer-low {
    width: 100%;
    margin: auto;
  }
  #footer-low {
    margin-top: 30px;
    justify-content: space-between;
    flex-direction: row;
  }
} */
</style>