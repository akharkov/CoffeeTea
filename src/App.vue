<template>
  <div id="app">
    <section_promo> </section_promo>
    <products> </products> 
  </div>
</template>

<script>
  //1 (!) подключение внешних компонентов
  import section_promo from './promo/section_promo.vue';
  import products from './products/products.vue';

  export default {
    // 2 (!) регистрируем доп.компонент внутри верхнеуровневого компонента
    components:{
      section_promo ,       products
    },
    name: 'app',
    data () 
    {
      return {   
          mess:"Здесь будет вкусно-чайно",
          
      }
    },
    methods:{
        
         
      }
  }




</script>

<style>


#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: rgba(200,200,200,0.1);
 /*  margin-top: 60px; */
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
