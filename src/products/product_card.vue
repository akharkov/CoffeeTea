

<template>
    
            <div id="mainCardDiv" class="col-12 col-sm-12 col-md-4 col-lg-3 col-xl-2">
                <div class="row">
                    <div id="cardLogo" class="col-3" :style="{'background-image':'url('+Item.productPic+')'}"  >
                         
                    </div>
                    <div id=CardTitle class="col-9"> 
                        {{Item.productProp}}
                        
                    </div>

                </div>
                <div class="row">

                    {{productProp}}
                </div>

                <button> Подробнее </button>

                     
            </div>   
            
</template>

<script>

export default {
    props:{Item: Object},
    data: function( ){
    
        return{
             cardId:"",
            productType:"",
            productId:"",
            productTitle:"", 
            productPic:"",            
            productProp:"Jочень вкусный",
            productCost:0.00,
            productEnable:true,
            productPromo:false 

        }
    }
    
    
}

</script>

<style scoped>
#mainCardDiv{
    margin: 3px;
    border-radius: 10px;
    background-color: rgba(100,200, 200, 0.5);
     box-shadow: gray;
}

 #cardLogo{
     
     /* background: url("../img/coffee/coffee1.jpg") no-repeat center top; */
      height: 50px;
      width: 50px; 
  
    margin: 3%;
    background-size: cover;
    border-radius: 20%;
 }

img {
  min-width: 100%;
    
    }

</style>