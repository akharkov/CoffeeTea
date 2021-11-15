<template>

    <div id="mainCardDiv" class=" col-12 col-sm-12 col-md-6 col-lg-4 col-xl-2 ">

        <div id="coffee-rangeofgoods01" class="col-12 rangeofgoods">
            
            <div class="row goods_head">

                <div class="good_pic col-3" :style="{'background-image':'url('+Item.productPic+') '}">
                    
                </div>

                <div id=CardTitle class="good_title col-9"> 
                    
                    {{Item.productProp}}
                </div>

                
            </div>
            
            <div class="row good_info">
            
                    {{productProp | truncate(30, '...')}}
                
                

            </div>

            <button class="good_botton">Подробнее</button>

        </div>

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
    }
    
    
}

</script>

<style scoped>
h5{
    text-overflow: ellipsis;
        overflow: hidden;
}

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
        -webkit-box-pack: justify;
            -ms-flex-pack: justify;
        /* justify-content: space-between;
            -ms-flex-line-pack: justify; */
            /* align-content: space-between; */
        /** align-items: center  **/
        }

        .rangeofgoods .goods_head .good_pic {
        /* width: 30%; */
        border-radius: 5px;
        /* background-size: cover; */
        background-size: contain;
        background-repeat: no-repeat;

        }

        .rangeofgoods .goods_head .good_pic .good_pic_logo {
        -o-object-fit: cover;
            object-fit: cover;
        width: 100%;
        }

        .rangeofgoods .goods_head .good_title {
       /*  width: 60%; */
        border-radius: 5px;
        /** float: right **/
        }

        .rangeofgoods .good_info {
        display: block;
        /** width: 100%  **/
        height: 60%;
        margin: 5px;
        border-radius: 5px;
        padding: 3px;
/* overflow: hidden; */
/* white-space: nowrap; */

        /** float: left **/
        /** justify-content: space-between **/

        
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



#mainCardDiv{
    max-height:40%;
    margin-top: 2%;
}


</style>