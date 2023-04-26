<template>
  <div id="top-header-container">
    <router-link to="/">
      <img src="../assets/name_wb.png" alt="Name" id="name" />
    </router-link>
    <router-link to="/">
      <img src="../assets/logo.png" alt="Logo" id="logo" />
    </router-link>
    <ul id="icon-list">
      <a href="https://www.facebook.com/quasedez">
        <img src="../assets/facebook.png" alt="Facebook" id="facebook" />
      </a>
      <a href="https://www.instagram.com/repquasedez/">
        <img src="../assets/instagram.png" alt="Instagram" id="instagram" />
      </a>
    </ul>
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
  justify-content:space-between;
  align-items: center;
  height: 200px;
  width: 100%;
  padding: 10px 3% 5px -3%;
  color: var(--txt-secondary-color);
}

#logo {
  height: 180px;
  position:relative;
  align-content: center;
}

#name {
  width: 250px;
}

#icon-list {
  display: flex;
  position: relative;
  justify-content: right;
  flex-direction: column;
  width: 250px;
}

#face, #insta {
  display: flex;
  flex-direction: row;
}

#instagram {
  width: 40px;
}

#facebook {
  width: 50px;
  position: relative;
  left: -5px
}

@media (max-width: 800px) {
  #logo {
    display: flex;
  }
}
</style>
