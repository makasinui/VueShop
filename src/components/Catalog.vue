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
       />

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
</style>



