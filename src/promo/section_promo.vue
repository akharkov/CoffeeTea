

<template>


    <section id="secPromo" class='promo mainsection container'>
       <!--  <div class="row logo ">
            <img src="./img/logo/MainLogo.png" alt="" class="logo_img">

        </div> -->
        <div class="row container-fluid " style="height:100%">
            <div class="col col-10 ">
                <div class="mainblock">
                    Этот мир не так уж плох, пока в нем есть кофе....
                </div>
                
            </div>
       
            <div id="newsFeed" class="col col-2 d-none d-lg-block news_feed" style="max-height: 90%; text-overflow: clip;" >
                <div v-for="newsItem in news" :key="newsItem.id " style="max-height: 30%; overflow:hidden; text-overflow: ellipsis;"> 
                    
                    
                        <h2 @click="divNewsClick(newsItem.news_note)">{{newsItem.news_title}}</h2>
                        
                         {{newsItem.news_note }}
                         
                        
                        
                    
                </div> 
                
            </div>

            
            
        </div>
        
    </section>    
</template>

<script>
export default {
    data: function(){
        return {
            mess:"Здесь будет лента новостей!!!S",
        news:[
            {
                news_id: 1,
                news_date: "",
                news_title:"Первая новость",
                news_note:"Еще недавно считалось, что напиток не стоит пить людям с сердечно-сосудистыми заболеваниями. Но эксперименты доказали, что кофеин не вызывает развитие гипертонии. У людей с нормальным давлением оно кратковременно повышается, но вскоре приходит в норму. При этом никаких рисков для сердечно-сосудистой системы нет.",
                news_expired:false
            },
            {
                news_id: 2,
                news_date: "",
                news_title:"Вторая новость",
                news_note:"Кофеин повышает уровень дофамина в мозге, который заставляет нас чувствовать себя бодрее и веселее. Употребление кофе в умеренных количествах положительно влияет на центральную нервную систему: улучшает настроение, повышает физическую и умственную активность",
                news_expired:false
            }
             
        ]


        }

    },
    methods:{
         divNewsClick: function(newsNote) {
              alert(newsNote );
          }

    }

    
}
</script>

<style scoped>

</style>>

