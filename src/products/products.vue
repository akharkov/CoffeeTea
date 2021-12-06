

<template>
<section  class='container goods '>
    <div  class="goodsTitle ">


    </div>

    <div class="row justify-content-around goodsBody">
        <product_card v-for="Item in products" :key="Item.id" :Item="Item" > 


        </product_card>
    </div>
</section>    
    
</template>

<script>
    import product_card from "./product_card.vue";


    export default {
        components: {product_card
        },
        created() {
            for (let i = 0; i < 30; i++) { 
                // выведет 0, затем 1, затем 2
                this.products.push({
                    cardId:i,
                    productType:"Prod"+i,
                    productId:"productId"+i,
                    productTitle:"Продукт № "+i,
                    productPic:"../src/img/coffee/coffee"+(i+1)+".jpg",            
                    productProp:i+") очень вкусный",
                    productCost:i*100.3,
                    productEnable:true,
                    productPromo:false
                });
            };
            console.log(this.products);

        },
        data : function() {
            return {
                products:[]
            }
        }
    
}
</script>

<style scoped>

.goods{
    height: 95vh;

  }

  .goodsTitle{
    height: 20%;
    box-shadow: gray;
    background-color: rgba(240, 247, 240, 0.3);

    border-radius: 25px;
    margin: 1%;
  }
  .goodsBody{
    height: 75%;
    box-shadow: gray;
    background-color: rgba(240, 247, 240, 0.3);

    border-radius: 25px;
    margin: 1%;
    overflow-y: scroll;
  }



</style>