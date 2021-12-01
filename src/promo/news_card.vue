<template>

    
 
</template>

<script>

export default {
    props:{Item: Object},
    data: function( ){
    
        return{
            cardStyle:{},
            clickCount:0,
            cardData:{
                cardId:"",
                productType:"",
                productId:"",
                productTitle:"", 
                productPic:"",            
                productProp:"Ну очень вкусный "
                    +"Lorem ipsum dolor sit,"
                    +"amet consectetur adipisicing elit."
                    +"Corrupti nemo eaque totam eos,"
                    +"dignissimos sint molestias ullam a"
                    +"consequatur officiis illo nisi quae eum",
                productCost:0.00,
                productEnable:true,
                productPromo:false 
            }

        }
    },
    created(){

    },
    filters: {
        truncate: function (text, length, suffix) {
            if (text.length > length) {
                return text.substring(0, length) + suffix;
            } else {
                return text;
            }
        },
    },
    computed:{
        card_Style(){
        this.matchHeight();
        return this.cardStyle;
        }  //сюда положим вычисляемые стили карты продукта

    },
    methods: {
        
    },
    mounted() {
        
        
    }
    
    
}

</script>

<style scoped>


        

</style>