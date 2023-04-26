<template>
  <div class="test-container">
    <TopHeader />
    <CategoriesBar />
    <router-view />
    <Footer />
  </div>
</template>


<script>
import TopHeader from './components/TopHeader.vue';
import CategoriesBar from './components/CategoriesBar.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    TopHeader,
    CategoriesBar,
    Footer,
  },
};
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css');

:root {
  --bg-primary-color: white;
  --bg-secondary-color: rgb(0, 180, 60);
  --bg-terciary-color: rgb(0, 190, 255);
  --bg-quaternary-color: white;
  --txt-primary-color: white;
  --txt-secondary-color: rgb(0, 180, 60);
  --txt-terciary-color: rgb(0, 190, 255);
  --txt-quaternary-color: black;
  --background-image: url("assets/background-opac.png");
}

* {
  margin: 0;
  padding: 0;
  text-decoration: none;
  color: inherit;
  background-color: inherit;
    font-family: 'Roboto', sans-serif;
}


html {
  background-image: var(--background-image);
  background-attachment: fixed;
  width: 100%;
  height: 100%;
}

.yellow {
  color: yellow;
}

.gray {
  color: gray;
}
</style>
