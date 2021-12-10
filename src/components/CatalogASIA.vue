<script>
import HeaderVue from './Header.vue'
import MenuVue from './Menu.vue'
import FooterVue from './Footer.vue'
import CatalogItem from './CatalogItem.vue'
import { mapActions } from "vuex"
export default {
  components:{
      HeaderVue,MenuVue,FooterVue,CatalogItem
  },
  data() {
      return{
          cart:0,
      }
},
methods:{
      ...mapActions([
          'GET_PRODUCTS_ASIA_FROM_API',
          'ADD_TO_CART'
      ]),
      addToCart(data){
          this.ADD_TO_CART(data)
      }
  },
  mounted(){
      this.GET_PRODUCTS_ASIA_FROM_API()
  }
}

</script>

<template>
<HeaderVue/> 
<main class="about container">
 <MenuVue/>
 <section class="section-with-text catalog-monets">
             <CatalogItem
            v-for="product in this.$store.state.products_asia"
            :key="product.article"
            :products="product"
            @addToCart="addToCart"
       ></CatalogItem>
 </section>
 
</main>
<FooterVue/>
</template>

<style lang="scss" >
</style>



