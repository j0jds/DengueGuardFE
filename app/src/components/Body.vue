<template>
  <div>
    <h1>Lista de Itens</h1>
    <ul>
      <li v-for="item in items" :key="item.id">{{ item.name }}</li>
    </ul>
  </div>
</template>
  
  <script>
import { getItems } from '@/services/api';

export default {
      name: 'AppBody',
      data() {
    return {
      items: [],
    };
  },
  async created() {
    this.items = await getItems();
  },

  async mounted() {
  this.items = await getItems();
  console.log("Itens carregados:", this.items); 
}

  };
  </script>
  
  <style scoped>
  body {
    background-color: whitesmoke;
    color: black;
    padding: 10px;
    text-align: center;
    padding: 200px;
  }
  </style>
  