<template>
  <footer>
    <div id="footer-top">
      <p>
        Rua dos Inconfidentes, 371 | E-mail: republicaquasedez@gmail.com<br>
        CEP: 13566-581 | São Carlos - SP
        </p><br>   
    </div>
    <div id="footer-low">
      <a href="https://www.facebook.com/quasedez">
        <img src="../assets/facebook.png" alt="Facebook" id="facebook" />
      </a>
      <a href="https://www.instagram.com/repquasedez/">
        <img src="../assets/instagram.png" alt="Instagram" id="instagram" />
      </a>
    </div>
  </footer>
</template>


<script>
export default {
  name: 'Footer',
};
</script>


<style scoped>
footer {
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
}
</style>