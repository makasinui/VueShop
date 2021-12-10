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
  }
},
methods:{
      ...mapActions([
          'GET_PRODUCTS_SSSR_FROM_API'
      ]),
  },
  mounted(){
      this.GET_PRODUCTS_SSSR_FROM_API()
  }
}

</script>

<template>
<HeaderVue/> 
<main class="about container">
 <MenuVue/>
 <section class="section-with-text catalog-monets">
             <CatalogItem
            v-for="product in this.$store.state.products_sssr"
            :key="product.article"
            :products="product"
       ><div class="btn"><button @click="addToCart">Купить</button></div></CatalogItem>
 </section>
 
</main>
<FooterVue/>
</template>

<style lang="scss" scoped>
.btn{
    margin-left:8%;
    margin-top:-13%;
}

button{
    width: 187px;
    height: 52px;
    background: #1a68cd;
    border-radius: 8px;
    border:1px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    color: #FFFFFF;
    text-transform: uppercase;
    margin-top: 20px;
    &:hover{
        transition: 0.5s all;
        background:#1554a7;
        cursor:pointer;
    }
}
</style>



