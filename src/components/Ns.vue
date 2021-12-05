<script>
import HeaderVue from './Header.vue'
import MenuVue from './Menu.vue'
import FooterVue from './Footer.vue'
import NewsItem from './Ns_item.vue'
import { mapActions } from "vuex"
export default {
  components:{
      HeaderVue,MenuVue,FooterVue,NewsItem
  }
  ,
  data() {
      return {
          cart:0,
  }
},
    props:{
        news:{
            type: Object,
            default(){
                return {}
            }
        }
    },
      methods:{
      ...mapActions([
          'GET_NEWS_FROM_API'
      ]),
  },
  mounted(){
      this.GET_NEWS_FROM_API()
  }
}

</script>

<template>
<HeaderVue/> 
<main class="about container">
 <MenuVue/>
 <section class="about-us section-with-text">
     <div class="text-head-section">
         Новости
     </div>
     <div class="text-section"> 
        <br>
        <div class="news-list">
            
            <NewsItem
            v-for="news_ in this.$store.state.news"
            :key="news_.article"
            :news="news_" />
            
        </div>
    </div>
 </section>
 
</main>
<FooterVue/>
</template>

<style lang="scss" scoped>

    .header{
        color:#2400FF;
        font-size: 45px;
        font-family: 'Roboto';
    }

    .date{
        font-size: 20px;
        color:gray;
    }

    .text{
        font-size: 28px;
    }
</style>



