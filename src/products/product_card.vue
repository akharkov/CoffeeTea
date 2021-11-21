<template>

    <div id="main-CardDiv" class=" col-12 col-sm-12 col-md-6 col-lg-4 col-xl-2 " :style="cardStyle" ref="mainCardDiv" >

        <div id="coffee-rangeofgoods01" class="col-12 rangeofgoods">
            
            <div class="row goods_head">

                <div class="good_pic col-3" :style="{'background-image':'url('+Item.productPic+') '}">
                    
                </div>

                <div id=CardTitle class="col-9 good_title  " > 
                    {{cardStyle.height}}
                    {{clickCount}}
                    {{Item.productProp}}
                </div>

                
            </div>
            
            <div class="row good_info">
            
                    {{cardData.productProp | truncate(30, '...')}}
                
                

            </div>

            <button v-on:click ="bClick"  class="good_botton">Подробнее</button>

        </div>

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
        bClick: function(){
            this.clickCount++;
            this.matchHeight();


        },
        matchHeight() {
            var heightString = this.$refs.mainCardDiv.clientWidth + 'px';

//vue.$set(this,cardStyle.height,heightString);
            this.cardStyle.height= heightString; 
            return this.cardStyle;
        },
       updateHeigth: function(){
           this.matchHeight();;
       } 
    },
    mounted() {
        this.matchHeight();
        
    }
    
    
}

</script>

<style scoped>


        #main-CardDiv{
            margin: 3px;
            border-radius: 10px;
            background-color: rgba(100,200, 200, 0.5);
            box-shadow: gray;
            
           /*  max-height:40%; */
            margin-top: 2%;


        }

        

        img {
        min-width: 100%;
            
        }


        .rangeofgoods {
            
            display: block;
            margin: 0.5% ;

            /* height: 250px; */
            width: auto;
            height: 95%;

            border-radius: 10px;
            background-color: rgba(226, 220, 220, 0.8);
            -webkit-box-shadow: 0 10px 10px 5px rgba(0, 0, 0, 0.5);
                    box-shadow: 0 10px 10px 5px rgba(0, 0, 0, 0.5);
            /* float: left; */
            
            padding: 1%;
        }

        .rangeofgoods:hover {
        background-color: gray;
        }

        .rangeofgoods .goods_head {
        padding: 1px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        margin: 1%;
        height: 20%;
        background-color: rgba(177, 171, 171, 0.5);
        position: relative;
        -webkit-box-pack: justify;
            -ms-flex-pack: justify;
        /* justify-content: space-between;
            -ms-flex-line-pack: justify; */
            /* align-content: space-between; */
        /** align-items: center  **/
        }

#cardLogo{
            
            /* background: url("../img/coffee/coffee1.jpg") no-repeat center top; */
            height: 50px;
            width: 50px; 
        
            margin: 3%;
            background-size: contain;
            border-radius: 20%;
        }
        
        .rangeofgoods .goods_head .good_pic {
            border-radius: 5px;
        /* background-size: cover; */
            background-size: contain;
            background-repeat: no-repeat;
            max-height: 100%;

        }

        .rangeofgoods .goods_head .good_pic .good_pic_logo {
        -o-object-fit: cover;
            object-fit: cover;
        width: 100%;
        }

        .rangeofgoods .goods_head .good_title {
       /*  width: 60%; */
            border-radius: 5px;
            max-height: 100%;
            font-size: 80%;


        }

        .rangeofgoods .good_info {
        display: block;
        /** width: 100%  **/
        height: 60%;
        margin: 5px;
        border-radius: 5px;
        padding: 3px;
        font-size: 80%;


        /* overflow: hidden; */
        /* white-space: nowrap; */
        /* float: left */
        /* justify-content: space-between */

        
        }

        .rangeofgoods .good_botton {
        padding: 1px 15px;
        color: #1b1b1b;
        border-radius: 5px;
        border: 2px solid #666;
        -webkit-box-shadow: 0 3px 3px 1px rgba(0, 0, 0, 0.5);
                box-shadow: 0 3px 3px 1px rgba(0, 0, 0, 0.5);
        /* position: absolute; */
        right: 5%;
        bottom: 5%;
        }    





</style>