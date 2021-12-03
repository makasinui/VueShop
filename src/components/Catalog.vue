<script>
import CatalogItem from './CatalogItem.vue'
export default {
  components:{
    CatalogItem,

  }
  ,
  data() {
      return {
         
  }
}
}

</script>

<template>

<div class="catalog">
    <div class="text-head">
        Популярные товары
    </div>
    <div class="catalog-items">
        <CatalogItem/>
        <CatalogItem/>
        <CatalogItem/>
        <CatalogItem/>

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



