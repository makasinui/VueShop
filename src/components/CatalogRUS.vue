<script>
import HeaderVue from './Header.vue'
import MenuVue from './Menu.vue'
import FooterVue from './Footer.vue'
import CatalogItem from './CatalogItem.vue'
import { mapActions } from "vuex"
export default {
  components:{
      HeaderVue,MenuVue,FooterVue,CatalogItem
  }
  ,
  data() {
      return {
          cart:0,
          item_:'this.products_rus'
  }
},
methods:{
      ...mapActions([
          'GET_PRODUCTS_RUS_FROM_API'
      ]),
      addToCart(data){
          console.log(data)
      }
  },
  mounted(){
      this.GET_PRODUCTS_RUS_FROM_API()
  }
}

</script>

<template>
<HeaderVue/> 
<main class="about container">
 <MenuVue/>
 <section class="section-with-text catalog-monets">
             <CatalogItem
            v-for="product in this.$store.state.products_rus"
            :key="product.article"
            :products="product"
            :item="item_"
            @addToCart="addToCart"
       ></CatalogItem>
 </section>
 
</main>
<FooterVue/>
</template>

<style lang="scss" scoped>

</style>



