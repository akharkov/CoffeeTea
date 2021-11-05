

<template>
<section  class='container goods '>
        <div  class="goodsTitle ">


        </div>

            <div class="goodsBody"> 
        <div class="row ">
              <product_card> </product_card>
             <product_card> </product_card>
                          <product_card> </product_card>
                                       <product_card> </product_card>
                                                    <product_card> </product_card>              
            
        </div>
    </div>   
       
        






        
    </section>    
    
</template>

<script>
import product_card from "./product_card.vue"
    export default {
        components: {product_card
        },
        data : function() {
            return {
                mess: "fff"
            }
        }
    
}
</script>

<style scoped>

</style>