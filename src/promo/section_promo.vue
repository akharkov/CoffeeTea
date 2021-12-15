

<template>


    <section id="secPromo" class='promo mainsection container'>
       <!--  <div class="row logo ">
            <img src="./img/logo/MainLogo.png" alt="" class="logo_img">

        </div> -->
        <div class="row container-fluid " style="height:100%">
            <div class="col col-10 ">
                <div class=" quotes"> <!-- mainblock -->
                    <h2>Этот мир не так уж плох, пока в нем есть кофе....</h2>
                    
                </div>
                
            </div>
       
            <div id="newsFeed" class="col col-2 d-none d-lg-block news_feed" style="max-height: 90%; text-overflow: clip;" >
                 <div v-for="newsItem in news" :key="newsItem.id " style="max-height: 30%; overflow:hidden; text-overflow: ellipsis;"> 
                    <!-- <h4 @click="divNewsClick(newsItem.news_note)">{{newsItem.news_title}}</h4> 
                    <p></p>
                    <p>{{newsItem.news_note }}</p> -->

                     <news_card  >  {{newsItem.news_title}}</news_card>  
                </div>  
                <!-- <news_card  >  </news_card>  -->
                
            </div>

            
            
        </div>
        
    </section>    
</template>

<script>

    import news_card from "./news_card.vue";


    export default {
        components: { news_card },
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
            },
            readNews: function(){
                console.log("readNews==========================================");
                return fetch("news999")
                .then(function (response) {
                    if (response.status !== 200) {
                    return Promise.reject(new Error(response.statusText))
                    }
                    return Promise.resolve(response)
                })
                .then(function (response) {
                    return response.json()
                })/* 
                .then(function (newsList) {


                    //this.news=data;
                    //console.log('readNews', newsList,' получили ответочку')
                    //console.log('data2', this.news,' получили ответочку')

                    return newsList;              
                }) */
                 
                .catch(function (error) {
                    console.log('error', error)
                })


            }

        },
        created:function() {
 
/*             console.log('news-0 ', this.news,' на старте');
            let tmpNews = this.news;
             fetch("news999")
            .then(function (response) {
                if (response.status !== 200) {
                return Promise.reject(new Error(response.statusText))
                }
                return Promise.resolve(response)
            })
            .then(function (response) {
                return response.json()
            })
            .then(function (newsList) {


                //this.news=data;
                console.log('data1', newsList,' получили ответочку')
                //console.log('data2', this.news,' получили ответочку')
                tmpNews=newsList;
                console.log('data3', tmpNews,' получили tmp')                
            })
            .catch(function (error) {
                console.log('error', error)
            })
            this.news=tmpNews;
            console.log('news-х ', this.news,' в конце'); */

            /* this.news=this.readNews(); */
            this.readNews()
            .then(function(newsList){
                newsList.forEach(itemList => {
                    console.log("itemList==", itemList);
                });

            })



console.log('this.readNews() ', this.readNews(),' в конце');

 

            //this.news = readNewsList("news999", this.news);


        }

        
    }


 /* 

async function readNewsList(newsUrl, newsThis) {

console.log('news-0 ', newsThis,' на старте');
let tmpNews = newsThis;
let tmp;
        await fetch(newsUrl)
            .then(function (response) {
                if (response.status !== 200) {
                return Promise.reject(new Error(response.statusText))
                }
                return Promise.resolve(response)
            })
            .then(function (response) {
                return response.json()
            })
            .then(function (newsList) {


                //this.news=data;
console.log('data1', newsList,' получили ответочку')
//console.log('data2', this.news,' получили ответочку')
tmpNews=newsList;
console.log('data3', tmpNews,' получили tmp')                
            })
            .catch(function (error) {
                console.log('error', error)
            })
newsThis=tmpNews;
console.log('news-х ', newsThis,' в конце');
return tmpNews; //newsThis;
}
  */

</script>

<style scoped>


h2 {
  width: 100%;
  height: 100px;
  text-align: center;
  font: bold 40px Lobster, Arial, sans-serif;
  color: #f7f2f2;
  text-shadow: 0 1px 0 #ccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9, 0 5px 0 #aaa, 0 6px 1px rgba(0, 0, 0, 0.1), 0 0 5px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.3), 0 3px 5px rgba(0, 0, 0, 0.2), 0 5px 10px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.2), 0 20px 20px rgba(0, 0, 0, 0.15);
  letter-spacing: 15px;
  word-spacing: 15px;
}

h3 {
  width: 100%;
  height: 25px;
  text-align: center;
  font: bold 40px Lobster, Arial, sans-serif;
  color: #d8d5d5;
  text-shadow: 0 1px 0 #ccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9, 0 5px 0 #aaa, 0 6px 1px rgba(0, 0, 0, 0.1), 0 0 5px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.3), 0 3px 5px rgba(0, 0, 0, 0.2), 0 5px 10px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.2), 0 20px 20px rgba(0, 0, 0, 0.15);
  letter-spacing: 20px;
  word-spacing: 15px;
}

h4 {
  width: 100%;
  height: 15px;
  text-align: left;
  font: bold 20px Arial, sans-serif;
  color: #24055e;
  letter-spacing: 10px;
  word-spacing: 5px;
}


.mainblock{
  margin: 0;
  /* background: yellow; */
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%)
}


  


.quotes {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin: 2% auto;
  max-width: 90%;
  height: auto;
  font-weight: bold;
  font-style: italic;
  font-size: 40px;
  text-decoration: none;
  color: white;
  text-align: center;
  text-shadow: 0 1px 0 #ccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9, 0 5px 0 #aaa, 0 6px 1px rgba(0, 0, 0, 0.1), 0 0 5px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.3), 0 3px 5px rgba(0, 0, 0, 0.2), 0 5px 10px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.2), 0 20px 20px rgba(0, 0, 0, 0.15);
}
</style>>

