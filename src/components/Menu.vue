<script>
import NewsVue from "./News.vue"
import { mapActions } from "vuex"
export default {
  modules:{
      
  }
  ,
  props:{},
  data() {
      return {
          isMenu:1,
          isNews:1,
          
  }
},
  methods:{
      ...mapActions([
          'GET_NEWS_SHORT_FROM_API'
      ]),
  },
  components:{NewsVue},
  mounted(){
      this.GET_NEWS_SHORT_FROM_API()
  }
}


</script>

<template>
<div class="menu-items">
    <div class="content">
        <section class="catalog">
            <div class="header">
                <a href="" @click.prevent="isMenu=!isMenu" class="menu_img"><img src="../assets/Menu/menu.png" alt=""></a> <span class="title">Каталог товаров</span>
            </div>
            <transition>
                <div class="item" v-show="isMenu">
                      <ul>
                          <a href="">
                              <li class="border">
                                  <div class="text">Монеты СССР</div>
                                  <div class="item-img">
                                      <img src="../assets/Menu/arrow.png" alt="">
                                  </div>
                              </li>
                          </a>
                          <a href="">
                              <li class="border">
                                  <div class="text">Современная Россия</div>
                                  <div class="item-img">
                                      <img src="../assets/Menu/arrow.png" alt="">
                                  </div>
                              </li>
                          </a>
        
                            <a href="">
                                <li class="border">
                                    <div class="text">Монеты Азии</div>
                                    <div class="item-img">
                                        <img src="../assets/Menu/arrow.png" alt="">
                                    </div>
                                </li>
                            </a>
        
                            <a href="">
                                <li class="border">
                                  <div class="text">Монеты Америки</div>
                                  <div class="item-img">
                                      <img src="../assets/Menu/arrow.png" alt="">
                                  </div>
                                </li>
                            </a>
                            <a href="">
                                <li class="border">
                                  <div class="text">Монеты Европы</div>
                                  <div class="item-img">
                                      <img src="../assets/Menu/arrow.png" alt="">
                                  </div>
                                </li>
                            </a>
                      </ul>
        
                </div>
            </transition>
        
        </section>
        <section class="news">
        <div class="header">
            <a href="" @click.prevent="isNews=!isNews" class="menu_img"><img src="../assets/Menu/Newspaper.png" alt=""></a>
            <span class="title">Новости</span>
            <a href="" class="all-news"><span class="title title-aside">Все новости</span></a>
        </div>
        <div class="item" v-show="isNews">
                <ul>
                        <NewsVue
                        v-for="newss in this.$store.state.news_short"
                        :key="newss.article"
                        :news_list="newss"
                        />

                        
                        
                </ul>
        
        </div>
        </section>
    </div>
</div>
</template>

<style lang="scss" scoped>
.menu-items{
    background-color: white;
    width:30%;
    display: flex;
}

.content{
    width:290px;
    height:825px;
    max-width:100%;
    border:1px solid gray;
    position:absolute;
    top:18%;
    z-index:1;
}

@media screen and (max-width:1600px) {
    .content{
        top:22%;
    }
}

.title, .text{
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    color: #000000;

}



.item, .catalog{
    width:290px;
}

.header{
    display: flex;
    align-items: center;
    background-color: #C6D6FF;
    padding:.5rem 1rem .5rem 0;

}

.menu_img{
    padding-top:2%;
    padding-left: 5%;
}

.title{
    padding-left:10%;
}

.text{
    width:100%;
}

.item-img{
    float:right;
    margin-top: 1.5%;
    margin-right: 5%;
}

.all-news{
    width:100%;
    margin-left: 15%;
}

.title-aside{  
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    color: #4a2fb8;
}

a{
    li{
        &:hover{
            transition: 0.4s all;
            padding-bottom:1%;
        }
    }
}

.border{
    width:100%;
    display: flex;
    align-items: center;
    margin-top: 2%;
    border-bottom:1px solid #949494fb;
    padding:2% 0 0 1%;
    opacity: 0.8;
    
}

ul{
    width:100%;
    overflow:hidden;
    
}
</style>



