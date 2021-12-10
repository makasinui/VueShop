<script>

export default {
  props:{
      products:{
          type: Object,
          default(){
              return {
                  
              }
          }
      }
  }
  ,
  data() {
      return {
        
  }
},
methods:{
    addToCart(){
        this.$emit('addToCart',this.products);
    }
}
}

</script>

<template>
    <div class="catalog-item">
        <figure>
            <img :src="require('../assets/catalog/'+products.url)" class="catalog-img">
        
        <figcaption>
            <span class="item-text"><br>
                <span class="name">{{products.name}}</span> <br> {{products.year}}г.
                <br><br>
                {{products.price}}₽
            </span>
            <br><br>
            
        </figcaption>
        <div class="btn"><button @click="addToCart" >Купить</button></div>
        </figure>
    </div>
    
</template>

<style lang="scss" scoped>

figure{
    margin:0 0 0 2%;
}

.item-text{
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    color: #000000;

}
.catalog-item{
    width:350px;
    height:450px;
}


.catalog-img{
    width:250px;
    height:250px;
}

figcaption{
    width:345px;
    height:195px;
    
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

.name{
    display: inline-block;
    width:300px;
}


</style>



