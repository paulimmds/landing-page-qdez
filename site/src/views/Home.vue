<template>
  <div id="product-list-container">
    <h1>{{ h1Content }}</h1>
    <h3>{{ h3Content }}</h3>
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
  async created() {
    this.h1Content = 'INÍCIO';
    this.h3Content = 'Os nossos produtos e serviços mais vendidos';
  }
};
</script>


<style scoped>
#product-list-container {
  min-height: calc(100vh - 300px);
}

h1,
h3 {
  text-align: center;
}

h1 {
  font-weight: 600;
  margin-bottom: 5px;
  color: var(--txt-primary-color);
}

h3 {
  font-weight: 500;
  margin-bottom: 20px;
  color: var(--txt-primary-color);
}

#products {
  display: flex;
  justify-content: center;
  text-align: center;
  margin: 20px;
  flex-wrap: wrap;
  list-style-type: none;
}
</style>