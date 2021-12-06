<template>
    <div class="newsCard">

        
    </div>
    
 
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
                newsTitle:"",
                newsBody:"Ну очень интересно "
                    +"Lorem ipsum dolor sit,"
                    +"amet consectetur adipisicing elit."
                    +"Corrupti nemo eaque totam eos,"
                    +"dignissimos sint molestias ullam a"
                    +"consequatur officiis illo nisi quae eum",
                newsEnable:1, 
                newsDateBegin:Date.now, 
                newsDateEnd:Date.now,
                newsCreated:Date.now
                
                

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
    .newsCard{
        height: 20%;
        box-shadow: gray;
        background-color: rgba(240, 247, 240, 0.3);

        border-radius: 25px;
        margin: 1%;

    }

        

</style>