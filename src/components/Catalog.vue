<script>
import CatalogItem from './CatalogItem.vue'
import { mapActions } from "vuex"
export default {
  components:{
    CatalogItem,

  }
  ,
  data() {
      return {
         
  }
  
},
  methods:{
      ...mapActions([
          'GET_PRODUCTS_FROM_API'
      ]),
      addToCart(){
          this.$emit('addToCart',this.products)
      }
  },
  mounted(){
      this.GET_PRODUCTS_FROM_API()
  }
}

</script>

<template>

<div class="catalog">
    <div class="text-head">
        Популярные товары
    </div>
    <div class="catalog-items">
        <CatalogItem
            v-for="product in this.$store.state.products"
            :key="product.article"
            :products="product"
       ><div class="btn"><button @click="addToCart">Купить</button></div></CatalogItem>

    </div>
    

</div>
</template>

<style lang="scss" scoped>
.text-head{
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 42px;
    color: #000000;
}
.catalog{
        padding-left: 310px;
        margin-top: 20px;
}

.catalog-items{
    margin-top: 5%;

    display: flex;
}

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



